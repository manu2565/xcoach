export default function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Crossing limbs — echoes the doorstep-visit "X" figure */}
      <path
        d="M6 8 L42 40"
        stroke="#14919B"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M42 8 L24 24.5"
        stroke="#14919B"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M16 31.5 L6 40"
        stroke="#14919B"
        strokeWidth="7"
        strokeLinecap="round"
      />
      {/* The "arriving" head — orange accent dot */}
      <circle cx="33" cy="9" r="5.5" fill="#FF5A1F" />
    </svg>
  );
}
