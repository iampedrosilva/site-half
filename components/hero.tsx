"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HandCoins, Map, Car, Zap, BadgeCheck, Wrench, Gauge, ArrowUpRight, TrendingUp } from "lucide-react"
import { useState } from "react"

const metrics = [
  { value: "R$ 34,2M", label: "Transacionados", icon: HandCoins, color: "text-emerald-400 drop-shadow-lg" },
  { value: "12 estados+DF", label: "Presença nacional", icon: Map, color: "text-yellow-400 drop-shadow-lg" },
  { value: "3.007+", label: "Veículos geridos", icon: Car, color: "text-pink-400 drop-shadow-lg" },
  { value: "40%", label: "Redução de custos", icon: Zap, color: "text-orange-400 drop-shadow-lg" },
]

export default function Hero() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Overlay gradiente semi-transparente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/85 via-white/75 to-cyan-50/85" />

      {/* Orb decorativo pulsante */}
      <motion.div
        className="absolute top-10 right-[8%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(2,95,199,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.35, 1], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,151,235,0.18) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,95,199,1) 1px, transparent 1px), linear-gradient(90deg, rgba(2,95,199,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Shimmer diagonal */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(105deg, transparent 40%, rgba(2,95,199,0.04) 50%, transparent 60%)" }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Lado esquerdo ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
              Gestão de frota<br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] via-[#0d97eb] to-[#025fc7] animate-gradient-text"
                style={{ backgroundSize: "200% auto" }}
              >
                mais inteligente
              </span>
              <br />
              e muito mais barata.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Controle total de manutenção, benefícios e custos da sua frota pública ou privada com a tecnologia que já é referência em prefeituras e empresas por todo o Brasil.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <motion.a
                href="https://frotas.halfbeneficios.com/register"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="relative inline-flex items-center gap-3 px-10 py-4 justify-center rounded-xl bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white text-sm font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(2,95,199,0.45)] overflow-hidden transition-shadow duration-300"
              >
                <motion.span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12"
                  animate={{ x: ["-100%", "120%"] }}
                  transition={{ duration: 2.8, ease: "linear", repeat: Infinity, repeatDelay: 1.2 }}
                />
                <BadgeCheck className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Seja um credenciado</span>
              </motion.a>

              <motion.a
                href="#half-pay"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("half-pay")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#025fc7]/30 text-[#025fc7] text-sm font-semibold hover:bg-[#025fc7]/6 transition-all duration-300"
              >
                <TrendingUp className="w-4 h-4" />
                Conheça o Half Pay
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Badges de confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#025fc7]/10">
                  <Wrench className="w-6 h-6 text-[#025fc7]" />
                </div>
                <span className="font-medium text-gray-800">+761 Credenciadas</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#0d97eb]/10">
                  <Gauge className="w-6 h-6 text-[#0d97eb]" />
                </div>
                <span className="font-medium text-gray-800">Redução média de 40% nos custos</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Card de métricas ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Orbs atrás do card */}
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-[#025fc7] rounded-full blur-3xl opacity-15" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#0d97eb] rounded-full blur-3xl opacity-10" />

            <div className="gradient-border relative w-80 lg:w-96">
              <div className="bg-gradient-to-b from-[#025fc7] to-[#0d97eb] rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="flex justify-between items-center p-6 pb-4">
                  <div>
                    <h3 className="text-xl font-black text-white">HALF Benefícios</h3>
                    <p className="text-xs text-white/60 font-mono mt-0.5">Impacto total no Brasil</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="text-[9px] text-white/50 font-mono ml-1">live</span>
                  </div>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-3 px-6">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      onMouseEnter={() => setHoveredMetric(i)}
                      onMouseLeave={() => setHoveredMetric(null)}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="relative glass-dark rounded-2xl p-4 flex flex-col items-center justify-center overflow-hidden cursor-default"
                    >
                      <m.icon className={`w-9 h-9 ${m.color} mb-2`} />
                      <p className="text-lg font-black text-white leading-none text-center">{m.value}</p>
                      <p className="text-xs text-white/80 mt-1 text-center leading-tight">{m.label}</p>

                      <AnimatePresence>
                        {hoveredMetric === i && (
                          <motion.div
                            layoutId="metric-glow"
                            className="absolute inset-0 bg-white/25 rounded-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Barra de progresso */}
                <div className="px-6 pt-5 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2.2, delay: 1, ease: "easeOut" }}
                        className="h-full bg-white/75 rounded-full shimmer"
                      />
                    </div>
                    <span className="text-xs text-white font-medium whitespace-nowrap">100% transparente</span>
                  </div>
                </div>

                {/* Rodapé */}
                <div className="bg-gray-50 px-6 py-4 text-center">
                  <p className="text-xs text-gray-600 font-medium flex items-center justify-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-[#025fc7]" />
                    Tecnologia que faz a diferença
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
