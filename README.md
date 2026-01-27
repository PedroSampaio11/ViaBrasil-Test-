# Via Brasil - Sistema de Veículos

Sistema moderno para gestão e venda de veículos desenvolvido com Next.js 16, React 19 e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 16.1.5** - Framework React com App Router
- **React 19.2.3** - Biblioteca UI
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
via-brasil/
├── app/                    # App Router do Next.js
│   ├── layout.tsx         # Layout raiz com Header
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   └── header.tsx        # Header principal
├── lib/                  # Utilitários
│   └── utils.ts         # Helpers (cn, etc)
└── public/              # Arquivos estáticos
```

## 🎨 Design System

### Cores Principais
- **Fundo Header**: `#0A1628` (Azul escuro)
- **Botão CTA**: Verde (`#22c55e`)
- **Background**: Cinza claro (`#f9fafb`)

### Componentes
- **Header**: Navegação responsiva com logo centralizada
- **Layout**: Sistema de grid responsivo com Tailwind

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm start` - Inicia servidor de produção
- `npm run lint` - Executa ESLint

## 🔧 Configuração

O projeto já está configurado com:
- ✅ Tailwind CSS 4 com PostCSS
- ✅ TypeScript com paths aliases (@/*)
- ✅ ESLint para Next.js
- ✅ Componentes shadcn/ui preparados
- ✅ Font Inter do Google Fonts

## 📦 Próximos Passos

1. Adicionar logo da empresa no header
2. Criar páginas: Estoque, Sobre, Contato
3. Implementar sistema de busca
4. Adicionar componentes shadcn/ui conforme necessário

## 🤝 Contribuindo

Este é um projeto privado da Via Brasil.

---

Desenvolvido com ❤️ para Via Brasil
