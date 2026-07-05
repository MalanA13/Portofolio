/**
 * Small rounded tag for displaying technology names.
 * Used in project cards and skill sections.
 */
const TechPill = ({ label }: { label: string }) => {
  return (
    <span className="rounded-full bg-[#FAF8F6] px-3 py-1.5 text-xs font-medium text-[#5F6368]">
      {label}
    </span>
  );
};

export default TechPill;
