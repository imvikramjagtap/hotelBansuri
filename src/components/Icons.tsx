import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: IconProps) {
  const { title, className, ...rest } = props;
  return {
    className: className ?? "h-6 w-6",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": title ? undefined : true,
    role: title ? ("img" as const) : undefined,
    ...rest,
    children: title ? (
      <>
        <title>{title}</title>
      </>
    ) : null,
  };
}

export function IconClock(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconLeaf(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M5 19c8 0 12-6 14-14-6 1-12 5-14 14Z" />
      <path d="M5 19c2-4 6-7 11-9" />
    </svg>
  );
}

export function IconGarden(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M12 21v-7" />
      <path d="M8 21h8" />
      <path d="M12 14c-4-1-6-4-6-8 4 0 6 3 6 8Z" />
      <path d="M12 14c4-1 6-4 6-8-4 0-6 3-6 8Z" />
    </svg>
  );
}

export function IconKids(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <circle cx="12" cy="6.5" r="2.5" />
      <path d="M8 20v-2a4 4 0 0 1 8 0v2" />
      <path d="M5 12h14" />
      <path d="M7 12v3M17 12v3" />
    </svg>
  );
}

export function IconParking(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  const { children, ...p } = base({ ...props, strokeWidth: props.strokeWidth ?? 0 });
  return (
    <svg {...p} fill={props.fill ?? "currentColor"} stroke="none">
      {children}
      <path d="M12 2.8 14.7 9l6.6.6-5 4.3 1.5 6.5L12 17.5 6.2 20.4 7.7 14l-5-4.3L9.3 9 12 2.8Z" />
    </svg>
  );
}

export function IconStarOutline(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M12 3.2 14.5 9l6.2.5-4.7 4 1.4 6.1L12 16.6 6.6 19.6 8 13.5 3.3 9.5 9.5 9 12 3.2Z" />
    </svg>
  );
}

export function IconParty(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M4 20h16" />
      <path d="M7 20V9l5-5 5 5v11" />
      <path d="M10 20v-5h4v5" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function IconGoogle(props: IconProps) {
  const { title, className, ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "h-5 w-5"}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09A6.97 6.97 0 0 1 5.48 12c0-.72.13-1.41.36-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.43l3.66-3.34Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
      />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M8 17H4.5A2.5 2.5 0 0 1 2 14.5V13a5 5 0 0 1 5-5h1v3H7a2 2 0 0 0-2 2v1h3v3Z" />
      <path d="M20 17h-3.5A2.5 2.5 0 0 1 14 14.5V13a5 5 0 0 1 5-5h1v3h-1a2 2 0 0 0-2 2v1h3v3Z" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.7a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.7a2 2 0 0 1 1.8 2Z" />
    </svg>
  );
}

export function IconMapPin(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconNav(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <path d="m3 11 19-9-9 19-2-8-8-2Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  const { children, ...p } = base(props);
  return (
    <svg {...p}>
      {children}
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarRow({
  rating = 5,
  className = "text-brand-orange",
}: {
  rating?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <IconStar
          key={i}
          className={`h-4 w-4 ${i < rating ? "opacity-100" : "opacity-25"}`}
        />
      ))}
    </div>
  );
}
