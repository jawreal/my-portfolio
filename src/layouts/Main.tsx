import Navbar from "@/layouts/Navbar";
import BacklashBg from "@/components/BacklashBg";


const Main = () => {
  return (
  <div className="w-full flex flex-col items-center">
    <main className="w-full flex flex-col h-screen border-b dark:border-slate-800 relative">
      <Navbar />
      <BacklashBg />
      
      {/* Container with border */} 
      <section className="w-full flex-1 px-6 flex flex-col md:px-20">
        <div className="flex-1 border-x dark:border-slate-800">
       
        </div>
      </section>
    </main>
  </div>
  )
}

export default Main;