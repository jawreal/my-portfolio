import Navbar from "@/layouts/Navbar";
import BacklashBg from "@/components/BacklashBg";
import HeroSection from "@/pages/HeroSection";


const Main = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <main className="w-full flex flex-col h-screen border-b dark:border-slate-800 relative">
      <Navbar />
      <BacklashBg />
      <HeroSection />
    </main>
  </div>
  )
}

export default Main;