"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Car, Wrench, FileCheck } from "lucide-react"
import { useInView } from "framer-motion"

const AnimatedCounter = ({
  end,
  duration,
  start,
}: {
  end: number
  duration: number
  start: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Easing out expo para finalizar com mais impacto
      const eased = 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return <span>{count.toLocaleString()}</span>
}

// Partículas flutuantes — posições determinísticas
const particles = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 41 + 5) % 98}%`,
  top: `${(i * 67 + 11) % 92}%`,
  duration: 3.5 + (i % 4),
  delay: (i * 0.35) % 4,
  size: i % 3 === 0 ? 3 : 2,
}))

const stats = [
  {
    icon: Car,
    title: "Veículos Geridos",
    end: 3007,
    suffix: "+",
    sub: "Frota pública certificada",
  },
  {
    icon: Wrench,
    title: "Oficinas Credenciadas",
    end: 761,
    suffix: "+",
    sub: "Rede credenciada em todo o Brasil",
  },
  {
    icon: FileCheck,
    title: "Orçamentos Aprovados",
    end: 13892,
    suffix: "+",
    sub: "Atualizados em tempo real",
  },
]

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      id="statistics"
      className="relative py-20 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white overflow-hidden"
    >
      {/* Grade de fundo */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: 0.12,
            }}
            animate={{ y: [-15, 15], opacity: [0.05, 0.2, 0.05] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
              repeatType: "mirror",
            }}
          />
        ))}
      </div>

      {/* Shimmer wave */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />

      <div className="relative container mx-auto px-4">
        {/* Título */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white/70 text-sm font-semibold uppercase tracking-widest mb-2"
        >
          Números que comprovam
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-3xl font-black text-white mb-14"
        >
          Nosso Impacto em Dados
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative text-center glass-dark rounded-3xl p-8 border border-white/20 group"
            >
              {/* Glow atrás do card no hover */}
              <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />

              {/* Ícone com glow */}
              <motion.div
                animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
                transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm mb-6 group-hover:bg-white/25 transition-colors duration-300"
              >
                <stat.icon className="h-10 w-10 text-white drop-shadow-lg" />
              </motion.div>

              <h3 className="text-lg font-bold mb-3 text-white/90">{stat.title}</h3>

              {/* Número com glow */}
              <p className="text-5xl font-black mb-3 animate-counter-glow">
                <AnimatedCounter end={stat.end} duration={3500} start={isInView} />
                {stat.suffix}
              </p>

              <p className="text-sm text-white/70">{stat.sub}</p>

              {/* Linha decorativa animada */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 + idx * 0.15 }}
                className="mt-5 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
