import { ReactNode } from "react";

interface VisionCalloutProps {
  label?: string;
  children: ReactNode;
}

export default function VisionCallout({ label, children }: VisionCalloutProps) {
  return (
    <section className="bg-pale-green rounded-lg p-6 sm:p-8 lg:p-10 xl:p-12 max-w-3xl mx-auto">
      {label && (
        <p className="text-primary-green font-bold text-sm uppercase tracking-wide mb-3">
          {label}
        </p>
      )}
      <div className="text-body-charcoal text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
