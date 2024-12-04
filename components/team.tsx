"use client"

import { motion } from "framer-motion"
import { DollarSign, Briefcase, Users } from "lucide-react"

const teamMembers = [
  { name: "Ana Silva", role: "Diretora Financeira", department: "Financeiro", description: "Especialista em gestão financeira com foco redução de custos." },
  { name: "Carlos Santos", role: "Gerente de Operações", department: "Operacional", description: "Líder em otimização de processos e eficiência operacional." },
  { name: "Mariana Oliveira", role: "Coordenadora de Credenciamento", department: "Credenciamento", description: "Responsável pela expansão e qualidade da rede de oficinas parceiras." },
]

const departmentIcons = {
  Financeiro: DollarSign,
  Operacional: Briefcase,
  Credenciamento: Users,
}

export default function Team() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#025fc7]">Nossa Equipe</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = departmentIcons[member.department as keyof typeof departmentIcons]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e6f3ff] p-6 rounded-lg shadow-md text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] rounded-full flex items-center justify-center"
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#025fc7]">{member.name}</h3>
                <p className="text-[#057fdf] mb-2">{member.role}</p>
                <p className="text-sm text-[#0d97eb]">{member.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

