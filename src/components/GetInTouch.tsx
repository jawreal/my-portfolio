import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { type IconType } from "react-icons";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";
import { socialProfiles, type ISocialProfile } from "@/lib/socialProfiles";

interface IProps {
  isInview: boolean;
}

const GetInTouch = ({ isInview }: IProps) => {
  return (
    <form className="w-full flex flex-col [&_label]:font-bold [&_label]:text-sm [&_label]:dark:text-slate-200 gap-y-6">
      <motion.div {...animationProps(0.1, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="fullName">FULLNAME</Label>
        <Input 
          id="fullName" 
          placeholder="your name (e.g., John Doe)" 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.2, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="emailAddress">EMAIL ADDRESS</Label>
        <Input 
          id="emailAddress" 
          placeholder="your email (e.g., john.doe@mail.com)" 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.3, isInview)} className="flex flex-col gap-y-3">
        <Label htmlFor="message">MESSAGE</Label>
        <Textarea 
          id="message" 
          placeholder="your message (e.g., We're excited to explore how you can contribute to our team. Let's connect. )" 
          rows={4} 
          className="shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
      </motion.div>

      <motion.div {...animationProps(0.4, isInview)} className="w-full">
        <Button className="h-11 rounded-none mt-1 w-full">
          SEND MESSAGE
          <ArrowRight />
        </Button>
      </motion.div>

      <motion.div {...animationProps(0.5, isInview)} className="flex flex-col gap-y-1">
        <h5 className="font-extrabold dark:text-slate-200 text-sm">MY EMAIL</h5>
        <span className="text-slate-500 dark:text-slate-400">jorellrelleve@gmail.com</span>
      </motion.div>

      <motion.div {...animationProps(0.6, isInview)} className="flex flex-col gap-y-2">
        <h5 className="font-extrabold dark:text-slate-200 text-sm">SOCIAL PROFILES</h5>
        <div className="w-full flex justify-start gap-x-2 gap-y-2 pt-1 flex-wrap">
          {socialProfiles.map((profile: ISocialProfile, idx: number) =>  {
            const Icon: IconType = profile.icon;
            return (
            <a
              key={idx} 
              href={profile.link}
              className="h-11 px-3 rounded-none border border-slate-300 dark:border-slate-800 flex gap-x-2 items-center disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm font-medium hover:cursor-pointer active:scale-95" target="_blank" rel="noopener noreferrer">
            <Icon />
            {profile.text}
          </a>)})}
        </div>
      </motion.div>
    </form>
  );
}

export default GetInTouch;