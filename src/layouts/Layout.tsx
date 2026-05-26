import Navbar from "@/layouts/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/pages/Footer";

const Layout = () => {
  const location = useLocation();

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
  <div className="w-full flex flex-col items-center">
    <Navbar />    
    <Outlet />
    <Footer />
  </div>
  )
}

export default Layout;