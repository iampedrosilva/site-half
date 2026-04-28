import type { CSSProperties } from "react"

type AnimatedStyle = CSSProperties & Record<`--${string}`, string | number>

const blobs = [
  {
    className: "-top-48 -left-48",
    size: 640,
    color: "rgba(2,95,199,0.13)",
    duration: "24s",
    delay: "0s",
    x1: "64px",
    y1: "-44px",
    x2: "-36px",
    y2: "58px",
    s1: 1.14,
    s2: 0.94,
    rotate: "18deg",
    rotateBack: "-11deg",
  },
  {
    className: "-top-32 -right-48",
    size: 560,
    color: "rgba(13,151,235,0.11)",
    duration: "30s",
    delay: "-6s",
    x1: "-54px",
    y1: "58px",
    x2: "34px",
    y2: "-40px",
    s1: 0.9,
    s2: 1.12,
    rotate: "-16deg",
    rotateBack: "10deg",
  },
  {
    className: "top-1/2 left-1/2",
    size: 760,
    color: "rgba(96,165,250,0.06)",
    duration: "38s",
    delay: "-12s",
    x1: "24px",
    y1: "-18px",
    x2: "-22px",
    y2: "22px",
    s1: 1.18,
    s2: 0.9,
    rotate: "36deg",
    rotateBack: "-22deg",
    center: true,
  },
  {
    className: "-bottom-48 -right-32",
    size: 520,
    color: "rgba(2,95,199,0.10)",
    duration: "27s",
    delay: "-18s",
    x1: "-42px",
    y1: "-62px",
    x2: "28px",
    y2: "36px",
    s1: 1.2,
    s2: 0.9,
    rotate: "14deg",
    rotateBack: "-8deg",
  },
]

const lines = Array.from({ length: 3 }, (_, i) => ({
  top: `${18 + i * 28}%`,
  duration: `${22 + i * 5}s`,
  delay: `${-i * 4}s`,
  opacity: 0.08 + i * 0.025,
}))

const nodes = Array.from({ length: 5 }, (_, i) => ({
  left: `${(i * 73 + 11) % 92}%`,
  top: `${(i * 59 + 23) % 88}%`,
  size: i % 2 === 0 ? 5 : 3.5,
  duration: `${6 + (i % 4)}s`,
  ringDuration: `${(6 + (i % 4)) * 0.8}s`,
  delay: `${-i * 0.8}s`,
}))

const dots = Array.from({ length: 12 }, (_, i) => ({
  left: `${(i * 41 + 7) % 97}%`,
  top: `${(i * 67 + 13) % 93}%`,
  size: i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5,
  duration: `${5 + (i % 4)}s`,
  delay: `${-((i * 0.5) % 4)}s`,
  opacity: 0.08 + (i % 5) * 0.025,
  opacityLow: (0.08 + (i % 5) * 0.025) * 0.45,
}))

export default function AnimatedBackground() {
  return (
    <div className="site-background fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/40 to-white" />

      <div className="absolute inset-0 opacity-35 dot-grid" />

      {blobs.map((blob, i) => (
        <div
          key={`blob-${i}`}
          className={`bg-blob absolute rounded-full ${blob.className}`}
          style={
            {
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle, ${blob.color} 0%, transparent 68%)`,
              "--duration": blob.duration,
              "--delay": blob.delay,
              "--x1": blob.x1,
              "--y1": blob.y1,
              "--x2": blob.x2,
              "--y2": blob.y2,
              "--s1": blob.s1,
              "--s2": blob.s2,
              "--rotate": blob.rotate,
              "--rotate-back": blob.rotateBack,
              "--base-x": blob.center ? "-50%" : "0px",
              "--base-y": blob.center ? "-50%" : "0px",
            } as AnimatedStyle
          }
        />
      ))}

      {lines.map((line, i) => (
        <div
          key={`line-${i}`}
          className="bg-scan-line absolute left-0 right-0 h-px"
          style={
            {
              top: line.top,
              background: `linear-gradient(90deg, transparent, rgba(2,95,199,${line.opacity}), rgba(13,151,235,${line.opacity * 0.8}), transparent)`,
              "--duration": line.duration,
              "--delay": line.delay,
            } as AnimatedStyle
          }
        />
      ))}

      {nodes.map((node, i) => (
        <div
          key={`node-${i}`}
          className="bg-node absolute rounded-full bg-[#025fc7]"
          style={
            {
              left: node.left,
              top: node.top,
              width: node.size,
              height: node.size,
              "--duration": node.duration,
              "--ring-duration": node.ringDuration,
              "--delay": node.delay,
            } as AnimatedStyle
          }
        />
      ))}

      <div className="bg-shimmer absolute inset-0" />

      {dots.map((dot, i) => (
        <div
          key={`dot-${i}`}
          className="bg-floating-dot absolute rounded-full bg-[#025fc7]"
          style={
            {
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              "--duration": dot.duration,
              "--delay": dot.delay,
              "--dot-opacity": dot.opacity,
              "--dot-opacity-low": dot.opacityLow,
            } as AnimatedStyle
          }
        />
      ))}
    </div>
  )
}
