interface PracticalStepsListProps {
  items: string[];
  className?: string;
}

export default function PracticalStepsList({ items, className = "" }: PracticalStepsListProps) {
  return (
    <ul
      className={`space-y-3 list-none p-0 m-0 ${className}`.trim()}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-body-charcoal text-base leading-[1.65]"
        >
          <span
            className="shrink-0 mt-[9px] h-[7px] w-[7px] rounded-full bg-ochre"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
