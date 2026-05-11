import { Button } from "@/components/ui/button";

const links: string[] = ["about", "skills", "projects", "contact"];

const NavLinks = () => {
   return (
   <ul className="hidden md:flex ml-auto gap-x-3">
     {
       links.map((link: string, idx: number) => (
       <li>
         <Button variant="ghost">
           {link.toUpperCase()}
         </Button>
       </li>
       ))
      }
    </ul> 
   )
}


export default NavLinks;