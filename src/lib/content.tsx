import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  BarChart3, GraduationCap, Settings, Bot, Shield, TrendingUp, Globe,
  Search, BookOpen, Code, Rocket, Sparkles, Target, Zap, Users, Heart,
  Star, Award, ChartBar, Lightbulb, Wrench, type LucideIcon,
} from "lucide-react";
import type { AgenciaContent } from "@/types/content";

const ICON_REGISTRY: Record<string, LucideIcon> = {
  BarChart3, GraduationCap, Settings, Bot, Shield, TrendingUp, Globe,
  Search, BookOpen, Code, Rocket, Sparkles, Target, Zap, Users, Heart,
  Star, Award, ChartBar, Lightbulb, Wrench,
};

export function resolveIcon(name: string): LucideIcon {
  return ICON_REGISTRY[name] ?? Sparkles;
}

const ContentContext = createContext<AgenciaContent | null>(null);

function applyBranding(content: AgenciaContent) {
  const root = document.documentElement;
  root.style.setProperty("--primary", content.branding.primaryHsl);
  root.style.setProperty("--ring", content.branding.primaryHsl);
  root.style.setProperty("--accent", content.branding.accentHsl);
  root.style.setProperty("--sidebar-primary", content.branding.primaryHsl);
  root.style.setProperty("--sidebar-ring", content.branding.primaryHsl);
  root.style.setProperty("--gradient-from", content.branding.primaryHsl);
  root.style.setProperty("--gradient-to", content.branding.accentHsl);

  document.title = `${content.agency.name} — ${content.agency.niche}`;

  if (content.branding.font && content.branding.font !== "Inter") {
    const fontHref = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
      content.branding.font
    )}:wght@300;400;500;600;700;800;900&display=swap`;
    const existing = document.getElementById("agency-font-link");
    if (existing) existing.setAttribute("href", fontHref);
    else {
      const link = document.createElement("link");
      link.id = "agency-font-link";
      link.rel = "stylesheet";
      link.href = fontHref;
      document.head.appendChild(link);
    }
    document.body.style.fontFamily = `'${content.branding.font}', sans-serif`;
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<AgenciaContent | null>(null);

  useEffect(() => {
    fetch("/content.json")
      .then((r) => r.json() as Promise<AgenciaContent>)
      .then((data) => { applyBranding(data); setContent(data); })
      .catch((err) => { console.error("Falha ao carregar content.json", err); });
  }, []);

  if (!content) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground text-sm">Carregando…</div>
      </div>
    );
  }

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent(): AgenciaContent {
  const ctx = useContext(ContentContext);
  if (!ctx) throw new Error("useContent deve ser usado dentro de <ContentProvider>");
  return ctx;
}

export function whatsappUrl(whatsapp: string, message?: string): string {
  const cleanNumber = whatsapp.replace(/\D/g, "");
  const msg = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${cleanNumber}${msg}`;
}
