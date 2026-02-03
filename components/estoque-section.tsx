"use client"

import Link from "next/link"
import { VehicleCard } from "./vehicle-card"
import { ChevronDown } from "lucide-react"

export function EstoqueSection() {
  // Dados de exemplo - depois você pode buscar de uma API
  const vehicles = [
    {
      id: "1",
      brand: "Fiat",
      model: "Pulse 1.4",
      year: "2024/2025",
      price: "R$ 100.999,00",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      id: "2",
      brand: "Fiat",
      model: "Pulse 1.4",
      year: "2024/2025",
      price: "R$ 100.999,00",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
    {
      id: "3",
      brand: "Fiat",
      model: "Pulse 1.4",
      year: "2024/2025",
      price: "R$ 100.999,00",
      imageUrl: "/images/via-brasil-carro.png",
      badge: "0km",
      isNew: true,
    },
  ]

  return (
    <section className="py-4 sm:py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full mb-4">
            ESTOQUE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mova Sua Paixão
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl">
            Escolha o modelo ideal para o seu estilo de vida.
            O propósito da Via Brasil é ser a melhor escolha em automóveis para
            seus clientes e fazer parte dos momentos especiais da sua vida
          </p>
        </div>

        {/* Grid de Veículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>

        {/* Botão Ver Mais */}
        <div className="flex justify-center">
          <Link
            href="/estoque"
            className="group flex items-center gap-3 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:shadow-lg border border-white/20"
          >
            Ver mais veículos
            <div className="flex flex-col gap-0.5">
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform -mt-2" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

