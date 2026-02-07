import { NextRequest, NextResponse } from "next/server"
import { saveLead } from "@/lib/autocerto-api"
import { LeadApi } from "@/lib/types/autocerto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validação básica
    if (!body.nome || !body.email || !body.telefone) {
      return NextResponse.json(
        { error: "Nome, email e telefone são obrigatórios" },
        { status: 400 }
      )
    }

    const leadData: LeadApi = {
      Interesse: body.interesse || 2, // 2 = Seminovos (padrão)
      Nome: body.nome,
      Email: body.email,
      Telefone: body.telefone,
      Telefone2: body.telefone2,
      Mensagem: body.mensagem,
      DescricaoVeiculo: body.modeloDesejado || body.descricaoVeiculo,
      CodigoVeiculo: body.codigoVeiculo ? parseInt(body.codigoVeiculo) : undefined,
      CodigoMidia: body.codigoMidia,
      Placa: body.placa,
      Cpf: body.cpf,
      Cep: body.cep,
      CodigoUnidade: body.codigoUnidade,
    }

    const resultado = await saveLead(leadData)

    return NextResponse.json({ success: true, message: resultado })
  } catch (error) {
    console.error("Erro ao salvar lead:", error)
    return NextResponse.json(
      { error: "Erro ao salvar lead" },
      { status: 500 }
    )
  }
}

