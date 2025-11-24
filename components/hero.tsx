"use client"

import { motion, AnimatePresence } from "framer-motion"
import { HandCoins, Map, Car, Zap, BadgeCheck, Wrench, Gauge } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null)

  const metrics = [
    { value: "R$ 26,5 milhões",    label: "Transacionados",         icon: HandCoins, color: "text-emerald-400 drop-shadow-lg" },
    { value: "12 estados + DF",    label: "Presença nacional",      icon: Map,       color: "text-yellow-400 drop-shadow-lg" },
    { value: "2.489+",             label: "Veículos geridos",       icon: Car,       color: "text-pink-400 drop-shadow-lg" },
    { value: "30%",                label: "Aumento na Eficiência",  icon: Zap,       color: "text-orange-400 drop-shadow-lg" },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-80" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight">
              Gestão de frota<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] to-[#0d97eb]">
                mais inteligente
              </span>
              <br />
              e muito mais barata.
            </h1>

            <p className="mt-8 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Controle total de manutenção, benefícios e custos da sua frota pública ou privada com a tecnologia que já é referência em prefeituras e empresas por todo o Brasil.
            </p>

            {/* Badges de confiança */}
            <div className="mt-14 flex flex-wrap gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <Wrench className="w-8 h-8 text-[#025fc7]" />
                <span className="font-medium text-gray-800">+568 Credenciadas</span>
              </div>
              <div className="flex items-center gap-3">
                <Gauge className="w-8 h-8 text-[#0d97eb]" />
                <span className="font-medium text-gray-800">Redução média de 40% nos custos</span>
              </div>
            </div>
          </motion.div>

          {/* Mockup do celular - VERSÃO FINAL COM FOOTER LINDO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#025fc7] rounded-full blur-3xl opacity-20 animate-pulse" />

            <div className="relative bg-white rounded-3xl shadow-2xl p-4 w-80 lg:w-96 border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-b from-[#025fc7] to-[#0d97eb] rounded-2xl text-white flex flex-col h-full">

                {/* Header */}
                <div className="flex justify-between items-center p-6 pb-4">
                  <h3 className="text-xl font-black">HALF Benefícios</h3>
                  <div className="w-16 h-3 bg-white/30 rounded-full"></div>
                </div>

                <p className="text-sm opacity-90 px-6 mb-6">Impacto total no Brasil</p>

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-4 px-6 flex-1">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.12 }}
                      onMouseEnter={() => setHoveredMetric(i)}
                      onMouseLeave={() => setHoveredMetric(null)}
                      className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex flex-col items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.08 }}
                    >
                      <m.icon className={`w-12 h-12 ${m.color} mb-3`} />
                      <p className="text-2xl font-black leading-none">{m.value}</p>
                      <p className="text-xs opacity-90 mt-2 text-center leading-none">{m.label}</p>

                      <AnimatePresence>
                        {hoveredMetric === i && (
                          <motion.div
                            layoutId="glow"
                            className="absolute inset-0 bg-white/40 rounded-2xl"
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
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1 h-3 bg-white/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-white/70"
                      />
                    </div>
                    <span className="text-xs font-medium">100% digital e transparente</span>
                  </div>
                </div>

                {/* FOOTER LINDO DO DASHBOARD ORIGINAL (agora aqui!) */}
                <div className="bg-gray-50 px-6 py-5 text-center">
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