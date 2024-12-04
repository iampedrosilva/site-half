"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AppPromo() {
  return (
    <section id="app" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#025fc7]">Baixe o Aplicativo Frotas</h2>
            <p className="text-xl mb-8 text-[#057fdf]">Gerencie sua frota de forma eficiente, diretamente do seu smartphone.</p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#0d97eb] text-white hover:bg-[#057fdf] transition-colors rounded-full px-6">
                  <Image src="/app-store-icon.svg" alt="App Store" width={24} height={24} className="mr-2" />
                  App Store
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-[#0d97eb] text-white hover:bg-[#057fdf] transition-colors rounded-full px-6">
                  <Image src="/play-store-icon.svg" alt="Play Store" width={24} height={24} className="mr-2" />
                  Play Store
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <motion.img
              src="/placeholder.svg?height=600&width=300"
              alt="App Frotas"
              className="mx-auto rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

