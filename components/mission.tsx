"use client"

import { motion } from "framer-motion"
import { Target, Heart, Shield } from "lucide-react"

const missionItems = [
  { icon: Target, title: "Missão", description: "Oferecer soluções inovadoras em gestão de benefícios e frotas para órgãos públicos, promovendo eficiência transparência." },
  { icon: Heart, title: "Valores", description: "Integridade, inovação, excelência no atendimento e compromisso com o setor público." },
  { icon: Shield, title: "Princípios", description: "Transparência, responsabilidade, sustentabilidade e melhoria contínua em todos os nossos serviços." },
]

export default function Mission() {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#025fc7]">Nossa Missão, Valores e Princípios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {missionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-4 p-4 bg-[#e6f3ff] rounded-full inline-block"
              >
                <item.icon className="h-8 w-8 text-[#0d97eb]" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-[#025fc7]">{item.title}</h3>
              <p className="text-[#057fdf]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

