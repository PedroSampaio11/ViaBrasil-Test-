"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function VehicleInterestForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    modelo: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-4 sm:py-20 bg-[#0A1628]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Não encontrou o modelo que estava buscando?
            </h2>
            <p className="text-xl text-white/80">
              Deixe agora o seu contato para ser notificado(a) quando chegar
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-white font-medium mb-2 text-lg"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/7 border border-white/20 rounded-[22px] text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2 text-lg"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/7 border border-white/20 rounded-[22px] text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="telefone"
                  className="block text-white font-medium mb-2 text-lg"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/7 border border-white/20 rounded-[22px] text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>

              {/* Modelo Desejado */}
              <div>
                <label
                  htmlFor="modelo"
                  className="block text-white font-medium mb-2 text-lg"
                >
                  Modelo Desejado
                </label>
                <input
                  type="text"
                  id="modelo"
                  name="modelo"
                  value={formData.modelo}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/7 border border-white/20 rounded-[22px] text-white placeholder-white/40 focus:outline-none focus:border-yellow-500 transition-colors"
                  placeholder="Ex: Jetta GLI 2020"
                  required
                />
              </div>
            </div>

            {/* LGPD Text */}
            <div className="pt-4">
              <p className="text-white/60 text-sm leading-relaxed">
                De acordo com a Lei Geral de Proteção de Dados, concordo em
                fornecer os dados acima para que a Via Brasil entre em contato
                comigo para apresentar produtos e serviços. Seu nome, e-mail e
                telefone serão usados com a finalidade de ofertar uma
                oportunidade, de acordo com a nossa{" "}
                <a
                  href="/politica-privacidade"
                  className="text-yellow-500 hover:text-yellow-400 underline"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-12 py-4 bg-yellow-500 hover:bg-yellow-600 text-[#0A1628] rounded-[22px] font-black text-2xl transition-colors shadow-lg shadow-yellow-500/20"
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

