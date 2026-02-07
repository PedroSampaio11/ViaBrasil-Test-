import { NextRequest, NextResponse } from "next/server"
import { getVeiculo } from "@/lib/autocerto-api"

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

    const veiculo = await getVeiculo(codigoVeiculo)

    return NextResponse.json(veiculo)
  } catch (error: any) {
    console.error("Erro ao buscar veículo:", error)

    if (error.message === "Veículo não encontrado") {
      return NextResponse.json(
        { error: "Veículo não encontrado" },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { error: "Erro ao buscar veículo" },
      { status: 500 }
    )
  }
}

