import { NextRequest, NextResponse } from "next/server"
import { getModelos } from "@/lib/autocerto-api"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const codigoMarca = searchParams.get("codigoMarca")

    if (!codigoMarca) {
      return NextResponse.json(
        { error: "Código da marca é obrigatório" },
        { status: 400 }
      )
    }

    const modelos = await getModelos(parseInt(codigoMarca))

    return NextResponse.json(modelos)
  } catch (error) {
    console.error("Erro ao buscar modelos:", error)
    return NextResponse.json(
      { error: "Erro ao buscar modelos" },
      { status: 500 }
    )
  }
}

