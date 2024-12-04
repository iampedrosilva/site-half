"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: 'João Silva',
    role: 'Gestor de Frota',
    content: 'A Half Benefícios revolucionou nossa gestão de frota. Economizamos tempo e recursos significativamente.',
  },
  {
    name: 'Maria Santos',
    role: 'Controladora Interna',
    content: 'O sistema de benefícios da Half é intuitivo e eficiente. Nossos gestores adoram!',
  },
  {
    name: 'Carlos Oliveira',
    role: 'Secretário de Transportes',
    content: 'Com a Half, conseguimos otimizar nossa frota pública e reduzir custos de manutenção em 40%.',
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">O que nossos clientes dizem</h2>
        <div className="relative h-40">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-lg mb-2">"{testimonials[currentTestimonial].content}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm opacity-75">{testimonials[currentTestimonial].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

