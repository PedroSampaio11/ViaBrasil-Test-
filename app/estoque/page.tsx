"use client"

import { useState } from "react"
import { VehicleCard } from "@/components/vehicle-card"
import { VehicleInterestForm } from "@/components/vehicle-interest-form"
import { Search, Filter, X } from "lucide-react"

export default function EstoquePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Dados de exemplo - depois você pode buscar de uma API
  const vehicles = [
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      brand: "Fiat",
      model: "Pulse 1.4t",
      year: "2024/2025",
      price: "R$ 109.999,99",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode implementar a lógica de busca
    console.log("Buscando:", searchQuery)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <section className="py-8 sm:py-12 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          {/* Título */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos Veículos
            </h1>
          </div>

          {/* Barra de Busca e Filtros */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex flex-row gap-2 sm:gap-4 items-center">
              {/* Input de Busca */}
              <div className="flex-1 min-w-0 relative">
                <div className="relative">
                  <Search className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Digite e aperte para buscar (ex.: Jetta GLI 2020)"
                    className="w-full pl-8 sm:pl-12 pr-2 sm:pr-4 py-2 sm:py-4 bg-white/7 border border-white/20 rounded-[22px] text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors text-xs sm:text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Botão Buscar */}
              <button
                type="submit"
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-6 md:px-8 py-2 sm:py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-[22px] font-bold text-xs sm:text-sm md:text-base transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 whitespace-nowrap flex-shrink-0"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Buscar</span>
              </button>

              {/* Botão Filtro */}
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/7 border border-white/20 flex items-center justify-center hover:border-yellow-500 hover:bg-white/10 transition-all flex-shrink-0"
                aria-label="Filtros"
              >
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>

              {/* Botão Limpar */}
              {searchQuery && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/7 border border-white/20 flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all flex-shrink-0"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              )}
            </form>
          </div>

          {/* Grid de Veículos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>

          {/* Formulário de Interesse */}
          <div className="mb-12">
            <VehicleInterestForm />
          </div>

          {/* Botão Carregar Mais */}
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:shadow-lg border border-white/20 text-sm sm:text-base">
              CARREGAR MAIS VEÍCULOS
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

