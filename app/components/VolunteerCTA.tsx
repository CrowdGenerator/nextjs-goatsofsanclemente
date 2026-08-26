import Link from "next/link";

interface VolunteerCTAProps {
  text?: string;
  href?: string;
  className?: string;
}

export default function VolunteerCTA({
  text = "Volunteer With Us",
  href = "/get-involved",
  className = "",
}: VolunteerCTAProps) {
  return (
    <Link
      href={href}
      className={`inline-block bg-primary-green text-white font-semibold text-[15px] px-6 py-3 rounded-[7px] hover:bg-primary-green/90 transition-colors ${className}`.trim()}
    >
      {text}
    </Link>
  );
}
