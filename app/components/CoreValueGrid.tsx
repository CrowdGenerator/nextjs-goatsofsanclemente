interface CoreValue {
  title: string;
  description: string;
}

interface CoreValueGridProps {
  values: CoreValue[];
  className?: string;
}

export default function CoreValueGrid({ values, className = "" }: CoreValueGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`.trim()}>
      {values.map((value) => (
        <div
          key={value.title}
          className="bg-soft-neutral border border-gray-200 rounded-lg p-6"
        >
          <h3 className="text-primary-green font-bold text-[19px] leading-snug mb-2">
            {value.title}
          </h3>
          <p className="text-body-charcoal text-[17px] leading-relaxed mb-0">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}
