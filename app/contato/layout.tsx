import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Via Brasil Automóveis",
  description:
    "Fale com a Via Brasil. Estamos em Ribeirão Pires - SP. Telefone, WhatsApp, e-mail e formulário de contato.",
}

export default function ContatoLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>
}
