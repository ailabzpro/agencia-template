const techs = [
  "Meta Ads", "Google Ads", "YouTube", "Instagram", "TikTok",
  "Google Meu Negócio", "ChatGPT", "Perplexity", "Gemini", "Claude", "SEO", "Google Analytics",
];

const TechMarquee = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <p className="text-center text-muted-foreground text-sm mb-8">
        Canais e plataformas onde fazemos seu negócio <em className="text-foreground">aparecer e vender.</em>
      </p>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={i}
              className="mx-8 text-lg font-semibold text-muted-foreground/50 flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
