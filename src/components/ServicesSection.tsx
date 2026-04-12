import React from "react";
import { ArrowRight, BarChart3, GraduationCap, Settings, Bot } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// ── Chart data ────────────────────────────────────────────────────────────────

const roasData = [
  { mes: "Jan", valor: 1.2 },
  { mes: "Fev", valor: 1.6 },
  { mes: "Mar", valor: 2.1 },
  { mes: "Abr", valor: 2.8 },
  { mes: "Mai", valor: 3.4 },
  { mes: "Jun", valor: 3.8 },
];

const videoData = [
  { mes: "Jan", valor: 12 },
  { mes: "Fev", valor: 19 },
  { mes: "Mar", valor: 28 },
  { mes: "Abr", valor: 41 },
  { mes: "Mai", valor: 58 },
  { mes: "Jun", valor: 53 },
];

const seoData = [
  { mes: "Jan", valor: 800 },
  { mes: "Fev", valor: 920 },
  { mes: "Mar", valor: 1200 },
  { mes: "Abr", valor: 1900 },
  { mes: "Mai", valor: 3100 },
  { mes: "Jun", valor: 5200 },
];

const iaData = [
  { mes: "Jan", valor: 2 },
  { mes: "Fev", valor: 4 },
  { mes: "Mar", valor: 7 },
  { mes: "Abr", valor: 12 },
  { mes: "Mai", valor: 19 },
  { mes: "Jun", valor: 26 },
];

// ── Chart configs ─────────────────────────────────────────────────────────────

const roasConfig: ChartConfig = { valor: { label: "ROAS" } };
const videoConfig: ChartConfig = { valor: { label: "Mil visualizações" } };
const seoConfig: ChartConfig = { valor: { label: "Visitas orgânicas" } };
const iaConfig: ChartConfig = { valor: { label: "Citações em IAs" } };

// ── Mini charts ───────────────────────────────────────────────────────────────

const TrafegoChart = () => (
  <div className="mt-5 mb-5">
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-2xl font-bold text-foreground">3.8×</span>
      <span className="text-xs text-muted-foreground">ROAS médio em 6 meses</span>
    </div>
    <ChartContainer config={roasConfig} className="h-[90px] w-full">
      <AreaChart data={roasData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradRoas" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(241 52% 63%)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="hsl(241 52% 63%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" hide />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Area
          type="monotone"
          dataKey="valor"
          stroke="hsl(241 52% 63%)"
          strokeWidth={2}
          fill="url(#gradRoas)"
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0 }}
        />
      </AreaChart>
    </ChartContainer>
  </div>
);

const VideoChart = () => (
  <div className="mt-5 mb-5">
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-2xl font-bold text-foreground">+340%</span>
      <span className="text-xs text-muted-foreground">alcance médio por vídeo</span>
    </div>
    <ChartContainer config={videoConfig} className="h-[90px] w-full">
      <BarChart data={videoData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barSize={22}>
        <defs>
          <linearGradient id="gradVideo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(330 75% 60%)" stopOpacity={0.9} />
            <stop offset="100%" stopColor="hsl(330 75% 60%)" stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" hide />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="valor" fill="url(#gradVideo)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  </div>
);

const SeoChart = () => (
  <div className="mt-5 mb-5">
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-2xl font-bold text-foreground">+550%</span>
      <span className="text-xs text-muted-foreground">tráfego orgânico em 6 meses</span>
    </div>
    <ChartContainer config={seoConfig} className="h-[90px] w-full">
      <AreaChart data={seoData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="gradSeo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(142 71% 45%)" stopOpacity={0.35} />
            <stop offset="100%" stopColor="hsl(142 71% 45%)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" hide />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Area
          type="monotone"
          dataKey="valor"
          stroke="hsl(142 71% 45%)"
          strokeWidth={2}
          fill="url(#gradSeo)"
          dot={false}
          activeDot={{ r: 3, strokeWidth: 0 }}
        />
      </AreaChart>
    </ChartContainer>
  </div>
);

const IaChart = () => (
  <div className="mt-5 mb-5">
    <div className="flex items-baseline gap-2 mb-3">
      <span className="text-2xl font-bold text-foreground">13×</span>
      <span className="text-xs text-muted-foreground">mais citações em IAs</span>
    </div>
    <ChartContainer config={iaConfig} className="h-[90px] w-full">
      <BarChart data={iaData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barSize={22}>
        <defs>
          <linearGradient id="gradIa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(197 90% 55%)" stopOpacity={0.9} />
            <stop offset="100%" stopColor="hsl(197 90% 55%)" stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <XAxis dataKey="mes" hide />
        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="valor" fill="url(#gradIa)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartContainer>
  </div>
);

// ── Services ──────────────────────────────────────────────────────────────────

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  chart: React.ReactNode;
};

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Tráfego Pago (Meta & Google Ads)",
    description:
      "Criamos e gerenciamos campanhas em Meta Ads e Google Ads para atrair os clientes certos, no momento certo. Sem achismo — só dado e resultado mensurável.",
    tags: ["Meta Ads", "Google Ads"],
    chart: <TrafegoChart />,
  },
  {
    icon: GraduationCap,
    title: "Edição de Vídeo Profissional",
    description:
      "Transformamos seus vídeos brutos em conteúdo de alta performance para redes sociais e anúncios. Corte, legenda, motion e entrega rápida.",
    tags: ["Reels", "Anúncios"],
    chart: <VideoChart />,
  },
  {
    icon: Settings,
    title: "SEO e Ranqueamento Orgânico",
    description:
      "Fazemos sua empresa aparecer nas primeiras posições do Google sem pagar por clique. Tráfego qualificado, constante e crescente mês a mês.",
    tags: ["Google", "Orgânico"],
    chart: <SeoChart />,
  },
  {
    icon: Bot,
    title: "Presença em Buscas por IA",
    description:
      "Otimizamos sua empresa para ser citada quando alguém perguntar ao ChatGPT, Claude, Gemini ou Perplexity. O futuro da busca já chegou — esteja nele.",
    tags: ["ChatGPT", "Gemini"],
    chart: <IaChart />,
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

const ServicesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6" id="servicos">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Do anúncio ao cliente na porta.{" "}
            <em className="text-gradient-gold italic">Executamos tudo.</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada serviço é entregue com processo padronizado, métricas claras e foco total no
            resultado do seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>

              {service.chart}

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
