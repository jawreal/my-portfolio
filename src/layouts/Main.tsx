import Navbar from "@/layouts/Navbar";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import BacklashBg from "@/components/BacklashBg";
import HeroSection from "@/pages/HeroSection";


const Main = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <main className="w-full flex flex-col min-h-screen border-b dark:border-slate-800 relative">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-slate-950 dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(120,119,198,0.25),transparent_60%)] md:dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(120,119,198,0.25),transparent_60%)]"></div>
      <Navbar />
      <BacklashBg height="after:h-8"/>
      <HeroSection />
    </main>
    <About /> 
    <Projects />
    <Skills />
  </div>
  )
}

export default Main;