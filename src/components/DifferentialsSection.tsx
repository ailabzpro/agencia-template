import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useContent, resolveIcon, whatsappUrl } from "@/lib/content";

const DifferentialsSection = () => {
  const content = useContent();
  const { differentials, agency, navbar } = content;
  const cta = whatsappUrl(agency.whatsapp, navbar.ctaLink);
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">{differentials.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{differentials.title}</h2>
          {differentials.subtitle && <p className="text-muted-foreground text-lg">{differentials.subtitle}</p>}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {differentials.items.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-8 text-center">
                <Icon className="w-10 h-10 text-primary mx-auto mb-6" />
                <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {differentials.ctaText && (
          <div className="text-center">
            <a href={cta} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 rounded-full">
                {differentials.ctaText}<ExternalLink className="w-4 h-4" />
              </Button>
            </a>
            {differentials.ctaSubtext && <p className="text-muted-foreground text-sm mt-4">{differentials.ctaSubtext}</p>}
          </div>
        )}
      </div>
    </section>
  );
};
export default DifferentialsSection;
