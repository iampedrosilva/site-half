"use client"

import { motion } from "framer-motion"
import { FaGooglePlay, FaAppStore } from "react-icons/fa"
import { CheckCircle2, Smartphone, Shield, Zap } from "lucide-react"
import Link from "next/link"

const features = [
  { icon: Zap, text: "Aprovação de orçamentos em tempo real" },
  { icon: Shield, text: "Auditoria e rastreabilidade total" },
  { icon: CheckCircle2, text: "Gestão completa da sua frota no bolso" },
]

const images = [1, 2, 3, 4, 5]
const duplicated = [...images, ...images]

export default function AppPromo() {
  return (
    <section
      id="app"
      className="relative py-0 bg-gradient-to-br from-[#025fc7] via-[#0565cc] to-[#0d97eb] overflow-hidden"
    >
      {/* Grade tech em branco */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom right, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 4 }}
      />

      {/* Conteúdo principal */}
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* ── Texto + CTAs ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 mb-6">
              <Smartphone className="w-4 h-4 text-white" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">
                disponível para iOS & Android
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
              Baixe o{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white animate-gradient-text"
                style={{ backgroundSize: "200% auto" }}
              >
                Aplicativo
              </span>
              <br />
              <span className="text-white/75 text-2xl lg:text-3xl font-bold">
                Frotas Half Benefícios
              </span>
            </h2>

            <p className="text-white/75 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Gerencie sua frota de forma inteligente diretamente do seu smartphone. Orçamentos, aprovações e relatórios na palma da mão.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto lg:mx-0">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm text-white/85">{f.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.halfbeneficios.frotas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#025fc7] font-semibold shadow-lg hover:shadow-[0_8px_30px_rgba(255,255,255,0.3)] transition-shadow duration-300"
                >
                  <FaGooglePlay size={20} />
                  <div className="text-left">
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-60">Disponível no</p>
                    <p className="text-sm font-black leading-tight">Google Play</p>
                  </div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <button className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/15 border border-white/30 text-white font-semibold hover:bg-white/25 transition-colors duration-200">
                  <FaAppStore size={20} />
                  <div className="text-left">
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-60">Em breve na</p>
                    <p className="text-sm font-black leading-tight">App Store</p>
                  </div>
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Carrossel ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 w-full relative"
          >
            {/* Fade nas bordas — cor do bg da seção */}
            <div
              className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(90deg, #025fc7 0%, transparent 100%)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(270deg, #0d97eb 0%, transparent 100%)" }}
            />

            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex animate-scroll-left"
                style={{ width: "max-content", gap: "12px" }}
              >
                {duplicated.map((n, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[200px] h-[360px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/10"
                  >
                    {/* Barra de phone */}
                    <div className="flex items-center justify-center py-2 px-4 bg-white/10 backdrop-blur-sm">
                      <div className="w-16 h-1.5 rounded-full bg-white/30" />
                    </div>
                    <img
                      src={`/imagem-app-frotas${n}.webp`}
                      alt={`App Frotas tela ${n}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Separador */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
