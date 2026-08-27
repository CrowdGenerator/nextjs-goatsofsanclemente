interface MissionCard {
  title: string;
  content: string;
}

interface MissionCardGridProps {
  cards: MissionCard[];
  className?: string;
}

export default function MissionCardGrid({ cards, className = "" }: MissionCardGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`.trim()}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6"
        >
          <h3 className="text-primary-green font-bold text-[22px] leading-snug mb-3">
            {card.title}
          </h3>
          <p className="text-body-charcoal text-[17px] leading-relaxed mb-0">
            {card.content}
          </p>
        </div>
      ))}
    </div>
  );
}
