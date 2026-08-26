interface SourceCitationProps {
  source: string;
  date?: string;
  className?: string;
}

export default function SourceCitation({ source, date, className = "" }: SourceCitationProps) {
  return (
    <span
      className={`text-muted-gray text-sm italic leading-[1.5] ${className}`.trim()}
    >
      Source: {source}
      {date && `, ${date}`}
    </span>
  );
}
