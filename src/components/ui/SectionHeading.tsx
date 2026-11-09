
interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mb-12">
      <span className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase">
        {eyebrow}
      </span>

      <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-slate-400 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}
