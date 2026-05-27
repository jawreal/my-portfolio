import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import Initials from "@/components/Initials"
import NavLinks from "@/layouts/NavLinks";
import { Menu } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface IProps {
  navInview: boolean;
}

const Navbar = ({ navInview }: IProps) => {
  const location = useLocation();
  const notInPreviewPage = useMemo(() => !location.pathname.includes("preview"), [location])
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  
  const onOpenMenu = () => {
    setOpenMobileMenu(open => !open)
  }
  
  return (
  <div className="w-full flex flex-col items-center max-w-7xl relative sticky top-0 z-20">
    <nav className="w-full px-6 h-24 md:px-20">
      {/* Container with border */}
      <section className={cn("h-full dark:border-slate-900 flex items-center", notInPreviewPage && "")} >
        <Initials isVisible={navInview} />
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