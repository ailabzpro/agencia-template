import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const tools = [
  { name: "Claude", src: "/assets/claude.svg", className: "h-5 w-auto opacity-90" },
  { name: "Meta Ads", src: "/assets/meta.svg", className: "h-5 w-auto opacity-90" },
  { name: "OpenAI", src: "/assets/openai.svg", className: "h-5 w-auto brightness-0 invert opacity-90" },
  { name: "Google Ads", src: "/assets/google-ads.svg", className: "h-5 w-auto opacity-90" },
  { name: "Adobe Premiere", src: "/assets/adobe.svg", className: "h-5 w-auto opacity-90" },
  { name: "Gemini", src: "/assets/gemini.svg", className: "h-5 w-auto opacity-90" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24 w-full min-w-0">
        <p className="section-label mb-6">AGÊNCIA DE MARKETING DIGITAL</p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 break-words">
          Marketing que atrai{" "}
          <em className="text-gradient-gold not-italic font-bold italic">clientes reais</em>,{" "}
          não só seguidores
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Nosso objetivo não é 'rodar anúncio'.<br />É gerar cliente no seu caixa.
        </p>

        <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full">
          Quero crescer agora
          <ExternalLink className="w-4 h-4" />
        </Button>

        <p className="text-muted-foreground text-sm mt-4">
          Agende uma <em className="text-foreground">conversa rápida</em> para entender o que falta no seu negócio.
        </p>

        {/* Tool marquee */}
        <div className="mt-16">
          <p className="text-muted-foreground text-xs mb-6">
            Ferramentas que dominamos para <em className="text-foreground">escalar seu negócio.</em>
          </p>
          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...tools, ...tools].map((tool, i) => (
                <span
                  key={i}
                  className="mx-5 flex-shrink-0 flex items-center gap-3 rounded-full border border-border bg-card/50 backdrop-blur-sm px-5 py-2.5"
                >
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className={tool.className}
                  />
                  <span className="text-sm font-medium text-foreground/60">{tool.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
