import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-24">
        <p className="section-label mb-6">AGÊNCIA NATIVA DE IA</p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Fazemos <em className="text-gradient-gold not-italic font-bold italic">Agentes de IA</em>{" "}
          trabalharem por você
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Transformamos empresas tradicionais em empresas AI First, do diagnóstico e letramento à implementação.
        </p>

        <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-full">
          Entender como funciona
          <ExternalLink className="w-4 h-4" />
        </Button>

        <p className="text-muted-foreground text-sm mt-4">
          Agende uma <em className="text-foreground">conversa rápida</em> para alinhar expectativas.
        </p>

        {/* Logo bar */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-10 opacity-40 flex-wrap">
            {["Globo", "RubyRose", "Seara", "WeWork"].map((name) => (
              <span key={name} className="text-foreground text-sm font-medium tracking-wider">{name}</span>
            ))}
          </div>
          <p className="text-muted-foreground text-xs mt-4">
            Algumas das marcas com as quais <em className="text-foreground">já colaboramos.</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
