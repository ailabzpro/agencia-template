import { Shield, TrendingUp, Globe, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const items = [
  {
    icon: Shield,
    title: "Segurança e governança",
    description: "Implementamos IA com proteção de dados, controle total e políticas claras desde o dia 1.",
  },
  {
    icon: TrendingUp,
    title: "ROI comprovado",
    description: "Priorizamos IA que aumenta receita ou reduz custos, não só automação por automação.",
  },
  {
    icon: Globe,
    title: "Equipe global",
    description: "Unimos especialistas pelo mundo para soluções em IA sob medida. Alcance global, execução local.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">DIFERENCIAIS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que <em className="text-gradient-gold italic">escolher</em> a Brabaflow?
          </h2>
          <p className="text-muted-foreground text-lg">
            Não somos devs vendendo IA. Somos estrategistas que entendem de negócio, gente e tecnologia.
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
          <Button size="lg" className="gap-2 rounded-full">
            Entender como funciona
            <ExternalLink className="w-4 h-4" />
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Agende uma <em className="text-foreground">conversa rápida</em> para alinhar expectativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
