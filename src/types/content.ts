export type Tone = "formal" | "amigavel" | "direto" | "premium" | "descontraido";

export interface AgencyMeta {
  name: string; slug: string; niche: string; audience: string;
  tone: Tone; whatsapp: string; instagram?: string;
}

export interface Branding {
  primaryHsl: string; accentHsl: string; font: string;
  logoUrl: string; heroBgUrl?: string;
}

export interface NavbarConfig { ctaText: string; ctaLink: string; }
export interface HeadlinePart { text: string; highlight?: boolean; }
export interface HeroConfig {
  label: string; headlineParts: HeadlinePart[]; subtitle: string;
  ctaText: string; ctaSubtext?: string; marqueeLabel?: string;
}
export interface ProblemPoint { title: string; description: string; }
export interface ProblemConfig {
  label: string; title: string; points: ProblemPoint[];
  ctaText?: string; ctaSubtext?: string;
}
export interface ChartConfig {
  type: "area" | "bar"; metric: string; label: string;
  colorHsl: string; data: { x: string; y: number }[];
}
export interface ServiceItem {
  icon: string; title: string; description: string;
  tags: string[]; chart?: ChartConfig;
}
export interface ServicesConfig { label: string; title: string; subtitle: string; items: ServiceItem[]; }
export interface UseCaseItem { title: string; description: string; }
export interface UseCasesConfig { label: string; title: string; subtitle?: string; items: UseCaseItem[]; }
export interface DifferentialItem { icon: string; title: string; description: string; }
export interface DifferentialsConfig {
  label: string; title: string; subtitle?: string;
  items: DifferentialItem[]; ctaText?: string; ctaSubtext?: string;
}
export interface MethodStep { icon: string; number: string; title: string; description: string; }
export interface MethodConfig {
  label: string; title: string; subtitle?: string;
  steps: MethodStep[]; ctaText?: string; ctaSubtext?: string;
}
export interface TechMarqueeConfig { label: string; items: string[]; }
export interface FaqItem { question: string; answer: string; }
export interface FaqConfig { label: string; title: string; items: FaqItem[]; }
export interface CtaConfig { title: string; subtitle: string; buttonText: string; ctaSubtext?: string; }
export interface FooterLink { label: string; url: string; }
export interface FooterColumn { heading: string; links: FooterLink[]; }
export interface FooterConfig {
  columns?: FooterColumn[]; companyName?: string;
  copyright: string; legalLinks?: FooterLink[];
}
export interface AgenciaContent {
  agency: AgencyMeta; branding: Branding; navbar: NavbarConfig;
  hero: HeroConfig; problem: ProblemConfig; services: ServicesConfig;
  useCases: UseCasesConfig; techMarquee: TechMarqueeConfig;
  differentials: DifferentialsConfig; method: MethodConfig;
  faq: FaqConfig; cta: CtaConfig; footer: FooterConfig;
}
