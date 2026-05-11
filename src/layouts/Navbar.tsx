import { Button } from "@/components/ui/button";
import NavLinks from "@/layouts/NavLinks";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="px-6 h-24 md:px-20 border-b dark:border-slate-800">
      {/* Container with border */}
      <section className="h-full border-x dark:border-slate-800 flex items-center px-3">
        <h1 className="text-4xl font-extrabold dark:text-slate-200">JR</h1>
        <NavLinks />
       
        {/* Show hamburger button in smaller device */}
        <Button variant="ghost" className="md:hidden ml-auto">
          <Menu className="dark:text-slate-200" />
        </Button>
      </section>
    </nav>
  )
}

export default Navbar;