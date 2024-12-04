"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Oficina AutoTech",
    location: "São Paulo, SP",
    content: "A parceria com a Half Benefícios aumentou nossa eficiência e trouxe mais clientes.",
  },
  {
    name: "Mecânica Rápida",
    location: "Rio de Janeiro, RJ",
    content: "O suporte da Half é excelente. Nossos processos melhoraram significativamente.",
  },
  {
    name: "Oficina do João",
    location: "Belo Horizonte, MG",
    content: "Graças à Half, conseguimos expandir nossos serviços e atender mais veículos públicos.",
  },
]

export default function WorkshopTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-12 bg-[#e6f3ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#025fc7]">Depoimentos das Oficinas Parceiras</h2>
        <div className="relative h-40">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-lg mb-2 text-[#057fdf]">"{testimonials[currentTestimonial].content}"</p>
              <p className="font-semibold text-[#025fc7]">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-[#0d97eb]">{testimonials[currentTestimonial].location}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

