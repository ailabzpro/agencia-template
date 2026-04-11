import { ExternalLink, Search, BookOpen, Code, Rocket } from "lucide-react";
import { Button } from "./ui/button";

const pillars = [
  { icon: Search, step: "01", title: "Validar", description: "Diagnóstico estratégico para identificar onde a IA gera mais impacto." },
  { icon: BookOpen, step: "02", title: "Educar", description: "Letramento e capacitação para sua equipe dominar a IA." },
  { icon: Code, step: "03", title: "Desenvolver", description: "Construção de agentes e sistemas sob medida." },
  { icon: Rocket, step: "04", title: "Escalar", description: "Acompanhamento e evolução contínua dos resultados." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">TRANSFORMAÇÃO AI FIRST</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Os <em className="text-gradient-gold italic">4 pilares</em> do Método Brabaflow
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Colocar Inteligência Artificial no centro do seu negócio exige método: validar a estratégia, educar equipes, desenvolver solução e escalar.
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

export default MethodSection;
