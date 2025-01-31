"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import BrazilMap from "./brazil-map"
import { FaCar, FaTools } from "react-icons/fa"
import { GiBrazilFlag } from "react-icons/gi"

const states = {
  AC: { name: "Acre", vehicles: 0, workshops: 0 },
  AL: { name: "Alagoas", vehicles: 0, workshops: 0 },
  AP: { name: "Amapá", vehicles: 0, workshops: 0 },
  AM: { name: "Amazonas", vehicles: 0, workshops: 0 },
  BA: { name: "Bahia", vehicles: 280, workshops: 32 },
  CE: { name: "Ceará", vehicles: 0, workshops: 0 },
  DF: { name: "Distrito Federal", vehicles: 0, workshops: 0 },
  ES: { name: "Espírito Santo", vehicles: 200, workshops: 28 },
  GO: { name: "Goiás", vehicles: 250, workshops: 30 },
  MA: { name: "Maranhão", vehicles: 0, workshops: 0 },
  MT: { name: "Mato Grosso", vehicles: 0, workshops: 0 },
  MS: { name: "Mato Grosso do Sul", vehicles: 0, workshops: 0 },
  MG: { name: "Minas Gerais", vehicles: 450, workshops: 55 },
  PA: { name: "Pará", vehicles: 0, workshops: 0 },
  PB: { name: "Paraíba", vehicles: 130, workshops: 22 },
  PR: { name: "Paraná", vehicles: 320, workshops: 38 },
  PE: { name: "Pernambuco", vehicles: 0, workshops: 0 },
  PI: { name: "Piauí", vehicles: 0, workshops: 0 },
  RJ: { name: "Rio de Janeiro", vehicles: 0, workshops: 0 },
  RN: { name: "Rio Grande do Norte", vehicles: 150, workshops: 25 },
  RS: { name: "Rio Grande do Sul", vehicles: 280, workshops: 40 },
  RO: { name: "Rondônia", vehicles: 0, workshops: 0 },
  RR: { name: "Roraima", vehicles: 0, workshops: 0 },
  SC: { name: "Santa Catarina", vehicles: 300, workshops: 35 },
  SP: { name: "São Paulo", vehicles: 500, workshops: 60 },
  SE: { name: "Sergipe", vehicles: 0, workshops: 0 },
  TO: { name: "Tocantins", vehicles: 180, workshops: 20 },
};

export default function Contracts() {
  const [activeState, setActiveState] = useState<string | null>(null)

  // Filtra os estados que têm veículos ou oficinas
  const activeStates = Object.keys(states).filter(
    (state) => states[state as keyof typeof states].vehicles > 0 || states[state as keyof typeof states].workshops > 0
  )

  const stateInfo = activeState && states[activeState as keyof typeof states]
  const isStateActive = activeState ? activeStates.includes(activeState) : false

  return (
    <section id="contracts" className="py-20 bg-white relative overflow-hidden">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#025fc7]/10 to-[#0d97eb]/10 transform rotate-[-10deg] scale-125 -z-10"></div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#025fc7]">
          Contratos Ativos
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">


          {/* Detalhes do Estado */}
          <AnimatePresence mode="wait">
            {stateInfo ? (
              <motion.div
                key={activeState}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-semibold mb-6 text-[#025fc7]">
                  {stateInfo.name}
                </h3>
                {!isStateActive ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <GiBrazilFlag className="text-8xl text-[#025fc7] mx-auto mb-6 animate-pulse" />
                    <p className="text-2xl text-[#025fc7]">
                      "Nossa próxima fronteira! Em breve nesta região."
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] rounded-lg text-white shadow-lg">
                      <FaCar className="text-4xl" />
                      <div>
                        <p className="text-lg">Veículos geridos</p>
                        <p className="text-2xl font-bold">{stateInfo.vehicles}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-[#025fc7] to-[#0d97eb] rounded-lg text-white shadow-lg">
                      <FaTools className="text-4xl" />
                      <div>
                        <p className="text-lg">Oficinas credenciadas</p>
                        <p className="text-2xl font-bold">{stateInfo.workshops}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
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
                <p className="text-3xl font-bold text-center mb-12 text-[#025fc7]">
                  Selecione um estado no mapa para ver detalhes
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Mapa do Brasil */}
          <div className="relative h-[500px]">
            <BrazilMap
              activeStates={activeStates}
              onStateHover={setActiveState}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}