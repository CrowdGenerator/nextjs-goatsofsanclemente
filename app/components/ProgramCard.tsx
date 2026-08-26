interface ProgramCardProps {
  title: string;
  description: string;
  isFuture: boolean;
  className?: string;
}

export default function ProgramCard({
  title,
  description,
  isFuture,
  className = "",
}: ProgramCardProps) {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-8 ${className}`.trim()}
    >
      {isFuture && (
        <span className="inline-block text-ochre font-bold text-xs uppercase tracking-wide mb-3">
          Future / Developing
        </span>
      )}
      <h3 className="text-primary-green font-bold text-[22px] leading-snug mb-3">
        {title}
      </h3>
      <p className="text-body-charcoal text-[17px] leading-relaxed mb-0">
        {description}
      </p>
    </div>
  );
}
