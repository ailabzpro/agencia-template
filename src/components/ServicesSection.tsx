import { ArrowRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig as ChartUiConfig } from "@/components/ui/chart";
import { useContent, resolveIcon } from "@/lib/content";
import type { ChartConfig as ServiceChartConfig } from "@/types/content";

const ServiceChart = ({ chart }: { chart: ServiceChartConfig }) => {
  const cfg: ChartUiConfig = { valor: { label: chart.label } };
  const data = chart.data.map((d) => ({ mes: d.x, valor: d.y }));
  const gradId = `grad-${chart.colorHsl.replace(/\s+/g, "-").replace(/%/g, "")}`;
  const color = `hsl(${chart.colorHsl})`;
  return (
    <div className="mt-5 mb-5">
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-foreground">{chart.metric}</span>
        <span className="text-xs text-muted-foreground">{chart.label}</span>
      </div>
      <ChartContainer config={cfg} className="h-[90px] w-full">
        {chart.type === "area" ? (
          <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" hide />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Area type="monotone" dataKey="valor" stroke={color} strokeWidth={2} fill={`url(#${gradId})`} dot={false} activeDot={{ r: 3, strokeWidth: 0 }} />
          </AreaChart>
        ) : (
          <BarChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barSize={22}>
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                <stop offset="100%" stopColor={color} stopOpacity={0.25} />
              </linearGradient>
            </defs>
            <XAxis dataKey="mes" hide />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="valor" fill={`url(#${gradId})`} radius={[4, 4, 0, 0]} />
          </BarChart>
        )}
      </ChartContainer>
    </div>
  );
};

const ServicesSection = () => {
  const { services } = useContent();
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-6" id="servicos">{services.label}</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{services.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{services.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.items.map((service) => {
            const Icon = resolveIcon(service.icon);
            return (
              <div key={service.title} className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-300">
                <Icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                {service.chart && <ServiceChart chart={service.chart} />}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                    ))}
                  </div>
                  <button className="flex items-center gap-1 text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                    Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
