export function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="text-3xl font-semibold leading-tight tracking-tight text-balance text-text sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-pretty text-muted">{subtitle}</p>
      ) : null}
    </div>
  );
}
