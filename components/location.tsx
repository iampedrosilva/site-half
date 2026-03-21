"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const info = [
  {
    icon: MapPin,
    label: "Endereço",
    value: "Rua S-1, nº 260, St. Bueno\nGoiânia – GO, 74230-220",
    mono: false,
    accent: false,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(62) 3142-2026",
    href: "tel:+556231422026",
    mono: true,
    accent: false,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "atendimento@halfbeneficios.com",
    href: "mailto:atendimento@halfbeneficios.com",
    mono: true,
    accent: false,
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg – Sex: 08h às 18h",
    sub: "Não atendemos sáb, dom e feriados",
    mono: false,
    accent: false,
  },
]

export default function Location() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!4v1738527039854!6m8!1m7!1s402v8jWHecGDdVxJ3CpWmw!2m2!1d-16.71450010085378!2d-49.26380501122968!3f240.2067640967849!4f-6.136073641343316!5f0.7820865974627469"
  const coordinates = "-16.7145001,-49.263805"
  const whatsapp = "(62) 99972-5806"

  return (
    <section id="location" className="relative py-24 bg-white overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2,95,199,0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent blob */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(2,95,199,0.06) 0%, transparent 65%)" }}
      />

      <div className="relative container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-tech mb-3"
          >
            filial · goiânia · GO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-4xl font-black text-[#025fc7]"
          >
            Nossa Filial em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] to-[#0d97eb]">
              Goiânia
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mt-3 text-gray-500 text-base max-w-md mx-auto"
          >
            Estrategicamente localizada no coração de Goiânia para melhor atendê-lo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* ── Mapa ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Frame do mapa com borda gradiente */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#025fc7]/15 h-[420px]">
              <iframe
                title="Mapa Goiânia"
                className="w-full h-full"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Overlay decorativo no canto */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md border border-gray-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] font-semibold text-gray-700 uppercase tracking-wider">
                  Filial · Goiânia
                </span>
              </div>
            </div>

            {/* Botão de rotas */}
            <motion.a
              href={`https://www.google.com/maps/dir/?api=1&destination=${coordinates}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white font-semibold text-sm shadow-lg hover:shadow-[0_8px_30px_rgba(2,95,199,0.35)] transition-shadow duration-300"
            >
              <MapPin className="w-4 h-4" />
              Obter Rotas no Google Maps
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </motion.a>
          </motion.div>

          {/* ── Informações ──────────────────────────────── */}
          <div className="space-y-4">
            {info.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#025fc7]/20 hover:shadow-md transition-all duration-300"
              >
                {/* Ícone */}
                <div className="w-10 h-10 rounded-xl bg-[#025fc7]/8 group-hover:bg-[#025fc7]/15 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#025fc7]" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#0d97eb] mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`font-semibold text-gray-800 hover:text-[#025fc7] transition-colors duration-200 ${item.mono ? "font-mono text-sm" : "text-sm"}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className={`font-semibold text-gray-800 text-sm ${item.mono ? "font-mono" : ""} whitespace-pre-line`}>
                      {item.value}
                    </p>
                  )}
                  {item.sub && (
                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* WhatsApp — destaque */}
            <motion.a
              href="https://wa.me/5562999725806"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-[0_8px_30px_rgba(34,197,94,0.35)] transition-shadow duration-300 overflow-hidden group"
            >
              {/* Shimmer */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 relative">
                <FaWhatsapp className="w-5 h-5" />
              </div>
              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-0.5">
                  WhatsApp · Atendimento rápido
                </p>
                <p className="font-black text-base number-tech">{whatsapp}</p>
              </div>
              <ExternalLink className="w-4 h-4 ml-auto opacity-60 relative" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
