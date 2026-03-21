"use client"

import { motion } from "framer-motion"

// Posições determinísticas para as partículas flutuantes (evita Math.random no render)
const floatingDots = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 41 + 7) % 97}%`,
  top: `${(i * 67 + 13) % 93}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
  duration: 4 + (i % 4),
  delay: (i * 0.5) % 4,
  opacity: 0.08 + (i % 5) * 0.025,
}))

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    >
      {/* ── Base clara para não perder o branco limpo das seções ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-white" />

      {/* ── Grid de pontos sutil ─────────────────────────────── */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(2,95,199,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ── Blob 1 — canto superior esquerdo ────────────────── */}
      <motion.div
        className="absolute -top-48 -left-48 rounded-full"
        style={{
          width: 640,
          height: 640,
          background:
            "radial-gradient(circle, rgba(2,95,199,0.13) 0%, transparent 68%)",
        }}
        animate={{
          x: [0, 70, -40, 0],
          y: [0, -50, 70, 0],
          scale: [1, 1.18, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── Blob 2 — canto superior direito ─────────────────── */}
      <motion.div
        className="absolute -top-32 -right-48 rounded-full"
        style={{
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle, rgba(13,151,235,0.11) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, -60, 35, 0],
          y: [0, 70, -45, 0],
          scale: [1, 0.88, 1.14, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* ── Blob 3 — centro ─────────────────────────────────── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 760,
          height: 760,
          background:
            "radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 65%)",
        }}
        animate={{
          scale: [1, 1.25, 0.85, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          delay: 8,
        }}
      />

      {/* ── Blob 4 — inferior direito ────────────────────────── */}
      <motion.div
        className="absolute -bottom-48 -right-32 rounded-full"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(2,95,199,0.10) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, -45, 30, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 12,
        }}
      />

      {/* ── Blob 5 — inferior esquerdo ───────────────────────── */}
      <motion.div
        className="absolute -bottom-32 -left-48 rounded-full"
        style={{
          width: 440,
          height: 440,
          background:
            "radial-gradient(circle, rgba(13,151,235,0.09) 0%, transparent 65%)",
        }}
        animate={{
          x: [0, 55, -30, 0],
          y: [0, -55, 30, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 16,
        }}
      />

      {/* ── Partículas flutuantes ────────────────────────────── */}
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#025fc7]"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity,
          }}
          animate={{
            y: [-12, 12],
            opacity: [dot.opacity * 0.4, dot.opacity, dot.opacity * 0.4],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  )
}
