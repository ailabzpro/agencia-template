const techs = [
  "Hugging Face", "Meta AI", "Vertex AI", "LangChain",
  "OpenAI", "Gemini", "Anthropic", "Replicate", "Grok",
];

const TechMarquee = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <p className="text-center text-muted-foreground text-sm mb-8">
        Tecnologias que usamos para gerar <em className="text-foreground">crescimento com IA.</em>
      </p>
      <div className="relative">
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
