import { VeiculoRetornoModel, FotoRetornoModel } from "@/lib/types/autocerto"

export interface VehicleCardData {
  id: string
  brand: string
  model: string
  year: string
  price: string
  imageUrl: string
  badge?: string
  isNew: boolean
}

export interface VehicleDetailData {
  id: string
  brand: string
  model: string
  year: string
  km: string
  price: string
  version: string
  fuel: string
  plate: string
  transmission: string
  doors: string
  vehicleModel: string
  images: string[]
  description: string
  optionals: string[]
  observations: string
}

/**
 * Formata preço para formato brasileiro
 */
export function formatPrice(preco: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(preco)
}

/**
 * Formata quilometragem
 */
export function formatKm(km: number, zeroKm: boolean): string {
  if (zeroKm) {
    return "0km"
  }
  return `${new Intl.NumberFormat("pt-BR").format(km)}km`
}

/**
 * Formata ano (fabricação/modelo)
 */
export function formatYear(anoFabricacao: number, anoModelo: number): string {
  if (anoFabricacao === anoModelo) {
    return `${anoModelo}`
  }
  return `${anoFabricacao}/${anoModelo}`
}

/**
 * Obtém a primeira foto do veículo ou imagem padrão
 */
export function getVehicleImage(fotos: FotoRetornoModel[]): string {
  if (fotos && fotos.length > 0) {
    // Ordena por posição e pega a primeira
    const sortedFotos = [...fotos].sort((a, b) => a.Posicao - b.Posicao)
    return sortedFotos[0].URL
  }
  return "/images/via-brasil-carro.png"
}

/**
 * Obtém todas as fotos do veículo ordenadas por posição
 */
export function getVehicleImages(fotos: FotoRetornoModel[]): string[] {
  if (fotos && fotos.length > 0) {
    const sortedFotos = [...fotos].sort((a, b) => a.Posicao - b.Posicao)
    return sortedFotos.map((foto) => foto.URL)
  }
  return ["/images/via-brasil-carro.png"]
}

/**
 * Mapeia VeiculoRetornoModel para VehicleCardData
 */
export function mapVeiculoToCard(veiculo: VeiculoRetornoModel): VehicleCardData {
  return {
    id: veiculo.Codigo.toString(),
    brand: veiculo.Marca,
    model: veiculo.Modelo,
    year: formatYear(veiculo.AnoFabricacao, veiculo.AnoModelo),
    price: formatPrice(veiculo.Preco || veiculo.PrecoClassificados || 0),
    imageUrl: getVehicleImage(veiculo.Fotos || []),
    badge: veiculo.ZeroKm ? "0km" : undefined,
    isNew: veiculo.ZeroKm || false,
  }
}

/**
 * Mapeia VeiculoRetornoModel para VehicleDetailData
 */
export function mapVeiculoToDetail(veiculo: VeiculoRetornoModel): VehicleDetailData {
  return {
    id: veiculo.Codigo.toString(),
    brand: veiculo.Marca,
    model: veiculo.Modelo,
    year: formatYear(veiculo.AnoFabricacao, veiculo.AnoModelo),
    km: formatKm(veiculo.Km || 0, veiculo.ZeroKm || false),
    price: formatPrice(veiculo.Preco || veiculo.PrecoClassificados || 0),
    version: veiculo.Versao || "",
    fuel: veiculo.Combustivel || "",
    plate: veiculo.Placa || "",
    transmission: veiculo.Cambio || "",
    doors: veiculo.Portas?.toString() || "",
    vehicleModel: veiculo.Modelo || "",
    images: getVehicleImages(veiculo.Fotos || []),
    description: veiculo.Observacao || "Veículo em excelente estado de conservação.",
    optionals: (veiculo.Opcionais || []).map((opcional) => opcional.Descricao),
    observations: veiculo.Observacao || "Veículo revisado e com garantia de procedência.",
  }
}

