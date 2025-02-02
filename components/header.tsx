"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CreditCard, Info, BarChart2, FileText, Smartphone, MessageCircle, MapPin, Menu } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FaCar, FaMoneyBillWave, FaComments } from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { id: "benefits", label: "Benefícios", icon: CreditCard },
    { id: "mission", label: "Missão", icon: Info },
    { id: "statistics", label: "Estatísticas", icon: BarChart2 },
    { id: "contracts", label: "Contratos", icon: FileText },
    { id: "testimonials", label: "Depoimentos", icon: MessageCircle },
    { id: "app", label: "Aplicativo", icon: Smartphone },
    { id: "location", label: "Localização", icon: MapPin },
  ]

  const accessOptions = [
    {
      icon: FaCar,
      title: "Plataforma Frotas",
      description: "Gestão completa de veículos",
      link: "https://frotas.halfbeneficios.com/"
    },
    {
      icon: FaMoneyBillWave,
      title: "Módulo Financeiro",
      description: "Controle financeiro integrado",
      link: "https://financeiro.halfbeneficios.com/"
    },
    {
      icon: FaComments,
      title: "Chat de Atendimento (Colaborador)",
      description: "Suporte rápido e eficiente",
      link: "https://chat.halfbeneficios.com/"
    }
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm fixed w-full z-50 top-0 h-18 md:h-20 flex items-center"
      >

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <img
              src="/logo-halfbeneficios.png"
              alt="Logo Half Benefícios"
              className="h-10 md:h-12"
            />

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-4">
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

            {/* Botão de Acesso */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setIsAccessModalOpen(true)}
                className="bg-[#025fc7] hover:bg-[#0d97eb] text-white"
              >
                Acesso
              </Button>

              {/* Menu Mobile */}
              <Button
                variant="ghost"
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6 text-[#057fdf]" />
              </Button>
            </div>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden bg-white p-4 space-y-2 border-t"
            >
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="w-full justify-start text-[#057fdf] hover:bg-[#e6f3ff]"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Modal de Acesso */}
      <Dialog open={isAccessModalOpen} onOpenChange={setIsAccessModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#025fc7] text-center">
              Acesso às Plataformas
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            {accessOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border hover:bg-[#e6f3ff] transition-colors"
              >
                <div className="p-3 bg-[#025fc7]/10 rounded-full">
                  <option.icon className="w-6 h-6 text-[#025fc7]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#025fc7]">{option.title}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}