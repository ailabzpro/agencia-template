import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label mb-6">PARA EQUIPES SEM IA, O PROBLEMA É ESSE</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sua <em className="text-gradient-gold italic">equipe</em> está no limite?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Seu time está sobrecarregado porque sua empresa não foi estruturada com mentalidade AI First. O tempo não aumenta, mas a produtividade pode multiplicar.
        </p>
        <Button size="lg" className="gap-2 rounded-full">
          Entender como funciona
          <ExternalLink className="w-4 h-4" />
        </Button>
        <p className="text-muted-foreground text-sm mt-4">
          Agende uma <em className="text-foreground">conversa rápida</em> para alinhar expectativas.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
