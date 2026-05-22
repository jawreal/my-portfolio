import { type HTMLMotionProps } from "framer-motion";

type ElementsIncluded = "div" | "h5" | "li";

export const animationProps = (delay: number, isInview: boolean): HTMLMotionProps<ElementsIncluded> => ({  initial: { opacity: 0, y: 20 },
  animate: isInview ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.3, ease: "easeOut", delay }
});
