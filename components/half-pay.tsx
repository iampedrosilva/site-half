"use client"

import { motion } from "framer-motion"
import {
  TrendingUp, Clock, CheckCircle2, Zap, BarChart3, ArrowUpRight,
  FileText, Wallet, CalendarClock, ShieldCheck,
  Activity, Building2, ChevronRight, BadgeCheck
} from "lucide-react"
import { useState, useEffect } from "react"

const features = [
  {
    icon: BarChart3,
    title: "Acompanhamento de Faturamentos",
    description: "Visualize em tempo real todos os seus serviços faturados, com detalhamento por período, veículo e tipo de serviço.",
  },
  {
    icon: CalendarClock,
    title: "Previsão de Repasse",
    description: "Saiba exatamente quando receberá cada valor. Calendário financeiro inteligente com datas de repasse programadas.",
  },
  {
    icon: FileText,
    title: "Pagamentos e Comprovantes",
    description: "Acesse o histórico completo de pagamentos recebidos com comprovantes disponíveis para download a qualquer momento.",
  },
  {
    icon: Zap,
    title: "Antecipação de Recebíveis",
    description: "Precisa de liquidez? Solicite antecipação diretamente pela plataforma e receba antes do prazo previsto.",
  },
]

const mockTransactions = [
  { servico: "Troca de Óleo", veiculo: "ABC-1234", valor: "R$ 480,00", status: "pago", data: "05/04/2026" },
  { servico: "Revisão Geral", veiculo: "XYZ-5678", valor: "R$ 1.240,00", status: "previsto", data: "12/04/2026" },
  { servico: "Pneus Dianteiros", veiculo: "DEF-9012", valor: "R$ 960,00", status: "pago", data: "03/04/2026" },
  { servico: "Freios Completo", veiculo: "GHI-3456", valor: "R$ 720,00", status: "antecipado", data: "08/04/2026" },
]

const mockStats = [
  { label: "Faturado este mês", value: "R$ 24.800", icon: TrendingUp },
  { label: "Repasse previsto", value: "R$ 8.640", icon: CalendarClock },
  { label: "Antecipações", value: "R$ 3.200", icon: Zap },
]

function DashboardMock() {
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const [counter, setCounter] = useState(24800)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 30))
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Glow atrás do card */}
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(2,95,199,0.18) 0%, transparent 70%)" }}
      />

      {/* Card do dashboard */}
      <div className="relative bg-white border border-[#025fc7]/12 rounded-3xl overflow-hidden shadow-2xl">

        {/* Barra de título */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#025fc7] to-[#0d97eb]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white text-xs font-black tracking-wide">HALF PAY</p>
              <p className="text-white/60 text-[9px] font-mono uppercase tracking-widest">Painel da Oficina</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[9px] text-white/70 font-mono uppercase tracking-wider">ao vivo</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-px bg-gray-100 border-b border-gray-100">
          {mockStats.map((stat, i) => (
            <div key={i} className="bg-white p-4">
              <div className="flex items-center gap-1.5 mb-1.5">
                <stat.icon className="w-3.5 h-3.5 text-[#025fc7]" />
                <span className="text-[9px] text-gray-400 font-mono uppercase tracking-wider leading-tight">{stat.label}</span>
              </div>
              <p className="text-sm font-black text-[#025fc7] leading-none">
                {i === 0 ? `R$ ${counter.toLocaleString("pt-BR")}` : stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Tabela de transações */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Últimas transações</p>
            <button className="text-[9px] text-[#025fc7] font-mono hover:text-[#0d97eb] transition-colors flex items-center gap-1">
              Ver todas <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-1.5">
            {mockTransactions.map((tx, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActiveRow(i)}
                onMouseLeave={() => setActiveRow(null)}
                animate={{ backgroundColor: activeRow === i ? "rgba(2,95,199,0.04)" : "rgba(0,0,0,0)" }}
                className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors cursor-default"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    tx.status === "pago" ? "bg-[#025fc7]/10" :
                    tx.status === "antecipado" ? "bg-[#0d97eb]/10" : "bg-gray-100"
                  }`}>
                    {tx.status === "pago"
                      ? <CheckCircle2 className="w-3.5 h-3.5 text-[#025fc7]" />
                      : tx.status === "antecipado"
                      ? <Zap className="w-3.5 h-3.5 text-[#0d97eb]" />
                      : <Clock className="w-3.5 h-3.5 text-gray-400" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-700 font-medium truncate">{tx.servico}</p>
                    <p className="text-[9px] text-gray-400 font-mono">{tx.veiculo} · {tx.data}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-2">
                  <p className="text-xs font-black text-gray-800">{tx.valor}</p>
                  <span className={`text-[8px] font-mono uppercase tracking-wider ${
                    tx.status === "pago" ? "text-[#025fc7]" :
                    tx.status === "antecipado" ? "text-[#0d97eb]" : "text-gray-400"
                  }`}>{tx.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Banner de antecipação */}
        <div className="mx-4 mb-4 rounded-xl border border-[#0d97eb]/20 bg-[#025fc7]/5 p-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#025fc7]/12 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3.5 h-3.5 text-[#025fc7]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] text-[#025fc7] font-semibold">Antecipação disponível</p>
            <p className="text-[9px] text-gray-400">Receba em até 24h úteis</p>
          </div>
          <button className="flex-shrink-0 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-[9px] font-bold text-white hover:opacity-90 transition-opacity">
            Solicitar
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut" as const, duration: 0.5 } },
}

export default function HalfPay() {
  return (
    <section id="half-pay" className="py-20 bg-[#f8fafc] relative overflow-hidden">

      {/* Dot grid sutil — igual à seção Benefits */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(2,95,199,0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blobs decorativos */}
      <motion.div
        className="absolute -top-32 right-0 rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(2,95,199,0.07) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(13,151,235,0.06) 0%, transparent 65%)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      <div className="relative container mx-auto px-4">

        {/* ── Cabeçalho ──────────────────────────────────── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#0d97eb] text-sm font-semibold uppercase tracking-widest mb-2"
        >
          plataforma financeira · exclusivo para oficinas credenciadas
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl lg:text-5xl font-black text-center mb-4 text-[#025fc7]"
        >
          HALF{" "}
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#025fc7] via-[#0d97eb] to-[#025fc7] animate-gradient-text"
            style={{ backgroundSize: "200% auto" }}
          >
            PAY
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Sua oficina no controle total das finanças. Acompanhe faturamentos, repasses,
          pagamentos e antecipações em uma única plataforma — simples, rápida e transparente.
        </motion.p>

        {/* ── Grid principal ──────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-16">

          {/* Features */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ x: 6, scale: 1.015 }}
                className="group relative flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#025fc7]/20 transition-all duration-300 cursor-default"
              >
                {/* Gradiente sutil ao hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#025fc7]/0 to-[#0d97eb]/0 group-hover:from-[#025fc7]/4 group-hover:to-[#0d97eb]/3 transition-all duration-300" />

                {/* Ícone */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-[#025fc7]/8 group-hover:bg-[#025fc7]/15 flex items-center justify-center transition-colors duration-300"
                >
                  <feature.icon className="w-5 h-5 text-[#025fc7]" />
                </motion.div>

                {/* Texto */}
                <div className="relative flex-1">
                  <h3 className="text-[#025fc7] font-bold text-base mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>

                <ArrowUpRight className="relative w-4 h-4 text-gray-200 group-hover:text-[#0d97eb] flex-shrink-0 mt-1 transition-colors duration-200" />
              </motion.div>
            ))}
          </motion.div>

          {/* Dashboard mock */}
          <DashboardMock />
        </div>

        {/* ── Diferenciais ─────────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: ShieldCheck,
              title: "100% Seguro",
              desc: "Dados criptografados e acesso restrito à sua oficina credenciada.",
            },
            {
              icon: Activity,
              title: "Atualização em Tempo Real",
              desc: "Faturamentos e repasses atualizados instantaneamente no painel.",
            },
            {
              icon: Building2,
              title: "Plataforma Dedicada",
              desc: "Separada do sistema de frotas — foco total na sua gestão financeira.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#025fc7]/20 transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#025fc7]/0 to-[#0d97eb]/0 group-hover:from-[#025fc7]/4 group-hover:to-[#0d97eb]/3 transition-all duration-300 pointer-events-none" />
              <motion.div
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 260, damping: 14 }}
                className="mb-5 p-4 rounded-xl bg-[#025fc7]/8 group-hover:bg-[#025fc7]/14 transition-colors duration-300"
              >
                <card.icon className="w-6 h-6 text-[#025fc7]" />
              </motion.div>
              <h4 className="text-[#025fc7] font-bold mb-2">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://financeiro.halfbeneficios.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white font-semibold text-sm shadow-lg hover:shadow-[0_8px_30px_rgba(2,95,199,0.45)] overflow-hidden transition-shadow duration-300"
          >
            <motion.span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: ["-100%", "120%"] }}
              transition={{ duration: 2.8, ease: "linear", repeat: Infinity, repeatDelay: 1.5 }}
            />
            <Wallet className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Acessar Half Pay</span>
          </motion.a>

          <motion.a
            href="https://frotas.halfbeneficios.com/register"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#025fc7]/25 text-[#025fc7] font-medium text-sm hover:bg-[#025fc7]/5 hover:border-[#025fc7]/40 transition-all duration-300"
          >
            <BadgeCheck className="w-4 h-4" />
            Quero ser uma oficina credenciada
          </motion.a>
        </motion.div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-xs font-mono mt-5 tracking-wide"
        >
          * Acesso exclusivo para oficinas já credenciadas na rede Half Benefícios
        </motion.p>
      </div>
    </section>
  )
}
