import { ArrowRight, BarChart3, GraduationCap, Settings, Bot } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Análise Estratégica",
    description: "Por 7 dias, analisamos processos, pessoas e oportunidades reais para criar seu plano de implementação de IA.",
    tags: ["Estratégia", "Roadmap"],
  },
  {
    icon: GraduationCap,
    title: "Letramento em IA",
    description: "Treinamos sua equipe online e presencial para que ela entenda IA, perca o medo e comece a usar com confiança.",
    tags: ["Educação", "Capacitação"],
  },
  {
    icon: Settings,
    title: "Consultoria em Gen AI",
    description: "Escolhemos as ferramentas de IA certas para cada setor e configuramos tudo para seu time trabalhar com mais produtividade.",
    tags: ["Stack", "Produtividade"],
  },
  {
    icon: Bot,
    title: "Agentes e Sistemas de IA",
    description: "Construímos Agentes de IA e sistemas que resolvem problemas reais em vendas, operação e criação de conteúdo.",
    tags: ["Desenvolvimento", "Inovação"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">É ASSIM QUE RESOLVEMOS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Recupere o <em className="text-gradient-gold italic">tempo da sua equipe</em> com uma estratégia de IA sob medida.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Da criação de mídia à venda. Do backoffice à análise de dados. Ajudamos sua empresa a inovar com inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                  Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
