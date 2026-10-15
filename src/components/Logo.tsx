export const APP_NAME = "Social SaaS";

type LogoProps = {
  size?: number;
  showText?: boolean;
  className?: string;
};

export function LogoMark({ size = 32, className }: Omit<LogoProps, "showText">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label={`${APP_NAME} logo`}
      className={className}
    >
      <defs>
        <clipPath id="portrait-clip">
          <rect x="16.25" y="4" width="31.5" height="56" rx="7" />
        </clipPath>
      </defs>
      <rect x="2" y="15.12" width="60" height="33.75" rx="7" fill="#4338CA" />
      <rect x="16.25" y="4" width="31.5" height="56" rx="7" fill="#F43F8E" />
      <rect
        x="2"
        y="15.12"
        width="60"
        height="33.75"
        rx="7"
        fill="#1E1B4B"
        clipPath="url(#portrait-clip)"
      />
      <path d="M27.5 25v14l12-7z" fill="#fff" />
    </svg>
  );
}

export default function Logo({ size = 32, showText = true, className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark size={size} />
      {showText && (
        <span
          className="font-semibold tracking-tight"
          style={{ fontSize: size * 0.6 }}
        >
          {APP_NAME}
        </span>
      )}
    </span>
  );
}
