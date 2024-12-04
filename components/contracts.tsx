"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BrazilMap from "./brazil-map"

const states = {
  GO: { name: "Goiás", vehicles: 250, workshops: 30 },
  TO: { name: "Tocantins", vehicles: 180, workshops: 20 },
  SC: { name: "Santa Catarina", vehicles: 300, workshops: 35 },
  RS: { name: "Rio Grande do Sul", vehicles: 280, workshops: 40 },
  RN: { name: "Rio Grande do Norte", vehicles: 150, workshops: 25 },
  ES: { name: "Espírito Santo", vehicles: 200, workshops: 28 },
  SP: { name: "São Paulo", vehicles: 500, workshops: 60 },
  MG: { name: "Minas Gerais", vehicles: 450, workshops: 55 },
  PR: { name: "Paraná", vehicles: 320, workshops: 38 },
  PB: { name: "Paraíba", vehicles: 130, workshops: 22 },
  BA: { name: "Bahia", vehicles: 280, workshops: 32 },
}

export default function Contracts() {
  const [activeState, setActiveState] = useState<string | null>(null)

  return (
    <section id="contracts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#025fc7]">Contratos Ativos</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px]">
            <BrazilMap
              activeStates={Object.keys(states)}
              onStateHover={setActiveState}
              className="w-full h-full"
            />
          </div>
          <AnimatePresence mode="wait">
            {activeState ? (
              <motion.div
                key={activeState}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-semibold mb-6 text-[#025fc7]">
                  {states[activeState as keyof typeof states].name}
                </h3>
                <p className="text-lg">
                  Veículos geridos: <span className="font-bold">{states[activeState as keyof typeof states].vehicles}</span>
                </p>
                <p className="text-lg">
                  Oficinas credenciadas: <span className="font-bold">{states[activeState as keyof typeof states].workshops}</span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl text-gray-600">Selecione um estado no mapa para ver detalhes</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

