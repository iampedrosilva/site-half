import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#025fc7] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-200">Half Benefícios é líder em gestão de benefícios e frotas para órgãos públicos no Brasil.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-[#0d97eb] transition-colors">Início</Link></li>
              <li><Link href="#" className="hover:text-[#0d97eb] transition-colors">Serviços</Link></li>
              <li><Link href="#" className="hover:text-[#0d97eb] transition-colors">Contato</Link></li>
              <li><Link href="#" className="hover:text-[#0d97eb] transition-colors">Política de Privacidade</Link></li>
              <li><Link href="#" className="hover:text-[#0d97eb] transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-200">Email: contato@halfbeneficios.com.br</p>
            <p className="text-gray-200">Telefone: (11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-200">
          <p>&copy; 2023 Half Benefícios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

