interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ eyebrow, title, description, centered = true, light = false }: SectionHeadingProps) => (
  <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
    {eyebrow && (
      <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-secondary" : "text-secondary"} mb-3 block`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
