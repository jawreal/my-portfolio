import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const links: string[] = ["about", "skills", "projects", "contact"];

interface IProps {
  open?: boolean; // This is a state from mobile menu.
  onOpenChange?: React.Dispatch<React.SetStateAction<boolean>>;
  
}

const NavLinks = ({ open, onOpenChange }: IProps) => {
   const navigate = useNavigate();
   const onNavigate = React.useCallback((id: string) => {
     // Navigate to the section 
     navigate(`/${id}`);
     
     if(onOpenChange) {
       onOpenChange(); // Close the drawer
     }
     
     setTimeout(() => {
       // Apply smooth scrolling effect
       const element = document.querySelector(id);
       if (element) {
         element.scrollIntoView({ behavior: "smooth" });
       }
      }, 100);
   }, [onOpenChange])
  
   return (
   <ul className={cn("flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:ml-auto md:gap-x-3", !open && "hidden md:flex")}>
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
         <hr className={cn("ml-4 mr-6 md:hidden", link === "contact" && "hidden")}/>
       </li>
       ))
      }
    </ul> 
   )
}


export default NavLinks;