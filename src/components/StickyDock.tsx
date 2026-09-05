import { restaurant } from "@/lib/restaurant";

type DockItem = {
  href: string;
  label: string;
  sub: string;
  primary: boolean;
  external?: boolean;
};

export function StickyDock() {
  const items: DockItem[] = [
    {
      href: restaurant.mapsUrl,
      label: "Maps",
      sub: "Directions",
      primary: true,
      external: true,
    },
    {
      href: restaurant.whatsapp,
      label: "WhatsApp",
      sub: "Chat",
      primary: false,
      external: true,
    },
    {
      href: restaurant.instagram,
      label: "Instagram",
      sub: "Photos",
      primary: false,
      external: true,
    },
  ];

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line/80 bg-panel/95 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(20,32,25,0.12)] backdrop-blur-md md:hidden"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-3 gap-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                item.primary
                  ? "flex min-h-12 flex-col items-center justify-center rounded-xl bg-brand-orange px-2 py-2 text-center text-white active:bg-brand-orange-deep"
                  : "flex min-h-12 flex-col items-center justify-center rounded-xl border border-line bg-bg px-2 py-2 text-center text-ink active:bg-bg-deep"
              }
            >
              <span className="text-sm font-semibold leading-none">{item.label}</span>
              <span
                className={
                  item.primary
                    ? "mt-1 text-[0.65rem] leading-none text-white/85"
                    : "mt-1 text-[0.65rem] leading-none text-muted"
                }
              >
                {item.sub}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
