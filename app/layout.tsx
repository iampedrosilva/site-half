import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* SEO Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pedro" />
        <meta name="description" content="Simplifique a gestão de benefícios com soluções inovadoras e seguras para empresas e órgãos públicos. Tecnologia que faz a diferença!" />
        <meta name="keywords" content="half beneficios, gestão de frota, manutenção de veículos, benefícios corporativos, tecnologia, segurança, soluções inovadoras, empresas, órgãos públicos, Half Benefícios, half benefícios" />
        <meta property="og:title" content="Half Benefícios | Tecnologia que faz a diferença" />
        <meta property="og:description" content="A Half Benefícios oferece soluções inovadoras em gestão de benefícios, com foco em segurança e eficácia para empresas e órgãos públicos." />
        <meta property="og:url" content="https://www.halfbeneficios.com" />

        {/* Script do Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://chat.halfbeneficios.com";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: '1TbVBtedjfejmqaoztc3QGAE',
                    baseUrl: BASE_URL
                  })
                }
              })(document,"script");
            `
          }}
        ></script>

      </head>
      <body className={`${inter.className} pt-20`}>
        {children}
      </body>
    </html>
  )
}
