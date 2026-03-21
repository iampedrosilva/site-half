"use client"

import { motion } from "framer-motion"
import { Target, Heart, Shield } from "lucide-react"

const missionItems = [
  {
    icon: Target,
    title: "Missão",
    description:
      "Oferecer soluções inovadoras em gestão de benefícios para setores públicos e privados, promovendo eficiência e transparência.",
    gradient: "from-[#025fc7] to-[#0d97eb]",
    iconBg: "bg-[#025fc7]/10",
    iconColor: "text-[#025fc7]",
  },
  {
    icon: Heart,
    title: "Valores",
    description:
      "Integridade, inovação, excelência no atendimento e compromisso com nossos parceiros e clientes.",
    gradient: "from-[#0d97eb] to-[#60a5fa]",
    iconBg: "bg-[#0d97eb]/10",
    iconColor: "text-[#0d97eb]",
  },
  {
    icon: Shield,
    title: "Princípios",
    description:
      "Transparência, responsabilidade, sustentabilidade e melhoria contínua em todos os nossos serviços.",
    gradient: "from-[#60a5fa] to-[#025fc7]",
    iconBg: "bg-[#60a5fa]/15",
    iconColor: "text-[#025fc7]",
  },
]

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white relative overflow-hidden">
      {/* Accent blob */}

      <div className="container mx-auto px-4 relative">
        {/* Cabeçalho */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="label-tech text-center mb-3"
        >
          quem somos · propósito · princípios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-black text-center mb-14 text-[#025fc7]"
        >
          Nossa Missão, Valores e Princípios
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.13,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group flex flex-col items-center text-center p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-[#025fc7]/20 transition-all duration-300"
            >
              {/* Gradiente de fundo ao hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Ícone */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className={`relative mb-6 p-5 ${item.iconBg} rounded-2xl group-hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Linha decorativa animada no hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
                />
                <item.icon className={`relative h-9 w-9 ${item.iconColor}`} />
              </motion.div>

              <h3 className="relative text-xl font-bold mb-3 text-[#025fc7]">
                {item.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">{item.description}</p>

              {/* Linha decorativa inferior */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.13 }}
                className={`mt-6 h-0.5 w-16 rounded-full bg-gradient-to-r ${item.gradient} origin-center`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
