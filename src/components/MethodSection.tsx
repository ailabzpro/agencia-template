import { ExternalLink, Search, BookOpen, Code, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const pillars = [
  { icon: Search, step: "01", title: "Diagnóstico", description: "Analisamos sua presença atual, seus concorrentes e as oportunidades reais antes de propor qualquer coisa." },
  { icon: BookOpen, step: "02", title: "Estratégia", description: "Definimos quais canais, formatos e mensagens vão funcionar para o seu negócio e o seu público específico." },
  { icon: Code, step: "03", title: "Execução", description: "Colocamos a mão na massa. Tráfego, vídeo, SEO ou visibilidade em IA — entregamos com padrão e agilidade." },
  { icon: Rocket, step: "04", title: "Crescimento", description: "Monitoramos os resultados, ajustamos o que precisa e escalamos o que funciona. Resultado constante, mês a mês." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">COMO TRABALHAMOS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Os <em className="text-gradient-gold italic">4 passos</em> para colocar seu negócio onde ele merece
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Método claro, execução firme. Cada fase existe por uma razão — e todas apontam para o mesmo lugar: resultado concreto para o seu negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((p) => (
            <div key={p.step} className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
              <span className="text-6xl font-black text-muted/50 absolute -top-2 -right-1">{p.step}</span>
              <p.icon className="w-8 h-8 text-primary mb-4 relative z-10" />
              <h3 className="text-lg font-bold mb-2 text-foreground relative z-10">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="https://wa.me/5512953691967?text=Ol%C3%A1%21%20Vi%20o%20material%20da%20ag%C3%AAncia%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20como%20voc%C3%AAs%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 rounded-full">
              Quero crescer agora
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Agende uma <em className="text-foreground">conversa rápida</em> — sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
