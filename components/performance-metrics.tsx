"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Redução de Custos", value: 40, suffix: "%" },
  { label: "Aumento na Eficiência", value: 30, suffix: "%" },
  { label: "Veículos Geridos", value: 2.489, suffix: "+" },
]

export default function PerformanceMetrics() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#025fc7]">Métricas de Desempenho</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
                className="text-5xl font-bold mb-2 text-[#0d97eb]"
              >
                {metric.value}{metric.suffix}
              </motion.div>
              <p className="text-lg text-[#057fdf]">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

