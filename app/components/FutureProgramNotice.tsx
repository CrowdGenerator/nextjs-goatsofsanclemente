interface FutureProgramNoticeProps {
  className?: string;
}

export default function FutureProgramNotice({
  className = "",
}: FutureProgramNoticeProps) {
  return (
    <div
      className={`bg-pale-green border-l-4 border-primary-green rounded-lg p-5 sm:p-6 md:p-8 ${className}`.trim()}
    >
      <h4 className="text-primary-green font-bold text-lg mb-3">
        Important Note
      </h4>
      <p className="text-body-charcoal text-[17px] leading-relaxed">
        These are long-term ideas, not current promises. The Foundation will
        start small. New programs will depend on volunteers, community interest,
        trusted partners, funding, and needed approvals. Some ideas may take
        years to build, and some may change as we learn what San Clemente needs.
      </p>
    </div>
  );
}
