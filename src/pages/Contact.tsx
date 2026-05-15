import GetInTouch from "@/components/GetInTouch";
import ImageBadge from "@/components/ImageBadge";
import { Fragment } from "react";

const Contact = () => {
  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-10" id="contact">
     <div className="flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">GET IN TOUCH</h1>
       <p className="text-slate-500 dark:text-slate-400 md:max-w-[24rem]">Need a full-stack developer? Let's turn your idea into reality — hit me up for collaborations or projects.
       </p>
     </div>
     <div className="w-full flex flex-col md:flex-row">
       <div className="flex-1 md:max-w-sm">
         <GetInTouch />
       </div>
       <div className="md:w-[23rem] md:h-[23rem] xl:w-[32rem] xl:h-[32rem] ml-auto hidden md:block relative">
           <img src="./globe.svg" className="w-full h-full object-contain opacity-80 dark:opacity-60" />
           <ImageBadge position="bottom-0 right-0 transform -translate-x-12 -translate-y-11">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>LET'S CONNECT</span>
              </Fragment>
           </ImageBadge>
           <ImageBadge position="top-0 left-0 transform translate-x-12 translate-y-10">
              <Fragment>
                <span className="h-1 w-1 rounded-full bg-purple-500"></span>
                <span>WORK AVAILABLE</span>
              </Fragment>
           </ImageBadge>
        </div>
     </div>
  </section>
  )
}

export default Contact;