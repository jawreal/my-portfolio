import Navbar from "@/layouts/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/pages/Footer";
import { useInView } from "react-intersection-observer";

const Layout = () => {
  const location = useLocation();
  const { ref: navRef, inView: navInview } = useInView();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (target) {
      const element = document.querySelector(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
  <div className="w-full flex flex-col items-center bg-slate-100/80 dark:bg-slate-950 relative">
    <div ref={navRef} className="h-1" />
    <Navbar navInview={navInview} />    
    <Outlet />
    <Footer />
  </div>
  )
}

export default Layout;