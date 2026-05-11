import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links: string[] = ["about", "skills", "projects", "contact"];

interface IProps {
  isOpen?: boolean; // This is a state from mobile menu.
}

const NavLinks = ({ isOpen }: IProps) => {
   return (
   <ul className={cn("flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:ml-auto md:gap-x-3", !isOpen && "hidden md:flex")}>
     {
       links.map((link: string, idx: number) => (
       <li key={idx}>
         <Button variant="ghost" className="text-2xl font-extrabold md:font-normal mb-2 md:mb-0 md:text-base active:bg-transparent hover:bg-transparent">
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