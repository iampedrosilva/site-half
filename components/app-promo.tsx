"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaGooglePlay, FaAppStore } from "react-icons/fa"
import Link from "next/link"

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
                <Link href="https://play.google.com/store/apps/details?id=com.halfbeneficios.frotas" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#0d97eb] text-white hover:bg-[#057fdf] transition-colors rounded-full px-6">
                    <FaGooglePlay size={24} />
                    Google Play
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-[#0d97eb] text-white hover:bg-[#057fdf] transition-colors rounded-full px-6">
                    <FaAppStore size={24} />
                    App Store
                  </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <motion.div
              className="flex space-x-4"
              animate={{ x: ["0%", "-120%", "0%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
            >
              <div className="flex-shrink-0 w-[405px] h-[720px]">
                <img src="/imagem-app-frotas.webp" alt="Imagem App Frotas 1" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-shrink-0 w-[405px] h-[720px]">
                <img src="/imagem-app-frotas2.webp" alt="Imagem App Frotas 2" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-shrink-0 w-[405px] h-[720px]">
                <img src="/imagem-app-frotas3.webp" alt="Imagem App Frotas 3" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-shrink-0 w-[405px] h-[720px]">
                <img src="/imagem-app-frotas4.webp" alt="Imagem App Frotas 4" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex-shrink-0 w-[405px] h-[720px]">
                <img src="/imagem-app-frotas5.webp" alt="Imagem App Frotas 5" className="w-full h-full object-cover rounded-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
