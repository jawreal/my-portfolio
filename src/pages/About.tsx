import BacklashBg from "@/components/BacklashBg";

const About = () => {
  return (
  <section className="w-full flex-1 px-6 flex flex-col md:px-20" id="about" >
     <div className="flex-1 border-x dark:border-slate-800 flex flex-col md:flex-row gap-y-4 px-4 md:gap-x-4">
       <div className="h-full mt-5 md:self-center md:order-2 md:ml-auto">
         <div className="rounded-md relative w-full md:w-72 md:h-72">
           <img src="./myself.jpg" className="w-full h-full object-cover rounded-md" />
           <div className="rounded-md bg-slate-950 dark:bg-slate-800 p-2 font-mono absolute top-1 left-0 transform -translate-x-3 -translate-y-4 text-xs border border-dashed dark:border-slate-700 text-slate-200 flex items-center gap-x-1">
              <span className="h-1 w-1 rounded-full bg-purple-500"></span>
              FULLSTACK
            </div>
            <div className="rounded-md bg-slate-950 dark:bg-slate-800 p-2 font-mono absolute bottom-1 right-0 transform translate-x-3 translate-y-4 text-xs border border-dashed dark:border-slate-700 text-slate-200 flex items-center gap-x-1">
              <span className="h-1 w-1 rounded-full bg-purple-500"></span>
              AVAILABLE
            </div>
          </div>
       </div> 
       <div className="w-full pt-2 md:max-w-[25rem]">
         <h5 className="font-mono text-slate-500 dark:text-slate-400">ABOUT JORELL</h5> 
          <h1 className="text-4xl md:text-5xl font-extrabold dark:text-slate-200 mt-2 mb-4">The Developer Behind the Code</h1>
          <div className="text-slate-500 dark:text-slate-400 flex flex-col gap-y-3">
           <p>
            I enjoy transforming ideas into practical and meaningful digital experiences. What started as curiosity about how websites work eventually became a passion for building applications that solve real problems and improve user experience.
            </p>
            <p>
             I value clean architecture, continuous learning, and collaboration—whether working independently or with a team, I enjoy tackling challenges, exploring new technologies, and refining solutions through thoughtful development. 
            </p>
          </div>
       </div>
     </div>
  </section>
  )
}

export default About;