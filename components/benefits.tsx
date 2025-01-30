"use client"

import { motion } from "framer-motion"
import { CreditCard, Pill, User, Coffee, UtensilsCrossed, Building, Fuel, Award, Gift, TreesIcon as Tree, Briefcase, Car, FileText, MoreHorizontal } from "lucide-react"

const benefits = [
  { icon: Car, name: "Gestão de Frotas" },
  { icon: Fuel, name: "Combustível" },
  { icon: Coffee, name: "Alimentação" },
  { icon: UtensilsCrossed, name: "Refeição" },
  { icon: CreditCard, name: "Convênio" },
  { icon: Pill, name: "Farmácia" },
  { icon: User, name: "Servidor" },
  { icon: Building, name: "Gestão de Farmácia PBM" },
  { icon: Award, name: "Premiação" },
  { icon: Gift, name: "Presente" },
  { icon: Tree, name: "Natal" },
  { icon: Briefcase, name: "Empresarial" },
  { icon: FileText, name: "Orçamentos Eletrônicos" },
  { icon: MoreHorizontal, name: "Outros Orçamentos" }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-[#025fc7]"
        >
          Nossos Benefícios
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-[#f8fafc] rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, color: "#057fdf" }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <benefit.icon className="h-12 w-12 text-[#025fc7]" />
              </motion.div>
              <h3 className="text-lg font-semibold text-[#025fc7]">{benefit.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

