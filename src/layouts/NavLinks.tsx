import SystemTheme from "@/components/SystemTheme";
import ThemeSettings from "@/components/ThemeSettings";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import useScrollNavigate from "@/hooks/useScrollNavigate";
import * as React from "react";
import { Settings } from "lucide-react";

const links: string[] = ["about", "projects", "skills", "contact"];

interface IProps {
  open?: boolean; // This is a state from mobile menu.
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const NavLinks = ({ open, onOpenChange }: IProps) => {
  const navigate = useScrollNavigate() 
  const onNavigate = React.useCallback((id: string) => {
     navigate({
       id, 
       onOpenChange, 
     })
     
   }, [onOpenChange, navigate]);
   
   return (
   <ul className={cn("flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:ml-auto md:gap-x-3 md:items-end", !open && "hidden md:flex")}>
     {
       links.map((link: string, idx: number) => (
       <li key={idx}>
         <Button
           variant="ghost" 
           className="text-2xl font-extrabold md:font-normal mb-2 md:mb-0 md:text-base active:bg-transparent hover:bg-transparent"
           onClick={() => onNavigate(`#${link}`)}
          >
           {link.toUpperCase()}
         </Button>
         
         {/* Don't show this element at last */}
         <hr className="ml-4 mr-6 md:hidden opacity-80"/>
       </li>
       ))
      }
      
      {/* Must only be visible to small devices */}
      <li className="md:hidden px-4 mt-2">
        <SystemTheme />
      </li>
      
      {/* Must only be visible to big devices */}
      <li className="hidden md:block px-4 mt-2">
        <ThemeSettings>
          <Button variant="ghost">
            <Settings />
          </Button>
        </ThemeSettings>
      </li>
    </ul> 
   )
}


export default NavLinks;