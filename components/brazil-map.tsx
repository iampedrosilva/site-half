"use client"

import { motion } from "framer-motion"

interface BrazilMapProps {
  activeStates: string[]
  onStateHover: (state: string | null) => void
  className?: string
}

const statesPaths: { [key: string]: string } = {
  GO: "M400 300 L450 350 L400 400 L350 Z",
  TO: "M420 200 L470 250 L420 300 L370 Z",
  SC: "M350 550 L400 600 L350 650 L300 Z",
  RS: "M300 600 L350 650 L300 700 L250 Z",
  RN: "M550 150 L600 200 L550 250 L500 Z",
  ES: "M550 400 L600 450 L550 500 L500 Z",
  SP: "M400 450 L450 500 L400 550 L350 Z",
  MG: "M450 350 L500 400 L450 450 L400 Z",
  PR: "M350 500 L400 550 L350 600 L300 Z",
  PB: "M600 200 L650 250 L600 300 L550 Z",
  BA: "M500 300 L550 350 L500 400 L450 Z",
}

export default function BrazilMap({ activeStates, onStateHover, className = "" }: BrazilMapProps) {
  return (
    <svg
      viewBox="0 800"
      className={className}
      onMouseLeave={() => onStateHover(null)}
    >
      {Object.entries(statesPaths).map(([state, path]) => (
        <motion.path
          key={state}
          d={path}
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: activeStates.includes(state) ? 1 : 0.5,
            fill: activeStates.includes(state) ? "#0d97eb" : "#e5e7eb"
          }}
          whileHover={{ 
            opacity: 1,
            scale: 1.05,
            fill: "#025fc7"
          }}
          onMouseEnter={() => onStateHover(state)}
          className="cursor-pointer transition-colors"
        />
      ))}
    </svg>
  )
}

