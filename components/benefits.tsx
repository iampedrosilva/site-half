"use client"

import { motion } from "framer-motion"
import {
  MonitorCog, CreditCard, Pill, User, Coffee, UtensilsCrossed,
  Building, Fuel, Award, Gift, TreesIcon as Tree, Briefcase,
  Car, FileText, MoreHorizontal,
} from "lucide-react"

const benefits = [
  { icon: MonitorCog, name: "Gestão de Frotas" },
  { icon: Fuel, name: "Combustível" },
  { icon: Car, name: "Locação de Veículos" },
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
  { icon: MoreHorizontal, name: "Outros Orçamentos" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ease: "easeOut" as const, duration: 0.5 },
  },
}

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      {/* Dot grid sutil */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2,95,199,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Cabeçalho */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#0d97eb] text-sm font-semibold uppercase tracking-widest mb-2"
        >
          Soluções completas
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl lg:text-4xl font-black text-center mb-14 text-[#025fc7]"
        >
          Nossos Benefícios
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.06,
                y: -6,
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 20px 40px rgba(2,95,199,0.14)",
              }}
              className="relative flex flex-col items-center text-center p-6 bg-[#f8fafc] rounded-2xl shadow-sm border border-transparent hover:border-[#025fc7]/15 transition-colors duration-300 cursor-default group"
            >
              {/* Fundo gradiente sutil ao hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#025fc7]/0 to-[#0d97eb]/0 group-hover:from-[#025fc7]/5 group-hover:to-[#0d97eb]/5 transition-all duration-300" />

              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative mb-4 p-3 rounded-xl bg-[#025fc7]/8 group-hover:bg-[#025fc7]/15 transition-colors duration-300"
              >
                <benefit.icon className="h-10 w-10 text-[#025fc7]" />
              </motion.div>

              <h3 className="relative text-base font-semibold text-[#025fc7]">
                {benefit.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
