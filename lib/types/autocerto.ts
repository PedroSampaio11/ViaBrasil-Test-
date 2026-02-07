// Tipos baseados na documentação da API AutoCerto

export interface ClienteModel {
  Codigo: number
  NomeFantasia: string
  CNPJ: string
  Email: string
}

export interface MarcaModel {
  Codigo: number
  Descricao: string
}

export interface ModeloModel {
  Codigo: number
  Descricao: string
}

export interface VersaoModel {
  Codigo: number
  Descricao: string
  CodigoModelo: number
  Modelo: string
  CodigoMarca: number
  Marca: string
}

export interface CombustivelModel {
  Codigo: number
  Descricao: string
}

export interface CorModel {
  Codigo: number
  Descricao: string
}

export interface CambioModel {
  Codigo: number
  Descricao: string
}

export interface OpcionalModel {
  Codigo: number
  Descricao: string
}

export interface OpcionalRetornoModel {
  Codigo: number
  Descricao: string
}

export interface FotoRetornoModel {
  Codigo: number
  URL: string
  Posicao: number
}

export interface VeiculoRetornoModel {
  Codigo: number
  DataCadastro: string
  DataModificacao: string
  TipoVeiculo: string
  AnoFabricacao: number
  AnoModelo: number
  Cambio: string
  Combustivel: string
  Cor: string
  Km: number
  CodigoMarca: number
  Marca: string
  CodigoModelo: number
  Destaque: boolean
  Modelo: string
  Versao: string
  Placa: string
  Portas: number
  Preco: number
  PrecoClassificados: number
  Renavam: string
  Chassi: string
  ZeroKm: boolean
  UrlVideo: string
  Observacao: string
  Opcionais: OpcionalRetornoModel[]
  Fotos: FotoRetornoModel[]
  Categoria: string
}

export interface VeiculoAPI {
  Codigo?: number
  CodigoCambio: number
  CodigoCombustivel: number
  CodigoCor: number
  CodigoVersao: number
  Placa: string
  AnoFabricacao: number
  AnoModelo: number
  ZeroKm: boolean
  Km: number
  Portas: number
  Preco: number
  PrecoClassificados?: number
  Opcionais: number[]
  Observacao?: string
  Chassi?: string
  Renavam?: string
  UrlVideo?: string
  CodigoUnidade?: number
  Cilindrada?: number
}

export interface LeadApi {
  CodigoMidia?: number
  Interesse: number // 1 - 0KM, 2 - Seminovos, 8 - Compras, 9 - Compras, 10 - Pós-Venda
  CodigoVeiculo?: number
  Nome: string
  Email: string
  Telefone: string
  Telefone2?: string
  Mensagem?: string
  DescricaoVeiculo?: string
  Placa?: string
  Cpf?: string
  Cep?: string
  CodigoUnidade?: number
}

export interface MidiaModel {
  Codigo: number
  Descricao: string
}

export interface OAuthTokenResponse {
  access_token: string
  token_type: string
  expires_in: number
}

export interface EstoqueFilters {
  codigoUnidade?: number
  IdMarca?: number
  IdModelo?: number
  anoDe?: number
  anoAte?: number
  precoDe?: number
  precoAte?: number
  placa?: string
}

