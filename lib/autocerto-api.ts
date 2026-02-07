import {
  OAuthTokenResponse,
  VeiculoRetornoModel,
  FotoRetornoModel,
  LeadApi,
  MarcaModel,
  ModeloModel,
  VersaoModel,
  EstoqueFilters,
} from "@/lib/types/autocerto"

const API_BASE_URL = process.env.AUTOCERTO_API_BASE_URL || "https://integracao.autocerto.com"
const API_USERNAME = process.env.AUTOCERTO_API_USERNAME || ""
const API_PASSWORD = process.env.AUTOCERTO_API_PASSWORD || ""

// Cache de token em memória
let cachedToken: {
  token: string
  expiresAt: number
} | null = null

/**
 * Obtém token de acesso OAuth2
 */
async function getAccessToken(): Promise<string> {
  // Verifica se o token em cache ainda é válido (com margem de 5 minutos)
  if (cachedToken && cachedToken.expiresAt > Date.now() + 5 * 60 * 1000) {
    return cachedToken.token
  }

  try {
    const response = await fetch(`${API_BASE_URL}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "password",
        username: API_USERNAME,
        password: API_PASSWORD,
      }),
    })

    if (!response.ok) {
      throw new Error(`Erro na autenticação: ${response.statusText}`)
    }

    const data: OAuthTokenResponse = await response.json()

    // Armazena o token em cache
    cachedToken = {
      token: data.access_token,
      expiresAt: Date.now() + (data.expires_in - 300) * 1000, // Subtrai 5 minutos de margem
    }

    return data.access_token
  } catch (error) {
    console.error("Erro ao obter token de acesso:", error)
    throw error
  }
}

/**
 * Faz uma requisição autenticada para a API
 */
async function authenticatedFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getAccessToken()

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  })

  // Se o token expirou, tenta novamente com um novo token
  if (response.status === 401) {
    cachedToken = null
    const newToken = await getAccessToken()
    const retryResponse = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${newToken}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    })
    return retryResponse
  }

  return response
}

/**
 * Obtém lista de veículos do estoque
 */
export async function getEstoque(filters?: EstoqueFilters): Promise<VeiculoRetornoModel[]> {
  try {
    const params = new URLSearchParams()

    if (filters) {
      if (filters.codigoUnidade) params.append("codigoUnidade", filters.codigoUnidade.toString())
      if (filters.IdMarca) params.append("IdMarca", filters.IdMarca.toString())
      if (filters.IdModelo) params.append("IdModelo", filters.IdModelo.toString())
      if (filters.anoDe) params.append("anoDe", filters.anoDe.toString())
      if (filters.anoAte) params.append("anoAte", filters.anoAte.toString())
      if (filters.precoDe) params.append("precoDe", filters.precoDe.toString())
      if (filters.precoAte) params.append("precoAte", filters.precoAte.toString())
      if (filters.placa) params.append("placa", filters.placa)
    }

    const queryString = params.toString()
    const endpoint = `/api/Veiculo/ObterEstoque${queryString ? `?${queryString}` : ""}`

    const response = await authenticatedFetch(endpoint)

    if (!response.ok) {
      throw new Error(`Erro ao buscar estoque: ${response.statusText}`)
    }

    const data: VeiculoRetornoModel[] = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar estoque:", error)
    throw error
  }
}

/**
 * Obtém detalhes de um veículo específico
 */
export async function getVeiculo(codigoVeiculo: number): Promise<VeiculoRetornoModel> {
  try {
    const response = await authenticatedFetch(
      `/api/Veiculo/ObterVeiculo?codigoVeiculo=${codigoVeiculo}`
    )

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("Veículo não encontrado")
      }
      throw new Error(`Erro ao buscar veículo: ${response.statusText}`)
    }

    const data: VeiculoRetornoModel = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar veículo:", error)
    throw error
  }
}

/**
 * Obtém fotos de um veículo
 */
export async function getFotos(codigoVeiculo: number): Promise<FotoRetornoModel[]> {
  try {
    const response = await authenticatedFetch(
      `/api/Veiculo/ObterFotos?codigoVeiculo=${codigoVeiculo}`
    )

    if (!response.ok) {
      throw new Error(`Erro ao buscar fotos: ${response.statusText}`)
    }

    const data: FotoRetornoModel[] = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar fotos:", error)
    throw error
  }
}

/**
 * Salva um lead
 */
export async function saveLead(leadData: LeadApi): Promise<string> {
  try {
    const response = await authenticatedFetch("/api/Lead/SalvarLead", {
      method: "POST",
      body: JSON.stringify(leadData),
    })

    if (!response.ok) {
      throw new Error(`Erro ao salvar lead: ${response.statusText}`)
    }

    const data: string = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao salvar lead:", error)
    throw error
  }
}

/**
 * Obtém lista de marcas
 */
export async function getMarcas(tipo: number = 1): Promise<MarcaModel[]> {
  try {
    const response = await authenticatedFetch(`/api/Veiculo/ObterMarcas?tipo=${tipo}`)

    if (!response.ok) {
      throw new Error(`Erro ao buscar marcas: ${response.statusText}`)
    }

    const data: MarcaModel[] = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar marcas:", error)
    throw error
  }
}

/**
 * Obtém lista de modelos por marca
 */
export async function getModelos(codigoMarca: number): Promise<ModeloModel[]> {
  try {
    const response = await authenticatedFetch(
      `/api/Veiculo/ObterModelos?codigoMarca=${codigoMarca}`
    )

    if (!response.ok) {
      throw new Error(`Erro ao buscar modelos: ${response.statusText}`)
    }

    const data: ModeloModel[] = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar modelos:", error)
    throw error
  }
}

/**
 * Obtém lista de versões por modelo e ano
 */
export async function getVersoes(codigoModelo: number, anoModelo: number): Promise<VersaoModel[]> {
  try {
    const response = await authenticatedFetch(
      `/api/Veiculo/ObterVersoes?codigoModelo=${codigoModelo}&anoModelo=${anoModelo}`
    )

    if (!response.ok) {
      throw new Error(`Erro ao buscar versões: ${response.statusText}`)
    }

    const data: VersaoModel[] = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar versões:", error)
    throw error
  }
}

/**
 * Obtém lista de mídias para leads
 */
export async function getMidias() {
  try {
    const response = await authenticatedFetch("/api/Lead/ObterMidias")

    if (!response.ok) {
      throw new Error(`Erro ao buscar mídias: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("Erro ao buscar mídias:", error)
    throw error
  }
}

