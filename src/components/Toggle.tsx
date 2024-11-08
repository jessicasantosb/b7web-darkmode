import { useTheme } from "@/contexts/ThemeContext";

export function Toggle() {
  const themeCtx = useTheme();

  return (
    <button
      className="hover:underline"
      onClick={() =>
        themeCtx?.setTheme(themeCtx.theme === "light" ? "dark" : "light")
      }
    >
      Mudar para {themeCtx?.theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
