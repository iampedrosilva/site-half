"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const slides = [
  {
    image: "/banner1.webp?height=600&width=1200&text=Gestão+de+Frota+Pública",
    alt: "Gestão de Frota Pública"
  },
  {
    image: "/banner1.webp?height=600&width=1200&text=Oficinas+Credenciadas+em+Ação",
    alt: "Oficinas Credenciadas em Ação"
  },
  {
    image: "/banner1.webp?height=600&width=1200&text=Veículos+em+Manutenção",
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

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

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

      {/* Navegação */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center px-4">
        <button
          onClick={handlePrev}
          className="bg-white p-2 rounded-full text-[#025fc7] hover:bg-[#057fdf] transition-colors"
        >
          <FaChevronLeft size={30} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center justify-center px-4">
        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full text-[#025fc7] hover:bg-[#057fdf] transition-colors"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  )
}
