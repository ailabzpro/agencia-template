import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Como funciona o pagamento dos serviços?",
    answer: "Nossos serviços são contratados por pacote com pagamento único para 30 dias de serviço, ou em modelo recorrente (assinatura mensal). Você escolhe o que faz mais sentido para o seu fluxo de caixa. Em ambos os casos, a entrega e os processos são os mesmos.",
  },
  {
    question: "Vocês trabalham com todo tipo de negócio?",
    answer: "Somos especializados em prestadores de serviços, estabelecimentos físicos, construtoras e empresas que buscam presença digital que converte. Se você tem um negócio sólido e quer crescer, provavelmente trabalhamos bem juntos — basta uma conversa para descobrir.",
  },
  {
    question: "Quanto tempo leva para ver resultado?",
    answer: "Depende do serviço. Tráfego pago gera resultado em dias. SEO leva de 3 a 6 meses para ganhar tração consistente. Na primeira conversa, falamos exatamente o que esperar para o seu caso específico — sem promessa vaga.",
  },
  {
    question: "Vocês criam os criativos e vídeos também?",
    answer: "Sim. A edição de vídeo e a criação de criativos para anúncios fazem parte dos nossos serviços. Você manda o material bruto e a gente entrega pronto para rodar nas plataformas.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">PERGUNTAS FREQUENTES</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            As perguntas que todo <em className="text-gradient-gold italic">dono de negócio</em> faz antes de fechar.
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
