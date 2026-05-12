import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  position: string;
  children: ReactNode;
}

const ImageBadge = ({ position, children } : IProps) => {
  return (
  <div className={cn("rounded-md bg-slate-950 dark:bg-slate-800 p-2 font-mono absolute text-xs border-2 border-dashed border-slate-500 dark:border-slate-700 text-slate-200 flex items-center gap-x-1", position)}>
   {children}
  </div>
  )
};

export default ImageBadge;