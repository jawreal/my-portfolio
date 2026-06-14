import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { type IProjectsData } from "@/lib/projectsData";
import { useMemo, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { combinedStacks, type IStacks } from "@/lib/techStacks";
import { ArrowUpRight } from "lucide-react";
const Image = lazy(() => import("@/components/Image"));

interface IProps extends IProjectsData {
  projectNumber: number;
}

const ProjectContainer = ({ projectNumber, title, imgSrc, description, stacks }: IProps) => {
  const { visibleStacks, remainingStacks } = useMemo(() => {
    const sliceVisible = stacks?.slice(0, 3); // Get the 3 stacks to display as visible 
    const sliceRemaining = stacks?.slice(3); // Get the remaining stacks from above 3 elements
    const visibleStacks = combinedStacks?.filter((s) => sliceVisible.includes(s.id)); // Filter the stacks based on stacks id
    const remainingStacks = sliceRemaining?.length; // Get the size
    return { visibleStacks: visibleStacks?? [], remainingStacks: remainingStacks ?? 0 };
  }, [stacks]);
  
  return (
  <Link to={`/preview/${projectNumber}`}>
    <Card className="rounded-none p-0 border dark:border-slate-800/50 shadow-none min-w-xl hover:border-slate-950 dark:hover:border-slate-400 transition transition-all cursor-pointer">
      <CardContent className="p-0 flex flex-col p-5">
        <div className="h-44 md:h-60 xl:h-72 w-full relative border border-slate-100 dark:border-slate-900">
           <Suspense fallback={<Skeleton className="w-full h-full" />}>
             <Image url={imgSrc} className="w-full h-full object-cover" />
           </Suspense>
        </div>
        <div className="flex flex-col gap-y-2 pt-4">
            <div className="flex gap-x-2">
               <h5 className="text-xl font-bold dark:text-slate-200 max-w-xs hover:underline line-clamp-2">
                 {title}
               </h5>
               <ArrowUpRight size={22} className="text-slate-500 dark:text-slate-400 border-slate-500 inline-block shrink-0"/> 
           </div>
           <p className="line-clamp-3 text-slate-500 dark:text-slate-400 text-sm">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-y-4 mt-4">
           <hr className="border-slate-200 dark:border-slate-900" />
           <div className="flex flex-wrap flex-shrink-0 w-full gap-3 items-center">
             {visibleStacks?.map((stack: IStacks, idx: number) => {
               return (
               <div 
                 className="bg-slate-200/70 font-mono text-xs uppercase dark:bg-slate-800/80 py-1 px-2"
                  key={idx}>
                  {stack.text}
                </div>
                );
              })}
             <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{`+ ${remainingStacks} more`}</span>
            </div>
          </div>
      </CardContent>
    </Card>
  </Link>
  )
}


export default ProjectContainer;