import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface IProps {
  height: string;
  children?: ReactNode;
}

const BacklashBg = ({ height, children }) => (
 <section className={cn(`backlash after:border-b dark:after:border-slate-800 after:bg-[size:10px_10px]
   after:bg-[repeating-linear-gradient(45deg,theme(colors.zinc.200/.7)_0,theme(colors.zinc.200/.7)_1px,transparent_0,transparent_50%)]
   dark:after:bg-[repeating-linear-gradient(45deg,theme(colors.slate.800/.6)_0,theme(colors.slate.800/.6)_1px,transparent_0,transparent_50%)]`, height)}>
   {children}
   </section>
)

export default BacklashBg;