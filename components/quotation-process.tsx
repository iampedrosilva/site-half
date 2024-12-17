"use client"

import { motion } from "framer-motion"
import { Search, FileText, CheckCircle } from "lucide-react"

const steps = [
  { icon: Search, title: "Busca de Oficinas", description: "Localize as melhores oficinas na sua região" },
  { icon: FileText, title: "Comparação", description: "Compare orçamentos de diferentes oficinas" },
  { icon: CheckCircle, title: "Aprovação", description: "Selecione e aprove o melhor orçamento" },
]

const Arrow = () => (
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="h-0.5 bg-[#0d97eb] absolute top-1/2 left-0 transform -translate-y-1/2"
  />
)

export default function QuotationProcess() {
  return (
    <section className="py-16 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#025fc7]">
          Processo de Orçamentos Eletrônicos
        </h2>
        {/* Layout Responsivo */}
        <div className="flex flex-col md:flex-row items-center md:justify-center space-y-8 md:space-y-0 md:space-x-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center relative bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 z-10"
            >
              {/* Ícone */}
              <div className="mb-4 p-3 bg-[#e6f3ff] rounded-full">
                <step.icon className="h-8 w-8 text-[#0d97eb]" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#025fc7]">{step.title}</h3>
              <p className="text-sm text-[#057fdf]">{step.description}</p>

              {/* Seta apenas em telas maiores */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-8 transform -translate-y-1/2">
                  <Arrow />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
