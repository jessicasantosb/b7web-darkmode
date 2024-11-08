import { useTheme } from "@/contexts/ThemeContext";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  const themeCtx = useTheme();

  return (
    <section
      className={`w-full h-screen p-4  ${
        themeCtx?.theme === "light"
          ? "bg-slate-50 text-black"
          : "bg-black text-slate-50"
      }`}
    >
     
      {children}
    </section>
  );
}
