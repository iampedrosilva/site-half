"use client"

import { motion, useInView } from "framer-motion"
import { Search, GitCompareArrows, CheckCircle2 } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Busca de Oficinas",
    description: "Localize oficinas credenciadas na sua região com filtros inteligentes por especialidade e avaliação.",
    tag: "LOCALIZANDO_REDE",
  },
  {
    number: "02",
    icon: GitCompareArrows,
    title: "Comparação",
    description: "Receba orçamentos detalhados em tempo real e compare preços, prazos e garantias automaticamente.",
    tag: "PROCESSANDO_DADOS",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Aprovação",
    description: "Aprove o melhor orçamento com um clique. Histórico rastreável e auditável para total transparência.",
    tag: "APROVAÇÃO_DIGITAL",
  },
]

export default function QuotationProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-white via-[#f8fbff] to-[#f0f7ff] overflow-hidden"
    >
      {/* Grade tech em azul de marca */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,95,199,1) 1px, transparent 1px), linear-gradient(90deg, rgba(2,95,199,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Brilho central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(13,151,235,0.18) 0%, transparent 70%)" }}
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
            pipeline de orçamentos eletrônicos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-[#025fc7]"
          >
            Processo de Orçamentos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] to-[#0d97eb] animate-gradient-text"
              style={{ backgroundSize: "200% auto" }}>
              Eletrônicos
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative flex-1 w-full bg-white border border-[#025fc7]/12 hover:border-[#0d97eb]/40 rounded-2xl p-8 shadow-sm hover:shadow-xl group transition-all duration-300"
              >
                {/* Número monospace — watermark */}
                <div className="number-tech text-5xl font-black text-[#025fc7]/15 group-hover:text-[#025fc7]/30 transition-colors duration-300 leading-none mb-6 select-none">
                  {step.number}
                </div>

                {/* Ícone */}
                <div className="relative inline-flex mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#025fc7] to-[#0d97eb] flex items-center justify-center shadow-md group-hover:shadow-[0_0_20px_rgba(13,151,235,0.35)] transition-shadow duration-300">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-[#0d97eb]/40"
                    animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.6 }}
                  />
                </div>

                {/* Tag terminal */}
                <div className="font-mono text-[10px] text-[#025fc7]/50 mb-2 tracking-widest">
                  {`> ${step.tag}`}
                  <span className="cursor-blink text-[#0d97eb]">_</span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>

                {/* Linha de progresso animada na base */}
                {isInView && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] rounded-b-2xl origin-left"
                  />
                )}
              </motion.div>

              {/* Conector desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-12 flex-shrink-0 relative">
                  <div className="w-full h-px bg-[#025fc7]/20 relative overflow-hidden">
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0d97eb]"
                      animate={{ x: ["-8px", "48px"] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    />
                  </div>
                  <svg className="absolute w-3 h-3 text-[#025fc7]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              {/* Conector mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex flex-col items-center py-2">
                  <div className="w-px h-8 bg-gradient-to-b from-[#025fc7]/40 to-[#0d97eb]/20" />
                  <svg className="w-3 h-3 text-[#025fc7]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Badge inferior */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#025fc7]/8 border border-[#025fc7]/18 text-[#025fc7] text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100% digital · rastreável · auditável
          </div>
        </motion.div>
      </div>
    </section>
  )
}
