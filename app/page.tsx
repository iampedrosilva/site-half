import { Metadata } from 'next';
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
import Footer from "@/components/footer";
import Location from "@/components/location";

export const metadata: Metadata = {
  title: 'Half Benefícios | Tecnologia que faz a diferença',
  description: 'Simplifique a gestão de benefícios com soluções inovadoras e seguras para empresas e órgãos públicos. Tecnologia que faz a diferença!',
  keywords: 'gestão de frota, manutenção de veículos, benefícios corporativos, tecnologia, segurança, soluções inovadoras, empresas, órgãos públicos, Half Benefícios',
  openGraph: {
    title: 'Half Benefícios | Tecnologia que faz a diferença',
    description: 'A Half Benefícios oferece soluções inovadoras em gestão de benefícios, com foco em segurança e eficácia para empresas e órgãos públicos.',
    url: 'https://www.halfbeneficios.com',
  },
  
};

export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
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
        <Location/>
      </main>
      <Footer />
    </div>
  );
  
}
