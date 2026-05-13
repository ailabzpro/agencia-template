import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContent } from "@/lib/content";

const UseCasesSection = () => {
  const { useCases } = useContent();
  const [current, setCurrent] = useState(0);
  const items = useCases.items;
  if (items.length === 0) return null;
  const prev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === items.length - 1 ? 0 : c + 1));

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6">{useCases.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{useCases.title}</h2>
          {useCases.subtitle && <p className="text-muted-foreground text-lg">{useCases.subtitle}</p>}
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12 min-h-[250px] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{items[current].title}</h3>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{items[current].description}</p>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UseCasesSection;
