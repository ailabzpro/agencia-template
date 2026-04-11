import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useCases = [
  { title: "Operações e Processos", description: "Tem um processo na sua empresa que precisa acontecer mais rápido? Criamos Agentes de IA e sistemas sob medida pra automatizar tudo o que você imaginar." },
  { title: "CRM e Vendas", description: "A IA conversa com leads, entende intenções e prioriza oportunidades reais. Automatiza respostas, nutre contatos e acelera o fechamento de vendas." },
  { title: "Logística", description: "A IA entende o ritmo da sua operação, da produção ao estoque, prevendo demandas, otimizando rotas e acelerando entregas." },
  { title: "Criação e Conteúdo", description: "A IA virou o estúdio. Ela gera cenários, vídeos, imagens e campanhas completas em minutos, criando tudo do zero com base na sua ideia." },
  { title: "Dados e Insights", description: "A IA lê seus dados, identifica padrões e revela oportunidades escondidas. Cria relatórios inteligentes e previsões que guiam suas decisões." },
  { title: "Atendimento ao Cliente", description: "Agentes de IA aprendem com suas informações e atendem seus clientes em qualquer canal, com respostas rápidas, humanas e personalizadas." },
];

const UseCasesSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? useCases.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === useCases.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">O QUE A IA FAZ POR VOCÊ</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            É <em className="text-gradient-gold italic">muito mais</em> que automação.
          </h2>
          <p className="text-muted-foreground text-lg">
            É inteligência estratégica para cada setor do seu negócio.
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
