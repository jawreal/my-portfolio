import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  position?: string;
  children: ReactNode;
}

const ImageBadge = ({ position, children } : IProps) => {
  return (
  <div className={cn("absolute", position)}>
    <div className="relative">
      <div className="bg-slate-50 p-2 text-xs border border-slate-300 dark:border-slate-900 text-slate-950 flex items-center gap-x-2 font-medium">
         {children}
      </div>
      <div className="w-full h-full absolute bg-slate-200/80 dark:bg-slate-800/80 transform translate-x-2 absolute top-0 z-[-1] translate-y-2">
      </div>
     </div>
  </div>
  )
};

export default ImageBadge;