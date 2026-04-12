import { Shield, TrendingUp, Globe, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const items = [
  {
    icon: Shield,
    title: "Entrega previsível, sempre",
    description: "Cada serviço segue um processo interno consolidado. Você recebe o que foi combinado, no prazo, com qualidade consistente — sem surpresas.",
  },
  {
    icon: TrendingUp,
    title: "Métricas que importam",
    description: "Não vendemos vaidade. Medimos leads gerados, custo por aquisição e retorno real sobre o investimento. Resultado visível, mês a mês.",
  },
  {
    icon: Globe,
    title: "Sua identidade, nos canais certos",
    description: "Nunca mudamos o que te diferencia. Usamos sua voz e identidade para falar com o público certo, no canal certo, na hora certa.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">DIFERENCIAIS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que <em className="text-gradient-gold italic">escolher</em> a AILABZ PRO?
          </h2>
          <p className="text-muted-foreground text-lg">
            Não somos agência genérica. Somos especialistas em resultado para negócios que querem crescer de verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-8 text-center">
              <item.icon className="w-10 h-10 text-primary mx-auto mb-6" />
              <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://wa.me/5512953691967?text=Ol%C3%A1%21%20Vi%20o%20material%20da%20ag%C3%AAncia%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20como%20voc%C3%AAs%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 rounded-full">
              Quero mais clientes
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Agende uma <em className="text-foreground">conversa rápida</em> e entenda o que está travando seu crescimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
