"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, Users } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Location() {
  const location = {
    city: "Goiânia",
    address: "Rua S-1, nº 260, St. Bueno, Goiânia – GO, 74230-220",
    phone: "(62) 3088-6580",
    whatsapp: "(62) 99972-5806",
    email: "atendimento@halfbeneficios.com",
    hours: "Segunda a Sexta: 08h às 18h\nNão atendemos aos sábados, domingos e feriados",
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1738527039854!6m8!1m7!1s402v8jWHecGDdVxJ3CpWmw!2m2!1d-16.71450010085378!2d-49.26380501122968!3f240.2067640967849!4f-6.136073641343316!5f0.7820865974627469",
    coordinates: "-16.7145001,-49.263805"
  }

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-[#025fc7]/10 to-[#0d97eb]/5 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#025fc7] mb-6">
            Nossa Filial em Goiânia
          </h2>
          <p className="text-xl text-[#057fdf] mb-8">
            Estamos estrategicamente localizados no coração de Goiânia para melhor atendê-lo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Mapa Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-96 rounded-xl overflow-hidden shadow-lg border-4 border-[#025fc7]/20"
          >
            <iframe
              title="Mapa Goiânia"
              className="w-full h-full"
              src={location.mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </motion.div>

          {/* Informações */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#025fc7] mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Para Atendimento
              </h3>
              
              <div className="space-y-4 text-[#057fdf]">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{location.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="hover:text-[#025fc7] transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <FaWhatsapp className="w-5 h-5 mr-3 flex-shrink-0 text-[#057fdf]" />
                  <a 
                    href={`https://wa.me/5562999725806`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#025fc7] transition-colors"
                  >
                    {location.whatsapp}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-[#025fc7] mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                Para Correspondências
              </h3>
              
              <div className="space-y-4 text-[#057fdf]">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                  <p className="font-medium">Mesmo endereço físico</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="hover:text-[#025fc7] transition-colors">
                    {location.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-gradient-to-r from-[#025fc7] to-[#0d97eb] p-8 rounded-xl text-white shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                Horário de Funcionamento
              </h3>
              <pre className="font-sans text-lg whitespace-pre-wrap">{location.hours}</pre>
              <motion.a
                href={`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-block bg-white text-[#025fc7] px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
              >
                Obter Rotas no Maps
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}