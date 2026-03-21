"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, MapPin, Wrench } from "lucide-react"

const testimonials = [
  {
    name: "Oficina Scala Auto Center",
    location: "Guanhães, MG",
    content:
      "A parceria com a Half Benefícios aumentou nossa eficiência e trouxe mais clientes para oficina.",
    initials: "SA",
    rating: 5,
    tag: "Credenciada · Minas Gerais",
  },
  {
    name: "MC Auto Center",
    location: "Natal, RN",
    content:
      "O suporte da Half é excelente e a plataforma é muito intuitiva. Nossos processos de aprovação de orçamentos melhoraram significativamente.",
    initials: "MC",
    rating: 5,
    tag: "Credenciada · Rio Grande do Norte",
  },
  {
    name: "Fire Peças",
    location: "Goiânia, GO",
    content:
      "Graças à Half, conseguimos expandir nossos serviços e atender mais veículos da frota pública. O relacionamento é transparente e de longa data.",
    initials: "FP",
    rating: 5,
    tag: "Credenciada · Goiás",
  },
]

export default function WorkshopTestimonials() {
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
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2,95,199,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tech mb-3"
          >
            rede credenciada · +761 oficinas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-[#025fc7]"
          >
            Depoimentos das{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] to-[#0d97eb]">
              Oficinas Parceiras
            </span>
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
                className="border border-[#025fc7]/12 rounded-3xl p-8 md:p-10 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#025fc7]/8 border border-[#025fc7]/15 mb-6">
                  <Wrench className="w-3 h-3 text-[#025fc7]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#025fc7]">
                    {testimonials[current].tag}
                  </span>
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 text-balance">
                  "{testimonials[current].content}"
                </p>

                {/* Autor */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#025fc7] to-[#0d97eb] flex items-center justify-center text-white font-black text-sm number-tech flex-shrink-0">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#025fc7]">{testimonials[current].name}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#0d97eb]" />
                      <span className="text-sm text-[#0d97eb]">{testimonials[current].location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-[#025fc7]/8 border border-[#025fc7]/15 flex items-center justify-center text-[#025fc7] hover:bg-[#025fc7]/15 transition-colors duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-[#025fc7]"
                      : "w-2 bg-[#025fc7]/20 hover:bg-[#025fc7]/40"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-[#025fc7]/8 border border-[#025fc7]/15 flex items-center justify-center text-[#025fc7] hover:bg-[#025fc7]/15 transition-colors duration-200"
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
