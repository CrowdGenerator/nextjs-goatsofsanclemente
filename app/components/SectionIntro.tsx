interface SectionIntroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionIntro({ title, subtitle, className = "" }: SectionIntroProps) {
  return (
    <div className={`mt-12 md:mt-16 mb-6 ${className}`.trim()}>
      <h2 className="text-primary-green font-bold text-[clamp(28px,3.5vw,34px)] leading-[1.2] tracking-[-0.01em]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-gray text-[17px] leading-[1.6] max-w-[680px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
