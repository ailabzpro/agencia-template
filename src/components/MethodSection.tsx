import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useContent, resolveIcon, whatsappUrl } from "@/lib/content";

const MethodSection = () => {
  const content = useContent();
  const { method, agency, navbar } = content;
  const cta = whatsappUrl(agency.whatsapp, navbar.ctaLink);
  return (
    <section id="metodo" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">{method.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{method.title}</h2>
          {method.subtitle && <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{method.subtitle}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {method.steps.map((step) => {
            const Icon = resolveIcon(step.icon);
            return (
              <div key={step.number} className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
                <span className="text-6xl font-black text-muted/50 absolute -top-2 -right-1">{step.number}</span>
                <Icon className="w-8 h-8 text-primary mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 text-foreground relative z-10">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{step.description}</p>
              </div>
            );
          })}
        </div>
        {method.ctaText && (
          <div className="text-center">
            <a href={cta} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full">
                {method.ctaText}<ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            {method.ctaSubtext && <p className="text-muted-foreground text-sm mt-4">{method.ctaSubtext}</p>}
          </div>
        )}
      </div>
    </section>
  );
};
export default MethodSection;
