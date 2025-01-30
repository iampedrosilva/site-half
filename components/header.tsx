"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Info, BarChart2, FileText, Smartphone, MessageCircle } from "lucide-react"

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Define o offset (em pixels) que você deseja ajustar
      const offset = 80 // Ajuste esse valor conforme necessário
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  const menuItems = [
    { id: "benefits", label: "Benefícios", icon: Home },
    { id: "mission", label: "Missão", icon: Info },
    { id: "statistics", label: "Estatísticas", icon: BarChart2 },
    { id: "contracts", label: "Contratos", icon: FileText },
    { id: "testimonials", label: "Depoimentos", icon: MessageCircle },
    { id: "app", label: "Aplicativo", icon: Smartphone },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm fixed w-full z-50 top-0"
    >
        <div className="flex items-center justify-between p-4">
        <img src="/logo-halfbeneficios.png" alt="Logo Half Benefícios" className="h-12" />
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
      </div>
    </motion.header>
  )
}

