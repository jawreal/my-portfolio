import { type HTMLMotionProps } from "framer-motion";

type ElementsIncluded = "div" | "h5" | "li";

export const animationProps = (delay: number, isInview: boolean, hasNoInviewRef?: boolean = false): HTMLMotionProps<ElementsIncluded> => ({  initial: { opacity: 0, y: 20 },
  animate: isInview ? { opacity: 1, y: 0 } : hasNoInviewRef ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.3, ease: "easeOut", delay }
});

/*
 * hasNoInviewRef - this is for element that's not using useInView so they can still use this helper function. 
 * if true, it'll not rely on useInView ref. 
*/
