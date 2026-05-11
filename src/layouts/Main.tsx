import Navbar from "@/layouts/Navbar";
import About from "@/pages/About";
import BacklashBg from "@/components/BacklashBg";
import HeroSection from "@/pages/HeroSection";


const Main = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <main className="w-full flex flex-col min-h-screen border-b dark:border-slate-800 relative">
      <Navbar />
      <BacklashBg height="after:h-8"/>
      <HeroSection />
    </main>
    <About /> 
  </div>
  )
}

export default Main;