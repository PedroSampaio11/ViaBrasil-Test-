import { NextRequest, NextResponse } from "next/server"
import { getEstoque } from "@/lib/autocerto-api"
import { EstoqueFilters } from "@/lib/types/autocerto"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const filters: EstoqueFilters = {}

    if (searchParams.has("codigoUnidade")) {
      filters.codigoUnidade = parseInt(searchParams.get("codigoUnidade") || "0")
    }
    if (searchParams.has("IdMarca")) {
      filters.IdMarca = parseInt(searchParams.get("IdMarca") || "0")
    }
    if (searchParams.has("IdModelo")) {
      filters.IdModelo = parseInt(searchParams.get("IdModelo") || "0")
    }
    if (searchParams.has("anoDe")) {
      filters.anoDe = parseInt(searchParams.get("anoDe") || "0")
    }
    if (searchParams.has("anoAte")) {
      filters.anoAte = parseInt(searchParams.get("anoAte") || "0")
    }
    if (searchParams.has("precoDe")) {
      filters.precoDe = parseInt(searchParams.get("precoDe") || "0")
    }
    if (searchParams.has("precoAte")) {
      filters.precoAte = parseInt(searchParams.get("precoAte") || "0")
    }
    if (searchParams.has("placa")) {
      filters.placa = searchParams.get("placa") || undefined
    }

    const veiculos = await getEstoque(filters)

    return NextResponse.json(veiculos)
  } catch (error) {
    console.error("Erro ao buscar estoque:", error)
    return NextResponse.json(
      { error: "Erro ao buscar estoque de veículos" },
      { status: 500 }
    )
  }
}

