import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatNumber } from "@/lib/formatNumber";
import { useMemo } from "react";

interface IProps {
  title: string;  
  description: string;
  statNumber: number;
}

const Stats = ({ title, description, statNumber }: IProps) => {
 const formattedNumber = useMemo(() => formatNumber(statNumber), [statNumber]);
 
 return (
 <Card className={cn("rounded-none border-x-0 shadow-none bg-slate-100/60 dark:bg-slate-950 dark:border-slate-900", statNumber === 2 && "md:border-x")}>
    <CardContent className="px-3 py-4">
     <div className="w-full flex flex-col gap-y-2 relative">
        <div className="flex gap-x-3 items-center">
          <h1 className="text-sm font-extrabold text-slate-500/80">{formattedNumber}</h1> 
          <h1 className="font-mono text-xs">{title}</h1>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-xs max-w-xs relative z-10">{description}</p>
        
        {/* Big number to show */}
        <h1 className="text-5xl absolute font-extrabold text-slate-300/70 dark:text-slate-800/60 right-0 bottom-2">{formattedNumber}</h1>  
     </div>
    </CardContent>
  </Card>
 )
}

export default Stats;