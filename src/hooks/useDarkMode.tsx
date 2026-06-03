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
        favicon.href = "https://res.cloudinary.com/dfr6tbwcf/image/upload/v1780466558/jr_dark_eqjfea.png"
      }else{
        favicon.href = "https://res.cloudinary.com/dfr6tbwcf/image/upload/v1780466556/jr_light_tkpn79.png"
      }
    }
  }, [theme]);

  return [theme] as const;
};

export { useDarkMode, type Preset };