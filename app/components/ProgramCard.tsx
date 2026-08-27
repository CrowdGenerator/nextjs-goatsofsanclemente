interface ProgramCardProps {
  title: string;
  description: string;
  isFuture: boolean;
  headingLevel?: "h2" | "h3";
  className?: string;
}

export default function ProgramCard({
  title,
  description,
  isFuture,
  headingLevel = "h3",
  className = "",
}: ProgramCardProps) {
  const HeadingTag = headingLevel;
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-4 sm:p-6 ${className}`.trim()}
    >
      {isFuture && (
        <span className="inline-block text-ochre font-bold text-xs uppercase tracking-wide mb-3">
          Future / Developing
        </span>
      )}
      <HeadingTag className="text-primary-green font-bold text-[22px] leading-snug mb-3">
        {title}
      </HeadingTag>
      <p className="text-body-charcoal text-[17px] leading-relaxed mb-0">
        {description}
      </p>
    </div>
  );
}
