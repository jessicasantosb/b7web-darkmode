import { useTheme } from "@/contexts/ThemeContext";

export function Button() {
  const themeCtx = useTheme();

  return (
    <button
      className={`px-2 h-8 rounded-sm cursor-default ${
        themeCtx?.theme === "light"
          ? "bg-black text-slate-50"
          : "bg-slate-50 text-black"
      } `}
    >
      Login
    </button>
  );
}
