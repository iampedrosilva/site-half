"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1200&text=Gestão+de+Frota+Pública",
    alt: "Gestão de Frota Pública"
  },
  {
    image: "/placeholder.svg?height=600&width=1200&text=Oficinas+Credenciadas+em+Ação",
    alt: "Oficinas Credenciadas em Ação"
  },
  {
    image: "/placeholder.svg?height=600&width=1200&text=Veículos+em+Manutenção",
    alt: "Veículos sendo Reparados ou Inspecionados"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>
  )
}

