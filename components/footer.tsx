"use client"

import { motion } from "framer-motion"
import { BadgeCheck, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const values = [
  "Controle eficiente de recursos",
  "Gestão estratégica de frotas",
  "Relacionamento transparente",
  "Tecnologia integrada e auditável",
]

const navLinks = [
  { label: "Benefícios", href: "#benefits" },
  { label: "Missão", href: "#mission" },
  { label: "Estatísticas", href: "#statistics" },
  { label: "Processo", href: "#quotation" },
  { label: "Contratos", href: "#contracts" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Aplicativo", href: "#app" },
  { label: "Half Pay", href: "#half-pay" },
  { label: "Localização", href: "#location" },
]

// Partículas determinísticas
const dots = Array.from({ length: 20 }, (_, i) => ({
  left: `${(i * 47 + 7) % 97}%`,
  top: `${(i * 73 + 13) % 90}%`,
  size: i % 3 === 0 ? 2 : 1.5,
  delay: (i * 0.4) % 5,
  duration: 4 + (i % 4),
}))

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#025fc7] via-[#0460c4] to-[#0d97eb] overflow-hidden">
      {/* Grade tech branca */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Blobs */}
      <div
        className="absolute -top-40 left-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
      />

      {/* Partículas flutuantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((d, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: d.left, top: d.top, width: d.size, height: d.size, opacity: 0.12 }}
            animate={{ y: [-10, 10], opacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: d.duration, repeat: Infinity, delay: d.delay, repeatType: "mirror" }}
          />
        ))}
      </div>

      {/* ── Conteúdo ──────────────────────────────────────── */}
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-14">

          {/* Col 1: Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-halfbeneficios.png" alt="Half Benefícios" className="h-10 brightness-0 invert" />
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Em 2 anos de atuação no mercado de benefícios, construímos uma trajetória marcada pela excelência no
              gerenciamento de manutenção de frotas públicas. Atuamos com{" "}
              <span className="text-white font-semibold">legalidade</span>,{" "}
              <span className="text-white font-semibold">transparência</span> e{" "}
              <span className="text-white font-semibold">objetividade</span>.
            </p>

            <ul className="space-y-2.5">
              {values.map((v, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-2.5 text-sm text-white/70"
                >
                  <BadgeCheck className="w-4 h-4 text-white/80 flex-shrink-0" />
                  {v}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Col 2: Navegação */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-white transition-colors duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contato */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+556231422026" className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors duration-200">
                  <Phone className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                  <span className="font-mono">(62) 3142-2026</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/5562999725806" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors duration-200">
                  <FaWhatsapp className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                  <span className="font-mono">(62) 99972-5806</span>
                </a>
              </li>
              <li>
                <a href="mailto:atendimento@halfbeneficios.com" className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                  <span className="font-mono break-all">atendimento@halfbeneficios.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/65">
                  <MapPin className="w-4 h-4 text-white/50 mt-0.5 flex-shrink-0" />
                  <span>Rua S-1, nº 260, St. Bueno<br />Goiânia – GO, 74230-220</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              {[
                { label: "Plataforma Frotas", href: "https://frotas.halfbeneficios.com/" },
                { label: "Half Pay", href: "https://financeiro.halfbeneficios.com/" },
              ].map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-3 h-3" />
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-mono">
            © 2021–2026 Half Benefícios LTDA · CNPJ: 43.091.320/0001-07
          </p>
          <p className="text-white/35 text-xs italic">
            "Mais que gestão em benefícios, construímos relações de confiança"
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">sistema online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
