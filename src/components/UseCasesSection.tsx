import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useCases = [
  { title: "Prestadores de Serviços", description: "Advogados, médicos, arquitetos, consultores. Se você vende expertise, a gente te coloca na frente de quem está procurando exatamente o que você faz — antes do concorrente aparecer." },
  { title: "Estabelecimentos Físicos", description: "Restaurantes, clínicas, academias, salões. Fazemos sua empresa aparecer quando o cliente abre o Google Maps, pesquisa no bairro ou pergunta para uma IA onde ir." },
  { title: "Construtoras e Imobiliárias", description: "Geramos leads qualificados para vendas de alto ticket com campanhas segmentadas por localização, renda e intenção de compra real." },
  { title: "E-commerces e Lojas Digitais", description: "Tráfego pago e SEO para aumentar o volume de pedidos e reduzir o custo por aquisição de cliente. Mais vendas, menos desperdício de verba." },
  { title: "Franquias e Redes", description: "Estratégias escaláveis para múltiplas unidades com identidade visual consistente e controle de resultado por filial." },
  { title: "Negócios em Crescimento", description: "Se você tem produto bom e quer escalar, montamos a operação de marketing digital do zero — tráfego, conteúdo, SEO e visibilidade em IA." },
];

const UseCasesSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? useCases.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === useCases.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">PARA QUEM TRABALHAMOS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Seu negócio <em className="text-gradient-gold italic">se encaixa</em> aqui.
          </h2>
          <p className="text-muted-foreground text-lg">
            Atendemos nichos específicos com estratégias sob medida — sem template genérico.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 min-h-[250px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{useCases[current].title}</h3>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{useCases[current].description}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {useCases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
