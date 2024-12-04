import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import Mission from "@/components/mission"
import Statistics from "@/components/statistics"
import QuotationProcess from "@/components/quotation-process"
import Contracts from "@/components/contracts"
import PerformanceMetrics from "@/components/performance-metrics"
import Testimonials from "@/components/testimonials"
import WorkshopTestimonials from "@/components/workshop-testimonials"
import Team from "@/components/team"
import AppPromo from "@/components/app-promo"
import Footer from "@/components/footer"

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
        <Team />
        <AppPromo />
      </main>
      <Footer />
    </div>
  )
}

