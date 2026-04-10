import { Metadata } from 'next';
import AnimatedBackground from "@/components/animated-background";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import Mission from "@/components/mission";
import Statistics from "@/components/statistics";
import QuotationProcess from "@/components/quotation-process";
import Contracts from '@/components/contracts';
import PerformanceMetrics from "@/components/performance-metrics";
import Testimonials from "@/components/testimonials";
import WorkshopTestimonials from "@/components/workshop-testimonials";
import AppPromo from "@/components/app-promo";
import HalfPay from "@/components/half-pay";
import Footer from "@/components/footer";
import Location from "@/components/location";

export const metadata: Metadata = {
  title: 'Half Benefícios | Software de Gestão de Manutenção de Frota Pública e Privada',
  description: 'Half Benefícios — plataforma líder em software de gestão de manutenção de frota pública e privada no Brasil. Utilizada por prefeituras, câmaras e órgãos públicos em licitações. +761 oficinas credenciadas, +3.007 veículos, 12 estados + DF. Tecnologia que faz a diferença.',
  keywords: [
    'Half Benefícios',
    'Half',
    'software gestão de frota',
    'gestão de manutenção de frota',
    'gestão de manutenção veicular',
    'sistema gestão de frota pública',
    'licitação gestão de frota',
    'software licitação frota pública',
    'gestão frotas municipais',
    'manutenção preventiva frota',
    'manutenção corretiva frota',
    'controle manutenção veicular',
    'plataforma gestão de frota',
    'software prefeitura frota',
    'Half Pay',
    'credenciamento oficinas mecânicas',
    'orçamentos eletrônicos frota',
    'Half Benefícios Goiânia',
    'frota pública Goiás',
    'gestão de frota Brasil',
  ].join(', '),
  authors: [{ name: 'Half Benefícios LTDA', url: 'https://www.halfbeneficios.com' }],
  creator: 'Half Benefícios LTDA',
  publisher: 'Half Benefícios LTDA',
  alternates: {
    canonical: 'https://www.halfbeneficios.com',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Half Benefícios',
    title: 'Half Benefícios | Software de Gestão de Manutenção de Frota',
    description: 'Plataforma líder em gestão de manutenção de frota pública e privada. Utilizada por prefeituras e órgãos públicos em todo o Brasil. +761 oficinas, +3.007 veículos geridos.',
    url: 'https://www.halfbeneficios.com',
    images: [
      {
        url: 'https://www.halfbeneficios.com/logo-halfbeneficios.png',
        width: 1200,
        height: 630,
        alt: 'Half Benefícios — Software de Gestão de Manutenção de Frota',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Half Benefícios | Gestão de Manutenção de Frota',
    description: 'Software líder em gestão de manutenção de frota pública e privada no Brasil.',
    images: ['https://www.halfbeneficios.com/logo-halfbeneficios.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <Header />

      <main className="flex-grow">
        {/* H1 oculto para SEO — reforça a keyword principal sem poluir o design */}
        <h1 className="sr-only">
          Half Benefícios — Software de Gestão de Manutenção de Frota Pública e Privada no Brasil
        </h1>

        <Hero />
        <Benefits />
        <Mission />
        <Statistics />
        <QuotationProcess />
        <Contracts />
        <PerformanceMetrics />
        <Testimonials />
        <WorkshopTestimonials />
        <AppPromo />
        <HalfPay />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
