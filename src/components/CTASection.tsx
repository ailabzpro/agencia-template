import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-border bg-card p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Faça <em className="text-gradient-gold italic">a IA</em> trabalhar por você
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Empresas que adotam IA crescem até 3x mais rápido.
          </p>
          <Button size="lg" className="gap-2 rounded-full text-base px-8 py-6">
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

export default CTASection;
