import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Venda seu Veículo | Via Brasil Automóveis",
  description:
    "Venda seu carro para a Via Brasil. Avaliação justa, processo rápido e seguro em Ribeirão Pires - SP.",
}

export default function VendaLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>
}
