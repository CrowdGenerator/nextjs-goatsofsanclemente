import Link from "next/link";

interface PartnerCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export default function PartnerCTA({
  title,
  description,
  buttonText,
  buttonHref,
  className = "",
}: PartnerCTAProps) {
  return (
    <div
      className={`bg-pale-green rounded-lg p-5 sm:p-8 md:p-12 ${className}`.trim()}
    >
      <h3 className="text-primary-green font-bold text-xl mb-3">{title}</h3>
      <p className="text-body-charcoal text-[17px] leading-relaxed mb-6">
        {description}
      </p>
      <Link
        href={buttonHref}
        className="inline-flex items-center justify-center bg-primary-green text-white font-semibold text-[15px] px-6 py-3 rounded-[7px] min-h-[44px] hover:bg-primary-green/90 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
}
