import Link from "next/link";

interface ResourceLinkCardProps {
  title: string;
  description: string;
  href: string;
  className?: string;
}

export default function ResourceLinkCard({
  title,
  description,
  href,
  className = "",
}: ResourceLinkCardProps) {
  const isExternal = href.startsWith("http");
  const externalProps = isExternal
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg p-5 sm:p-6 ${className}`.trim()}
    >
      <h2 className="text-primary-green font-bold text-lg mb-2">{title}</h2>
      <p className="text-body-charcoal text-base leading-relaxed mb-4">
        {description}
      </p>
      <Link
        href={href}
        {...externalProps}
        className="text-primary-green font-medium text-[15px] hover:underline inline-block"
      >
        Learn More →
        {isExternal && <span className="sr-only"> (opens in new tab)</span>}
      </Link>
    </div>
  );
}
