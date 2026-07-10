export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="vlogo-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00B8F0" />
            <stop offset="100%" stopColor="#4DA8FF" />
          </linearGradient>
        </defs>
        <path d="M4 6h8l8 18L28 6h8L22 36h-4L4 6z" fill="url(#vlogo-a)" />
        <path d="M18 26l4 10 4-10-4-2-4 2z" fill="#0D2E5E" />
      </svg>
      <div className="leading-tight">
        <div className="text-[15px] font-extrabold tracking-tight text-navy">
          Versatile Tech
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
          Solution
        </div>
      </div>
    </div>
  );
}
