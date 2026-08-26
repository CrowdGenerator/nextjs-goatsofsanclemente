interface PartnerRoleRow {
  foundation: string;
  partners: string;
}

interface PartnerRoleTableProps {
  rows: PartnerRoleRow[];
  className?: string;
}

export default function PartnerRoleTable({
  rows,
  className = "",
}: PartnerRoleTableProps) {
  return (
    <div className={`w-full overflow-x-auto ${className}`.trim()}>
      {/* Desktop table (md and up) */}
      <table className="hidden md:table w-full border-collapse border border-gray-200 text-left">
        <thead>
          <tr>
            <th className="bg-sage-panel font-bold text-body-charcoal border border-gray-200 px-4 py-3 w-1/2">
              The Foundation Helps
            </th>
            <th className="bg-sage-panel font-bold text-body-charcoal border border-gray-200 px-4 py-3 w-1/2">
              Partners Retain
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-soft-neutral" : "bg-white"}>
              <td className="border border-gray-200 px-4 py-3 text-body-charcoal">
                {row.foundation}
              </td>
              <td className="border border-gray-200 px-4 py-3 text-body-charcoal">
                {row.partners}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked cards (below md) */}
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="bg-sage-panel px-4 py-2 font-bold text-body-charcoal text-sm">
              Row {i + 1}
            </div>
            <div className="bg-white px-4 py-3 border-b border-gray-200">
              <span className="block text-[13px] font-semibold text-muted-gray uppercase tracking-wide mb-1">
                The Foundation Helps
              </span>
              <span className="text-body-charcoal text-[15px]">
                {row.foundation}
              </span>
            </div>
            <div className="bg-soft-neutral px-4 py-3">
              <span className="block text-[13px] font-semibold text-muted-gray uppercase tracking-wide mb-1">
                Partners Retain
              </span>
              <span className="text-body-charcoal text-[15px]">
                {row.partners}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
