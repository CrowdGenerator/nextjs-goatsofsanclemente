interface GuidingIdeaBannerProps {
  text?: string;
}

export default function GuidingIdeaBanner({
  text = "Make wildfire resilience clear, practical, and part of daily life \u2014 not only an emergency concern.",
}: GuidingIdeaBannerProps) {
  return (
    <section className="bg-pale-green py-10 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="content-reading text-center">
        <p className="text-primary-green font-bold text-sm uppercase tracking-wide mb-4">
          Guiding Idea
        </p>
        <p className="text-body-charcoal text-xl leading-relaxed">
          {text}
        </p>
      </div>
    </section>
  );
}
