import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useContent } from "@/lib/content";

const FAQSection = () => {
  const { faq } = useContent();
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">{faq.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold">{faq.title}</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faq.items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQSection;
