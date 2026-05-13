# agencia-template

Template de landing page para agências geradas automaticamente pelo fluxo "Order Bump 2" da AILABZ.

## Como funciona

Toda a personalização vive em **dois arquivos**:

- `public/content.json` — textos, ícones, CTAs, dados de charts, links
- `public/assets/logo.png` (ou caminho em `branding.logoUrl`) — logo da agência

O `ContentProvider` em `src/lib/content.tsx` carrega o JSON, aplica `branding` como CSS variables (`--primary`, `--accent`, `--gradient-from`, `--gradient-to`) e injeta o Google Font escolhido. Os 11 componentes da landing leem tudo via `useContent()`.

## Stack

- Vite + React 18 + TypeScript
- Tailwind 3 + shadcn/ui + Radix
- recharts (charts opcionais nos serviços)
- react-router-dom

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
# saída em dist/ — pode subir em qualquer host estático (Vercel, Netlify, Cloudflare Pages)
```

## Customizando

Edite `public/content.json`. O contrato completo está em `/content.schema.json` na raiz do projeto-mãe.

Ícones aceitos vêm do registry em `src/lib/content.tsx` (atualmente: `BarChart3`, `GraduationCap`, `Settings`, `Bot`, `Shield`, `TrendingUp`, `Globe`, `Search`, `BookOpen`, `Code`, `Rocket`, `Sparkles`, `Target`, `Zap`, `Users`, `Heart`, `Star`, `Award`, `ChartBar`, `Lightbulb`, `Wrench`). Se mandar um nome desconhecido, cai em `Sparkles` como fallback.

Cores aceitas no `branding` são HSL **sem** o `hsl()` wrapper — ex: `"241 52% 63%"`.

## Deploy

`vercel.json` na raiz já configura framework, output dir e SPA rewrites. Conecta o repo no Vercel e roda — sem passos extras.
