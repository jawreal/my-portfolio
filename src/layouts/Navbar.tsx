import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/layouts/NavLinks";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  
  const onOpenMenu = () => {
    setOpenMobileMenu(open => !open)
  }
  
  return (
  <div className="w-full flex flex-col items-center max-w-7xl relative md:sticky md:top-0 z-20">
    <nav className="w-full px-6 h-24 md:px-20">
      {/* Container with border */}
      <section className="h-full border-x dark:border-slate-800 flex items-center px-4">
        <h1 className="text-4xl font-extrabold dark:text-slate-200">JR</h1>
        <NavLinks />
        <MobileMenu
         open={openMobileMenu} 
         onOpenChange={setOpenMobileMenu} />
       
        {/* Show hamburger button in smaller device */}
        <Button variant="ghost" className="md:hidden ml-auto" onClick={onOpenMenu}>
          <Menu className="dark:text-slate-200" />
        </Button>
      </section>
    </nav>
  </div>
  )
}

export default Navbar;