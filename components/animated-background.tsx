"use client"

import { motion } from "framer-motion"

// Partículas flutuantes — posições determinísticas
const floatingDots = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 41 + 7) % 97}%`,
  top: `${(i * 67 + 13) % 93}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
  duration: 4 + (i % 4),
  delay: (i * 0.5) % 4,
  opacity: 0.08 + (i % 5) * 0.025,
}))

// Linhas horizontais decorativas
const horizLines = Array.from({ length: 5 }, (_, i) => ({
  top: `${15 + i * 18}%`,
  duration: 18 + i * 4,
  delay: i * 3.5,
  opacity: 0.025 + i * 0.005,
}))

// Nós de rede (nodes)
const networkNodes = Array.from({ length: 8 }, (_, i) => ({
  left: `${(i * 73 + 11) % 92}%`,
  top: `${(i * 59 + 23) % 88}%`,
  size: i % 2 === 0 ? 5 : 3.5,
  duration: 6 + (i % 4),
  delay: i * 0.8,
}))

export default function AnimatedBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    >
      {/* ── Base clara ──────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-white" />

      {/* ── Grid de pontos sutil ─────────────────────────── */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(2,95,199,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* ── Blob 1 — canto superior esquerdo ────────────── */}
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

      {/* ── Blob 2 — canto superior direito ─────────────── */}
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

      {/* ── Blob 3 — centro ─────────────────────────────── */}
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

      {/* ── Blob 4 — inferior direito ───────────────────── */}
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

      {/* ── Blob 5 — inferior esquerdo ──────────────────── */}
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

      {/* ── Linhas horizontais animadas (scan) ─────────── */}
      {horizLines.map((line, i) => (
        <motion.div
          key={`hline-${i}`}
          className="absolute left-0 right-0 h-px"
          style={{
            top: line.top,
            background: `linear-gradient(90deg, transparent, rgba(2,95,199,${line.opacity * 8}), rgba(13,151,235,${line.opacity * 6}), transparent)`,
          }}
          animate={{ opacity: [0, line.opacity * 3, 0], scaleX: [0.3, 1, 0.3] }}
          transition={{
            duration: line.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.delay,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* ── Nós de rede com pulso ────────────────────────── */}
      {networkNodes.map((node, i) => (
        <div
          key={`node-${i}`}
          className="absolute"
          style={{ left: node.left, top: node.top }}
        >
          <motion.div
            className="rounded-full bg-[#025fc7]"
            style={{ width: node.size, height: node.size, opacity: 0.15 }}
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
          />
          {/* Anel de pulso */}
          <motion.div
            className="absolute inset-0 rounded-full border border-[#025fc7]/20"
            animate={{ scale: [1, 3], opacity: [0.3, 0] }}
            transition={{
              duration: node.duration * 0.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: node.delay + 0.5,
            }}
            style={{ width: node.size, height: node.size }}
          />
        </div>
      ))}

      {/* ── Shimmer wave diagonal ────────────────────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 40%, rgba(2,95,199,0.025) 50%, transparent 60%)",
          backgroundSize: "200% 200%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* ── Partículas flutuantes ────────────────────────── */}
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
