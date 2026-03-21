"use client"

import { motion, useInView } from "framer-motion"
import { TrendingDown, Zap, Car } from "lucide-react"
import { useRef } from "react"

// SVG circular progress com ID único por index
function CircularProgress({
  value,
  max = 100,
  id,
  inView,
  delay = 0,
}: {
  value: number
  max: number
  id: string
  inView: boolean
  delay?: number
}) {
  const size = 148
  const sw = 9
  const r = (size - sw) / 2
  const circ = r * 2 * Math.PI
  const offset = circ - (value / max) * circ

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#025fc7" />
          <stop offset="100%" stopColor="#0d97eb" />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(2,95,199,0.12)" strokeWidth={sw} />
      {/* Progress */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.8, ease: "easeOut", delay }}
      />
    </svg>
  )
}

const metrics = [
  {
    icon: TrendingDown,
    label: "Redução de Custos",
    value: 40,
    max: 100,
    suffix: "%",
    description: "Média comprovada na frota pública",
    accent: "from-[#025fc7] to-[#0d97eb]",
  },
  {
    icon: Zap,
    label: "Aumento na Eficiência",
    value: 30,
    max: 100,
    suffix: "%",
    description: "Em processos de aprovação de orçamentos",
    accent: "from-[#0d97eb] to-[#60a5fa]",
  },
  {
    icon: Car,
    label: "Veículos Geridos",
    value: 3.007,
    max: 5.000,
    suffix: "+",
    description: "Frota ativa monitorada em tempo real",
    accent: "from-[#60a5fa] to-[#025fc7]",
  },
]

export default function PerformanceMetrics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2,95,199,0.14) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(13,151,235,0.07) 0%, transparent 65%)" }}
      />

      <div className="relative container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tech mb-3"
          >
            performance · live data
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-[#025fc7]"
          >
            Métricas de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] to-[#0d97eb] animate-gradient-text"
              style={{ backgroundSize: "200% auto" }}>
              Desempenho
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#025fc7]/20 transition-all duration-300 group text-center"
            >
              {/* Gradient accent hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${m.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

              {/* Ícone — separado e acima do ring */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${m.accent} shadow-md mb-5`}
              >
                <m.icon className="w-5 h-5 text-white" />
              </motion.div>

              {/* Ring — somente número + sufixo no centro */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <CircularProgress value={m.value} max={m.max} id={`grad-${i}`} inView={isInView} delay={0.3 + i * 0.15} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="number-tech text-3xl font-black text-[#025fc7] leading-none">
                    {m.value === 2786 ? "2.7k" : m.value}
                  </span>
                  <span className="number-tech text-sm font-bold text-[#0d97eb] mt-0.5">{m.suffix}</span>
                </div>
              </div>

              {/* Label */}
              <h3 className="text-base font-bold text-gray-800 mb-2">{m.label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{m.description}</p>

              {/* Barra linear */}
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${(m.value / m.max) * 100}%` } : {}}
                  transition={{ duration: 1.6, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${m.accent}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
