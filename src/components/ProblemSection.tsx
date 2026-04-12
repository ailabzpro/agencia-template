import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const ProblemSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label mb-6">SE O SEU NEGÓCIO AINDA NÃO CRESCE ONLINE</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Você investe em marketing, mas os <em className="text-gradient-gold italic">resultados</em> não aparecem?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Muitos donos de negócio jogam dinheiro fora em anúncios sem estratégia, perdem clientes para concorrentes que aparecem primeiro no Google e ficam invisíveis nas buscas por IA. O problema não é o mercado. É a falta de execução certa.
        </p>
        <Button size="lg" className="gap-2 rounded-full">
          Quero resolver isso agora
          <ExternalLink className="w-4 h-4" />
        </Button>
        <p className="text-muted-foreground text-sm mt-4">
          Agende uma <em className="text-foreground">conversa rápida</em> para entender o que está travando seu crescimento.
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
