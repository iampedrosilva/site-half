"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Car, Wrench, FileCheck } from "lucide-react"
import { useInView } from "framer-motion";

const AnimatedCounter = ({ end, duration, start }: { end: number; duration: number; start: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return;

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, start])

  return <span>{count.toLocaleString()}</span>
}

export default function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="statistics" className="py-16 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Car className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Veículos Geridos</h3>
            <p className="text-4xl font-bold">
              <AnimatedCounter end={2786} duration={4000} start={isInView} />+
            </p>
            <p className="text-sm mt-2">Frota pública certificada</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <Wrench className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Oficinas Credenciadas</h3>
            <p className="text-4xl font-bold">
              <AnimatedCounter end={692} duration={4000} start={isInView} />+
            </p>
            <p className="text-sm mt-2">Rede credenciada regulamentada em todo o Brasil</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <FileCheck className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Orçamentos Aprovados</h3>
            <p className="text-4xl font-bold">
              <AnimatedCounter end={12350} duration={4000} start={isInView} />+
            </p>
            <p className="text-sm mt-2">Atualizados em tempo real</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

