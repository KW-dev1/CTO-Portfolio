"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const attr = document.documentElement.dataset.theme as Theme | undefined;
    setTheme(
      attr ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    );
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  if (!theme) return <div className="theme-toggle opacity-0" aria-hidden />;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="theme-toggle"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span aria-hidden>{isDark ? "☀" : "☾"}</span>
      <span className="uppercase tracking-[0.16em]">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
