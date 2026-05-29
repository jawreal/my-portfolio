import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader } from "lucide-react";
import { type IconType } from "react-icons";
import { motion } from "framer-motion";
import { animationProps } from "@/lib/animationProps";
import { socialProfiles, type ISocialProfile } from "@/lib/socialProfiles";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCallback, Fragment } from "react";
import { CustomToast } from "@/components/CustomToast";

interface IProps {
  isInview: boolean;
}

interface MessageInfo {
  fullName: string;
  emailAddress: string;
  message: string;
}
const NAME_REGEX: RegExp = /^[A-Za-z]+(?: [A-Za-z]+)?$/;
const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GetInTouch = ({ isInview }: IProps) => {
  const { 
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<MessageInfo>({
    mode: "onChange"
  });
  
  const onSubmit: SubmitHandler<MessageInfo> = useCallback(async (data) => {
    try {
      console.log("Data", data)
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error("Failed to send email")
      }
      
      const result = await response.json()
      
      if (!result?.success) {
        throw new Error("Failed server status response")
      }
      
      CustomToast({
        description: "Message sent! wait for email reply",
        status: "success"
      });
      reset();
      
    } catch (error) {
      console.log("Error: ", error)
      CustomToast({
        description: "Interval server error",
        status: "error"
      })
    }
  }, [reset]);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col [&_label]:font-bold [&_label]:text-sm [&_label]:dark:text-slate-200 gap-y-6">
      <motion.div {...animationProps(0.1, isInview)} className="flex flex-col">
        <Label htmlFor="fullName">FULLNAME</Label>
        <Input 
          id="fullName" 
          {...register("fullName", {
             required: "Fullname is required",
             pattern: {
               value: NAME_REGEX,
               message:
               "Please enter a valid fullname",
              },
              minLength: {
                value: 8,
                message: "Fullname must be at least 8 characters"
              },
          })}
          placeholder="your name (e.g., John Doe)" 
          className="mt-3 shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
        {errors.fullName && <span className="text-xs text-red-500 mt-2 uppercase font-medium">{errors.fullName.message}</span>}
      </motion.div>

      <motion.div {...animationProps(0.2, isInview)} className="flex flex-col">
        <Label htmlFor="emailAddress">EMAIL ADDRESS</Label>
        <Input 
          id="emailAddress" 
          {...register("emailAddress", {
             required: "Email address is required",
             pattern: {
               value: EMAIL_REGEX,
               message:
               "Please enter a valid email address",
              },
          })}
          placeholder="your email (e.g., john.doe@mail.com)" 
          className="mt-3 shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
        {errors.emailAddress && <span className="text-xs text-red-500 mt-2 uppercase font-medium">{errors.emailAddress.message}</span>}
      </motion.div>

      <motion.div {...animationProps(0.3, isInview)} className="flex flex-col">
        <Label htmlFor="message">MESSAGE</Label>
        <Textarea 
          id="message" 
          {...register("message", {
             required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
          })}
          placeholder="your message (e.g., We're excited to explore how you can contribute to our team. Let's connect. )" 
          rows={4} 
          className="mt-3 shadow-none border-x-0 border-t-0 border-b-2 rounded-none px-0 pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-b-2" 
        />
        {errors.message && <span className="text-xs text-red-500 mt-2 uppercase font-medium">{errors.message.message}</span>}
      </motion.div>

      <motion.div {...animationProps(0.4, isInview)} className="w-full">
        <Button
          disabled={isSubmitting}
          type="submit" 
          className="h-11 rounded-none mt-1 w-full uppercase">
          {isSubmitting ? 
          <Fragment>
            <span>please wait...</span>
            <Loader className="animate-spin" />
          </Fragment> : 
          <Fragment>
            <span>send message</span>
            <ArrowRight />
          </Fragment>}
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