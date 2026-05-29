import { Button } from "@/components/ui/button";
import { Sun, Moon, Laptop, Palette, type LucideIcon } from "lucide-react";
import { useState } from "react";
import { useDarkMode, type Preset } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

interface ITheme {
  icon: LucideIcon;
  text: Preset;
}

const themes: ITheme[] = [
  { icon: Sun, text: "light" }, 
  { icon: Moon, text: "dark" }, 
  { icon: Laptop, text: "system" }, 
]

const SystemTheme = () => {
  const [activePreset] = useDarkMode();
  const [activeTheme, setActiveTheme] = useState<Preset>(activePreset);
  
  const changeTheme = (preset: Preset) => {
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement | null;
    const html = document.documentElement;
    if (preset === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (preset === "light") {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // System 
      localStorage.setItem("theme", "system");
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
    
    // Set the current active theme
    setActiveTheme(preset) 
  }
  
  return (
  <div className="w-full flex flex-col gap-y-3">
      <div className="w-full items-center flex gap-x-2">
        <Palette className="text-slate-500 dark:text-slate-400" size={16}/>
        <h5 className="font-mono text-slate-500 dark:text-slate-400 font-extrabold text-sm">
          INTERFACE THEME
        </h5>  
      </div>
      <div className="w-full grid grid-cols-3 space-x-2">
        {
          themes.map((theme: ITheme, idx: number) => {
            const Icon = theme.icon;
            return (
            <Button 
             variant="outline" 
             className={cn("rounded-none flex gap-x-1 font-bold", theme.text === activeTheme && "border-2 border-slate-950 dark:border-slate-200")}
             key={idx}
             onClick={() => changeTheme(theme.text)}
             >
              <Icon />
              {theme.text.toUpperCase()}
            </Button>
            )
          })
        }
      </div>
  </div>
  )
}

export default SystemTheme;