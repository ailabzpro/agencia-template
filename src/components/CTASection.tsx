import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useContent, whatsappUrl } from "@/lib/content";

const CTASection = () => {
  const content = useContent();
  const { cta, agency, navbar } = content;
  const link = whatsappUrl(agency.whatsapp, navbar.ctaLink);
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-border bg-card p-12 md:p-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{cta.title}</h2>
          <p className="text-muted-foreground text-lg mb-8">{cta.subtitle}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 rounded-full text-base px-8 py-6">
              {cta.buttonText}<ExternalLink className="w-4 h-4" />
            </Button>
          </a>
          {cta.ctaSubtext && <p className="text-muted-foreground text-sm mt-4">{cta.ctaSubtext}</p>}
        </div>
      </div>
    </section>
  );
};
export default CTASection;
