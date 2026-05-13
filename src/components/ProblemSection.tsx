import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useContent, whatsappUrl } from "@/lib/content";

const ProblemSection = () => {
  const content = useContent();
  const { problem, agency, navbar } = content;
  const cta = whatsappUrl(agency.whatsapp, navbar.ctaLink);

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label mb-6">{problem.label}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">{problem.title}</h2>
        {problem.points && problem.points.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-4 mb-10 text-left">
            {problem.points.map((p, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        )}
        {problem.ctaText && (
          <a href={cta} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 rounded-full">
              {problem.ctaText}<ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        )}
        {problem.ctaSubtext && <p className="text-muted-foreground text-sm mt-4">{problem.ctaSubtext}</p>}
      </div>
    </section>
  );
};
export default ProblemSection;
