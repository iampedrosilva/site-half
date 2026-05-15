"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function GrupoRS() {
  return (
    <section className="relative py-16 bg-white border-t border-gray-100 overflow-hidden">
      {/* Fundo sutil */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative container mx-auto px-4 flex flex-col items-center gap-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-gray-400"
        >
          Fazemos parte de
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Image
            src="/logo-grupo-rs.png"
            alt="Grupo RS"
            width={280}
            height={80}
            className="h-14 w-auto object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-sm max-w-md leading-relaxed"
        >
          A Half Benefícios é uma empresa do{" "}
          <span className="font-semibold text-gray-700">Grupo RS</span>, um grupo empresarial
          comprometido com inovação, tecnologia e soluções de impacto para o setor público e privado.
        </motion.p>
      </div>
    </section>
  )
}