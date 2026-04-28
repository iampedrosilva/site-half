import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://www.halfbeneficios.com'
const SITE_NAME = 'Half Benefícios'

// ─── JSON-LD Schemas ───────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Half Benefícios",
  "alternateName": ["Half", "Half Beneficios", "Half Benefícios LTDA"],
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/logo-halfbeneficios.png`,
    "width": 300,
    "height": 100
  },
  "description": "Software de gestão de manutenção de frota pública e privada. Líder em licitações para prefeituras e órgãos públicos no Brasil. Plataforma Half Benefícios: controle total de veículos, manutenção preventiva e corretiva, orçamentos eletrônicos e relatórios em tempo real.",
  "foundingDate": "2022",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua S-1, nº 260",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74230-220",
      "addressCountry": "BR"
    }
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+55-62-3142-2026",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+55-62-99972-5806",
      "contactType": "sales",
      "contactOption": "HearingImpairedSupported",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    }
  ],
  "email": "atendimento@halfbeneficios.com",
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "sameAs": [
    "https://frotas.halfbeneficios.com",
    "https://financeiro.halfbeneficios.com",
    "https://play.google.com/store/apps/details?id=com.halfbeneficios.frotas"
  ],
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "value": 50
  },
  "knowsAbout": [
    "Gestão de manutenção de frota",
    "Software de gestão de frota pública",
    "Licitação de gestão de frotas",
    "Manutenção preventiva veicular",
    "Controle de orçamentos mecânicos",
    "Gestão de benefícios corporativos",
    "Half Pay - plataforma financeira para oficinas"
  ]
}

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE_URL}/#software`,
  "name": "Half Benefícios — Software de Gestão de Manutenção de Frota",
  "alternateName": "Half Frotas",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Fleet Management Software",
  "operatingSystem": ["Web", "Android", "iOS"],
  "url": SITE_URL,
  "description": "Plataforma SaaS de gestão de manutenção de frota pública e privada. Aprovação de orçamentos em tempo real, rastreabilidade total, relatórios gerenciais, credenciamento de oficinas mecânicas e módulo financeiro Half Pay. Amplamente utilizado em licitações de prefeituras e órgãos públicos em todo o Brasil.",
  "screenshot": `${SITE_URL}/imagem-app-frotas1.webp`,
  "featureList": [
    "Gestão de manutenção preventiva e corretiva",
    "Aprovação de orçamentos em tempo real",
    "Rastreabilidade total de serviços",
    "Controle de frota pública e privada",
    "Rede de oficinas credenciadas",
    "Relatórios e auditoria gerencial",
    "Half Pay — plataforma financeira para oficinas",
    "Aplicativo mobile para gestores e motoristas",
    "Integração com processos licitatórios",
    "Painel de faturamentos e repasses"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": `${SITE_URL}/#organization`
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "87",
    "bestRating": "5"
  },
  "provider": {
    "@id": `${SITE_URL}/#organization`
  }
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  "name": "Half Benefícios",
  "image": `${SITE_URL}/logo-halfbeneficios.png`,
  "url": SITE_URL,
  "telephone": "+55-62-3142-2026",
  "email": "atendimento@halfbeneficios.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua S-1, nº 260, Setor Bueno",
    "addressLocality": "Goiânia",
    "addressRegion": "GO",
    "postalCode": "74230-220",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -16.7012,
    "longitude": -49.2648
  },
  "openingHours": "Mo-Fr 08:00-18:00",
  "priceRange": "$$",
  "description": "Empresa de tecnologia especializada em software de gestão de manutenção de frota pública e privada. Goiânia - GO.",
  "areaServed": [
    "Goiás", "Mato Grosso", "Mato Grosso do Sul", "Pará", "Amazonas",
    "Maranhão", "Piauí", "Ceará", "Alagoas", "Distrito Federal",
    "Minas Gerais", "São Paulo", "Brasil"
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é a Half Benefícios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Half Benefícios é uma empresa de tecnologia especializada em software de gestão de manutenção de frota pública e privada. Atuamos com prefeituras, órgãos públicos e empresas privadas em todo o Brasil, com presença em 12 estados e no Distrito Federal."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o software de gestão de frota da Half?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Plataforma Half Frotas é um sistema SaaS de gestão de manutenção veicular que oferece controle total de manutenção preventiva e corretiva, aprovação de orçamentos em tempo real, rede de oficinas credenciadas, rastreabilidade total e relatórios gerenciais para frotas públicas e privadas."
      }
    },
    {
      "@type": "Question",
      "name": "A Half Benefícios atende licitações públicas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Aproximadamente 90% da nossa operação é voltada para o setor público — prefeituras, câmaras municipais, autarquias e outros órgãos. Temos larga experiência em processos licitatórios para gestão de manutenção de frota pública em todo o Brasil."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o Half Pay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Half Pay é a plataforma financeira da Half Benefícios exclusiva para oficinas mecânicas credenciadas. Por meio dela, a oficina acompanha seus faturamentos, previsões de repasse, pagamentos realizados, comprovantes e pode solicitar antecipação de recebíveis."
      }
    },
    {
      "@type": "Question",
      "name": "Em quais estados a Half Benefícios atua?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Half Benefícios possui presença em 12 estados brasileiros mais o Distrito Federal, com mais de 761 oficinas credenciadas, 3.007 veículos gerenciados e mais de R$ 34,2 milhões transacionados na plataforma."
      }
    },
    {
      "@type": "Question",
      "name": "Como me tornar uma oficina credenciada da Half Benefícios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para se tornar uma oficina credenciada Half Benefícios, acesse frotas.halfbeneficios.com/register e faça seu cadastro. Nossa equipe comercial entrará em contato para concluir o processo de credenciamento sem custos."
      }
    }
  ]
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Half Benefícios",
  "description": "Software de gestão de manutenção de frota pública e privada",
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* ── Charset & Viewport ───────────────────────────── */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* ── Identidade e indexação ───────────────────────── */}
        <title>Half Benefícios | Software de Gestão de Manutenção de Frota Pública e Privada</title>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Half Benefícios LTDA" />
        <link rel="canonical" href={SITE_URL} />

        {/* ── Description rica em keywords ─────────────────── */}
        <meta
          name="description"
          content="Half Benefícios — software líder em gestão de manutenção de frota pública e privada no Brasil. Plataforma SaaS para prefeituras, órgãos públicos e empresas: controle de manutenção preventiva e corretiva, orçamentos eletrônicos, rede de 761+ oficinas credenciadas, 3.007+ veículos geridos e módulo financeiro Half Pay. Presente em 12 estados + DF."
        />

        {/* ── Keywords ─────────────────────────────────────── */}
        <meta
          name="keywords"
          content="Half Benefícios, Half, Half frotas, software gestão de frota, gestão de manutenção de frota, gestão de manutenção veicular, sistema de gestão de frota pública, licitação gestão de frota, software licitação frota pública, gestão de frotas municipais, manutenção preventiva frota, manutenção corretiva frota, controle de manutenção veicular, plataforma gestão de frota, software prefeitura frota, Half Pay, plataforma financeira oficinas, credenciamento oficinas mecânicas, orçamentos eletrônicos frota, gestão de benefícios corporativos, frota pública Goiânia, gestão de frota Goiás, gestão de frota Brasil, sistema SaaS frota, aplicativo gestão de frota, Half Benefícios Goiânia, CNPJ 43091320000107"
        />

        {/* ── Open Graph ───────────────────────────────────── */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:title"
          content="Half Benefícios | Software de Gestão de Manutenção de Frota Pública e Privada"
        />
        <meta
          property="og:description"
          content="Plataforma líder em gestão de manutenção de frota pública e privada. +761 oficinas credenciadas, +3.007 veículos geridos, presente em 12 estados + DF. Tecnologia que faz a diferença para prefeituras e empresas em todo o Brasil."
        />
        <meta property="og:image" content={`${SITE_URL}/logo-halfbeneficios.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Half Benefícios — Gestão de Manutenção de Frota" />

        {/* ── Twitter / X Card ─────────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@halfbeneficios" />
        <meta
          name="twitter:title"
          content="Half Benefícios | Software de Gestão de Manutenção de Frota"
        />
        <meta
          name="twitter:description"
          content="Plataforma líder em gestão de manutenção de frota pública e privada. +761 oficinas, +3.007 veículos, 12 estados + DF."
        />
        <meta name="twitter:image" content={`${SITE_URL}/logo-halfbeneficios.png`} />

        {/* ── Geo tags ─────────────────────────────────────── */}
        <meta name="geo.region" content="BR-GO" />
        <meta name="geo.placename" content="Goiânia, Goiás, Brasil" />
        <meta name="geo.position" content="-16.7012;-49.2648" />
        <meta name="ICBM" content="-16.7012, -49.2648" />

        {/* ── Negócio / setor ──────────────────────────────── */}
        <meta name="category" content="Software, Tecnologia, Gestão de Frota, Saas, Licitação" />
        <meta name="classification" content="Business" />
        <meta name="target" content="Prefeituras, Órgãos Públicos, Empresas Privadas, Oficinas Mecânicas" />
        <meta name="coverage" content="Brasil" />
        <meta name="distribution" content="Global" />
        <meta name="revisit-after" content="7 days" />

        {/* ── GEO / AI Search (Generative Engine Optimization) */}
        <meta name="entity:name" content="Half Benefícios" />
        <meta name="entity:type" content="SoftwareApplication, Organization" />
        <meta name="entity:description" content="Software brasileiro de gestão de manutenção de frota pública e privada, líder em licitações municipais e estaduais no Brasil." />
        <meta name="article:section" content="Tecnologia, Gestão de Frota, Setor Público" />

        {/* ── PWA & Favicon ────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo-halfbeneficios.png" />
        <meta name="theme-color" content="#025fc7" />
        <meta name="msapplication-TileColor" content="#025fc7" />

        {/* ── JSON-LD Structured Data ───────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

      </head>
      <body className={`${inter.className} pt-20`}>
        {children}
      </body>
    </html>
  )
}
