import { NextRequest, NextResponse } from "next/server"
import { getMarcas } from "@/lib/autocerto-api"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const tipo = parseInt(searchParams.get("tipo") || "1") // 1 = Carro, 2 = Moto

    const marcas = await getMarcas(tipo)

    return NextResponse.json(marcas)
  } catch (error) {
    console.error("Erro ao buscar marcas:", error)
    return NextResponse.json(
      { error: "Erro ao buscar marcas" },
      { status: 500 }
    )
  }
}

