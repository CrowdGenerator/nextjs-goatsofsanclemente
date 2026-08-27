import Image from "next/image";

interface MapPlaceholderProps {
  className?: string;
}

export default function MapPlaceholder({ className = "" }: MapPlaceholderProps) {
  return (
    <div
      className={`bg-pale-green border-2 border-dashed border-secondary-green rounded-lg min-h-[300px] flex flex-col items-center justify-center text-center px-6 py-10 ${className}`.trim()}
    >
      <Image
        src="/scwrf-logo.png"
        alt=""
        width={120}
        height={120}
        className="mb-4 opacity-60 max-w-full h-auto"
        aria-hidden="true"
      />
      <p className="text-primary-green font-bold text-lg mb-1">
        MAP GOES HERE
      </p>
      <p className="text-muted-gray text-sm">
        High-resolution hazard map coming soon
      </p>
    </div>
  );
}
