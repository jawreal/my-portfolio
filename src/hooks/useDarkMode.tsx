import { useEffect, useState } from "react";

type Preset = "dark" | "light" | "system";

const useDarkMode = () => {
  const [theme, _] = useState<Preset>(() => {
    return localStorage.getItem("theme") as Preset ?? "system";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add(theme);
    } else if (theme === "light"){
      html.classList.remove('dark');
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
      } else {
        html.classList.remove("dark");
      }
    }
  }, [theme]);

  return [theme] as const;
};

export { useDarkMode, type Preset };