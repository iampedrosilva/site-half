"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Info, BarChart2, FileText, Smartphone, LogIn, Users, MessageCircle } from "lucide-react"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const menuItems = [
    { id: "benefits", label: "Benefícios", icon: Home },
    { id: "mission", label: "Missão", icon: Info },
    { id: "statistics", label: "Estatísticas", icon: BarChart2 },
    { id: "contracts", label: "Contratos", icon: FileText },
    { id: "team", label: "Nossa Equipe", icon: Users },
    { id: "testimonials", label: "Depoimentos", icon: MessageCircle },
    { id: "app", label: "Aplicativo", icon: Smartphone },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm fixed w-full z-50 top-0"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-[#0d97eb] rounded-lg flex items-center justify-center text-white font-bold text-xl"
          >
            H
          </motion.div>
          <span className="text-2xl font-bold text-[#025fc7]">Half Benefícios</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-[#057fdf] hover:text-[#0d97eb] hover:bg-[#e6f3ff] transition-colors"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </Button>
            </motion.div>
          ))}
        </nav>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="outline"
            className="bg-[#0d97eb] text-white hover:bg-[#057fdf] transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Entrar
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

