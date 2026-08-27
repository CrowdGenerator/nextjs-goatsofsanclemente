import type { ReactNode } from "react";
import MapPlaceholder from "./MapPlaceholder";
import SourceCitation from "./SourceCitation";

interface LocalContextPanelProps {
  title: string;
  content: ReactNode;
  showMap?: boolean;
  citationSource?: string;
  citationDate?: string;
  className?: string;
}

export default function LocalContextPanel({
  title,
  content,
  showMap = true,
  citationSource,
  citationDate,
  className = "",
}: LocalContextPanelProps) {
  return (
    <div
      className={`bg-pale-green rounded-lg p-4 sm:p-6 md:p-8 ${className}`.trim()}
    >
      <h3 className="text-primary-green font-bold text-xl mb-4">{title}</h3>

      {showMap && (
        <div className="mb-6">
          <MapPlaceholder />
        </div>
      )}

      <div className="text-body-charcoal text-[17px] leading-relaxed mb-4">
        {content}
      </div>

      {citationSource && (
        <div className="mt-4 pt-4 border-t border-secondary-green/30">
          <SourceCitation source={citationSource} date={citationDate} />
        </div>
      )}
    </div>
  );
}
