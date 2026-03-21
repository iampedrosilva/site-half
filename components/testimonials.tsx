"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "João Silva",
    role: "Gestor de Frota",
    org: "Prefeitura Municipal",
    content:
      "A Half Benefícios revolucionou nossa gestão de frota. Economizamos tempo e recursos significativamente — reduzimos custos em 40% no primeiro trimestre.",
    initials: "JS",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Controladora Interna",
    org: "Secretaria de Administração",
    content:
      "O sistema de benefícios da Half é intuitivo e eficiente. Nossos gestores adoram a plataforma e a transparência nos relatórios é excepcional.",
    initials: "MS",
    rating: 5,
  },
  {
    name: "Carlos Oliveira",
    role: "Secretário de Transportes",
    org: "Governo Estadual",
    content:
      "Com a Half, conseguimos otimizar nossa frota pública e reduzir custos de manutenção em 40%. A tecnologia deles é realmente o que diferencia no setor.",
    initials: "CO",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((p) => (p + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-br from-[#025fc7] via-[#0565cc] to-[#0d97eb] overflow-hidden"
    >
      {/* Grade */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 4 }}
      />

      <div className="relative container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60 mb-3"
          >
            clientes · gestores · secretários
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-white"
          >
            O que nossos clientes dizem
          </motion.h2>
        </div>

        {/* Card carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden" style={{ minHeight: 280 }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-dark border border-white/20 rounded-3xl p-8 md:p-10"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-white/25 mb-6" />

                {/* Estrelas */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 text-balance">
                  "{testimonials[current].content}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white font-black text-sm number-tech flex-shrink-0">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonials[current].name}</p>
                    <p className="text-sm text-white/70">{testimonials[current].role}</p>
                    <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                      {testimonials[current].org}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-8">
            {/* Prev */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl glass-dark border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl glass-dark border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
