import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Quem é a Brabaflow?",
    answer: "A Brabaflow é uma agência nativa de IA que ajuda empresas tradicionais a se tornarem AI First. Combinamos estratégia, educação e tecnologia para transformar negócios com inteligência artificial.",
  },
  {
    question: "O que a Brabaflow faz?",
    answer: "Oferecemos análise estratégica, letramento em IA, consultoria em GenAI e desenvolvimento de agentes e sistemas de IA sob medida. Do diagnóstico à implementação, ajudamos sua empresa a multiplicar produtividade.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">PERGUNTAS FREQUENTES</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            As <em className="text-gradient-gold italic">2 perguntas</em> que recebemos antes de toda grande parceria.
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
