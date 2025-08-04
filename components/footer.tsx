import { Info } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#025fc7] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12">
          {/* Seção Sobre */}
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Info className="w-8 h-8 text-white" />
              <h3 className="text-2xl font-bold">Sobre Nós</h3>
            </div>
            <p className="text-gray-200 text-lg text-justify">
              Em 2 anos de atuação no mercado de benefícios, construímos uma trajetória 
              marcada pela excelência no gerenciamento de manutenção de frotas públicas. Atuamos 
              com <strong className="text-white">legalidade</strong>, <strong className="text-white">transparência</strong> e 
              <strong className="text-white"> objetividade</strong>, provando diariamente que não somos 
              mais uma empresa no setor, mas sim a escolha certa para quem busca:
            </p>
            <ul className="text-gray-200 space-y-3 text-lg pl-0 list-none">
              <li className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Controle eficiente de recursos
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Gestão estratégica de frotas
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Relacionamento transparente
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-white">✓</span> Tecnologia integrada
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-gray-200 mb-4">
            © 2024 Half Benefícios LTDA - CNPJ: 43.091.320/0001-07
          </p>
          <p className="text-gray-200 italic">
            "Mais que gestão em benefícios, construímos relações de confiança"
          </p>
        </div>
      </div>
    </footer>
  )
}