"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { VehicleCard } from "@/components/vehicle-card"
import { VehicleInterestForm } from "@/components/vehicle-interest-form"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

// Dados mockados - depois você pode buscar de uma API baseado no ID
const vehicleData = {
  id: "1",
  brand: "Fiat",
  model: "Pulse",
  year: "2023/2024",
  km: "22.000km",
  price: "R$ 109.999,99",
  version: "1.3 FLEX DRIVE MANUAL",
  fuel: "Gasolina e Álcool",
  plate: "Final 4",
  transmission: "Manual",
  doors: "4",
  vehicleModel: "PULSE",
  images: [
    "/images/via-brasil-carro.png",
    "/images/via-brasil-carro.png",
    "/images/via-brasil-carro.png",
    "/images/via-brasil-carro.png",
  ],
  description: "O Fiat Pulse é um SUV compacto que combina design moderno, tecnologia avançada e economia. Ideal para quem busca versatilidade e conforto no dia a dia.",
  optionals: [
    "Air bag do motorista",
    "Air bag duplo",
    "Alarme",
    "Ar condicionado digital",
    "Ar quente",
    "Banco bi-partido",
    "Comando de áudio e telefone no volante",
    "Computador de bordo",
    "Controle automático de velocidade",
    "Controle de estabilidade",
    "Controle de tração",
    "Desembaçador traseiro",
    "Direção Elétrica",
    "Distribuição eletrônica de frenagem",
    "Encosto de cabeça traseiro",
    "Freio ABS",
    "GPS",
    "Kit Multimídia",
    "Limpador traseiro",
    "Pára-choques na cor do veículo",
    "Retrovisores elétricos",
    "Rodas de liga leve",
    "Travas elétricas",
    "Vidros elétricos",
  ],
  observations: "Veículo em excelente estado de conservação, revisado e com garantia de procedência.",
}

const otherVehicles = [
  {
    brand: "Fiat",
    model: "Pulse 1.4t",
    year: "2024/2025",
    price: "R$ 109.999,99",
    imageUrl: "/images/via-brasil-carro.png",
    badge: "0km",
    isNew: true,
    id: "2",
  },
  {
    brand: "Fiat",
    model: "Pulse 1.4t",
    year: "2024/2025",
    price: "R$ 109.999,99",
    imageUrl: "/images/via-brasil-carro.png",
    badge: "0km",
    isNew: true,
    id: "3",
  },
  {
    brand: "Fiat",
    model: "Pulse 1.4t",
    year: "2024/2025",
    price: "R$ 109.999,99",
    imageUrl: "/images/via-brasil-carro.png",
    badge: "0km",
    isNew: true,
    id: "4",
  },
]

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"descricao" | "opcionais" | "observacoes">("opcionais")

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicleData.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicleData.images.length) % vehicleData.images.length)
  }

  return (
    <div className="min-h-screen bg-[#0A1628]">
      <section className="py-8 sm:py-12 bg-[#0A1628]">
        <div className="container mx-auto px-4">
          {/* Informações Principais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Coluna Esquerda - Informações */}
            <div>
              {/* Marca e Modelo */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                  <span className="text-yellow-500">{vehicleData.brand}</span>{" "}
                  <span className="text-white">{vehicleData.model}</span>
                </h1>
              </div>

              {/* Ano e KM */}
              <div className="flex flex-wrap gap-4 mb-6 text-white/80 text-sm sm:text-base">
                <span>
                  <strong className="text-white">Ano:</strong> {vehicleData.year}
                </span>
                <span>
                  <strong className="text-white">Km:</strong> {vehicleData.km}
                </span>
              </div>

              {/* Preço */}
              <div className="mb-8">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">
                  {vehicleData.price}
                </p>
              </div>

              {/* Especificações Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Versão</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.version}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Combustível</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.fuel}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Placa</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.plate}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Câmbio</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.transmission}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Porta</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.doors}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm mb-1">Modelo</p>
                  <p className="text-white text-sm sm:text-base font-medium">{vehicleData.vehicleModel}</p>
                </div>
              </div>

              {/* Botão CTA */}
              <Link
                href="/contato"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black rounded-[22px] font-bold text-lg sm:text-xl transition-all shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40"
              >
                SOLICITAR CONTATO
              </Link>
            </div>

            {/* Coluna Direita - Galeria */}
            <div>
              {/* Imagem Principal */}
              <div className="relative h-[400px] sm:h-[500px] rounded-lg overflow-hidden mb-4 bg-gradient-to-b from-gray-800 to-gray-900">
                <Image
                  src={vehicleData.images[currentImageIndex]}
                  alt={`${vehicleData.brand} ${vehicleData.model}`}
                  fill
                  className="object-contain p-4"
                  priority
                />
                {/* Navegação */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {vehicleData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-yellow-500"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs de Descrição/Opcionais/Observações */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Tabs Laterais */}
              <div className="md:col-span-1">
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab("descricao")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeTab === "descricao"
                        ? "bg-yellow-500/20 text-yellow-500 border-l-4 border-green-500"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Descrição
                  </button>
                  <button
                    onClick={() => setActiveTab("opcionais")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeTab === "opcionais"
                        ? "bg-yellow-500/20 text-yellow-500 border-l-4 border-green-500"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Opcionais
                  </button>
                  <button
                    onClick={() => setActiveTab("observacoes")}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeTab === "observacoes"
                        ? "bg-yellow-500/20 text-yellow-500 border-l-4 border-green-500"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Observações Adicionais
                  </button>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="md:col-span-3">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 min-h-[300px]">
                  {activeTab === "descricao" && (
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      {vehicleData.description}
                    </p>
                  )}
                  {activeTab === "opcionais" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vehicleData.optionals.map((optional, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                          <span className="text-yellow-500">•</span>
                          <span>{optional}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeTab === "observacoes" && (
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                      {vehicleData.observations}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Veja outros modelos */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Veja outros modelos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {otherVehicles.map((vehicle) => (
                <Link key={vehicle.id} href={`/estoque/${vehicle.id}`}>
                  <div className="group relative">
                    <VehicleCard {...vehicle} />
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/estoque"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all text-sm sm:text-base"
              >
                VEJA NOSSO ESTOQUE
              </Link>
            </div>
          </div>

          {/* Formulário de Interesse */}
          <div className="mb-12">
            <VehicleInterestForm />
          </div>
        </div>
      </section>
    </div>
  )
}

