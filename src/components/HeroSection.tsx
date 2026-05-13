import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useContent, whatsappUrl } from "@/lib/content";

const HeroSection = () => {
  const content = useContent();
  const { hero, agency, branding, navbar, techMarquee } = content;
  const cta = whatsappUrl(agency.whatsapp, navbar.ctaLink);
  const bgSrc = branding.heroBgUrl || heroBg;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={bgSrc} alt="Hero background" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 w-full min-w-0">
        <p className="section-label mb-6">{hero.label}</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 break-words">
          {hero.headlineParts.map((part, i) =>
            part.highlight ? (
              <em key={i} className="text-gradient-gold not-italic font-bold italic">{part.text}</em>
            ) : (
              <span key={i}>{part.text}</span>
            )
          )}
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 whitespace-pre-line">{hero.subtitle}</p>
        <a href={cta} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full">
            {hero.ctaText}<ExternalLink className="w-4 h-4" />
          </Button>
        </a>
        {hero.ctaSubtext && <p className="text-muted-foreground text-sm mt-4">{hero.ctaSubtext}</p>}
        {techMarquee?.items?.length > 0 && hero.marqueeLabel && (
          <div className="mt-16">
            <p className="text-muted-foreground text-xs mb-6">{hero.marqueeLabel}</p>
            <div className="overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...techMarquee.items, ...techMarquee.items].map((tech, i) => (
                  <span key={i} className="mx-5 flex-shrink-0 flex items-center gap-3 rounded-full border border-border bg-card/50 backdrop-blur-sm px-5 py-2.5">
                    <span className="text-sm font-medium text-foreground/60">{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default HeroSection;
