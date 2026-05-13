import { useContent } from "@/lib/content";

const TechMarquee = () => {
  const { techMarquee } = useContent();
  if (!techMarquee.items || techMarquee.items.length === 0) return null;
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <p className="text-center text-muted-foreground text-sm mb-8">{techMarquee.label}</p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techMarquee.items, ...techMarquee.items].map((tech, i) => (
            <span key={i} className="mx-8 text-lg font-semibold text-muted-foreground/50 flex-shrink-0">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechMarquee;
