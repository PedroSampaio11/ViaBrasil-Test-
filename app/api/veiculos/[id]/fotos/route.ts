import { NextRequest, NextResponse } from "next/server"
import { getFotos } from "@/lib/autocerto-api"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const codigoVeiculo = parseInt(id)

    if (isNaN(codigoVeiculo)) {
      return NextResponse.json(
        { error: "ID do veículo inválido" },
        { status: 400 }
      )
    }

    const fotos = await getFotos(codigoVeiculo)

    return NextResponse.json(fotos)
  } catch (error) {
    console.error("Erro ao buscar fotos:", error)
    return NextResponse.json(
      { error: "Erro ao buscar fotos do veículo" },
      { status: 500 }
    )
  }
}

