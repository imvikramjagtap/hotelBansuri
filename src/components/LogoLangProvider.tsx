"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { restaurant } from "@/lib/restaurant";

export type LogoLang = "en" | "mr";

type LogoAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type LogoLangContextValue = {
  lang: LogoLang;
  setLang: (lang: LogoLang) => void;
  logo: LogoAsset;
};

const LogoLangContext = createContext<LogoLangContextValue | null>(null);

export function LogoLangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LogoLang>("en");
  const value = useMemo(
    () => ({
      lang,
      setLang,
      logo: lang === "en" ? restaurant.logos.en : restaurant.logos.mr,
    }),
    [lang],
  );

  return (
    <LogoLangContext.Provider value={value}>{children}</LogoLangContext.Provider>
  );
}

export function useLogoLang() {
  const ctx = useContext(LogoLangContext);
  if (!ctx) {
    throw new Error("useLogoLang must be used within LogoLangProvider");
  }
  return ctx;
}
