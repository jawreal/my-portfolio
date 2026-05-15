import GetInTouch from "@/components/GetInTouch";

const Contact = () => {
  return (
  <section className="w-full px-6 flex flex-col md:px-20 py-20 gap-y-10" id="contact">
     <div className="flex flex-col gap-y-2">
       <h1 className="text-4xl font-extrabold dark:text-slate-200">GET IN TOUCH</h1>
       <p className="text-slate-500 dark:text-slate-400 md:max-w-[24rem]">Need a full-stack developer? Let's turn your idea into reality — hit me up for collaborations or projects.
       </p>
     </div>
     <div className="w-full flex flex-col justify-center max-w-md">
       <GetInTouch />
     </div>
  </section>
  )
}

export default Contact;