"use client"

import Link from "next/link"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-[#0A1628] border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Menu Esquerdo */}
          <nav className="flex items-center gap-8">
            <button className="text-white/90 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <Link
              href="/estoque"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Estoque
            </Link>
            <Link
              href="/venda"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Venda seu Veículo
            </Link>
          </nav>

          {/* Logo Centro */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center justify-center">
              <div className="w-48 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                <span className="text-white font-bold text-xl">VIA BRASIL</span>
              </div>
            </Link>
          </div>

          {/* Menu Direito */}
          <div className="flex items-center gap-6">
            <Link
              href="/sobre"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              Contato
            </Link>
            <button
              className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm font-semibold transition-colors shadow-lg shadow-green-500/20"
            >
              FALE COM CONSULTOR
            </button>

          </div>
        </div>
      </div>
    </header>
  )
}

