import { useEffect, useState } from "react";

type Preset = "dark" | "light" | "system";

const useDarkMode = () => {
  const [theme, _] = useState<Preset>(() => {
    return localStorage.getItem("theme") as Preset ?? "system";
  });

  useEffect(() => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
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
    
    // For toggling icon based on theme
    if(favicon){
      if(html.classList.contains("dark")){
        favicon.href = "/jr_dark.png"
      }else{
        favicon.href = "/jr_light.png"
      }
    }
  }, [theme]);

  return [theme] as const;
};

export { useDarkMode, type Preset };