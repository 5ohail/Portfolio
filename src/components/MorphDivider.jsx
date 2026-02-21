export default function MorphDivider() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] py-8 opacity-80">
      <svg viewBox="0 0 1200 100" className="w-full" aria-hidden="true">
        <path fill="none" stroke="url(#grad)" strokeWidth="2">
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="M0,50 C200,5 400,95 600,50 C800,5 1000,95 1200,50;
                    M0,50 C200,95 400,5 600,50 C800,95 1000,5 1200,50;
                    M0,50 C200,5 400,95 600,50 C800,5 1000,95 1200,50"
          />
        </path>
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#80FFE2" />
            <stop offset="100%" stopColor="#8A5CFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
