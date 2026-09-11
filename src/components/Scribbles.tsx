interface ArrowDoodleProps {
  className?: string;
  label?: string;
}

export function ArrowDoodle({ className = "", label }: ArrowDoodleProps) {
  return (
    <div className={`scribble-arrow ${className}`} aria-hidden="true">
      {label ? <span>{label}</span> : null}
      <svg viewBox="0 0 160 110" fill="none">
        <path
          d="M18 23C44 66 86 84 132 48"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="7 8"
        />
        <path
          d="M122 37L142 42L133 62"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function NetworkDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={`network-doodle ${className}`} viewBox="0 0 220 140" fill="none" aria-hidden="true">
      <path d="M26 80H80L116 34H185" stroke="currentColor" strokeOpacity=".5" />
      <path d="M80 80L116 112H190" stroke="currentColor" strokeOpacity=".4" />
      <circle cx="26" cy="80" r="10" />
      <circle cx="80" cy="80" r="10" />
      <circle cx="116" cy="34" r="10" />
      <circle cx="116" cy="112" r="10" />
      <circle cx="185" cy="34" r="10" />
      <circle cx="190" cy="112" r="10" />
    </svg>
  );
}
