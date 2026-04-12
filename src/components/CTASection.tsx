import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-border bg-card p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Pronto para ter <em className="text-gradient-gold italic">clientes chegando</em> até você?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Negócios que investem em marketing com estratégia crescem de forma consistente. O seu pode ser o próximo.
          </p>
          <a href="https://wa.me/5512953691967?text=Ol%C3%A1%21%20Vi%20o%20material%20da%20ag%C3%AAncia%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20como%20voc%C3%AAs%20podem%20me%20ajudar." target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 rounded-full text-base px-8 py-6">
              Quero mais clientes agora
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          <p className="text-muted-foreground text-sm mt-4">
            Agende uma <em className="text-foreground">conversa rápida</em> — sem enrolação, sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
