import { WithChildren } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const PageTransition = ({ children }: WithChildren) => {
  const router = useRouter();

  const m = useMemo(
    () => ({
      enter: { opacity: 1 },
      exit: { opacity: 0 },
      transition: {
        ease: [0.85, 0, 0, 1],
        duration: 1,
        stiffness: 20,
        mass: 0.5,
      },
    }),
    []
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        animate={m.enter}
        exit={m.exit}
        initial={m.exit}
        key={router.pathname}
        transition={m.transition}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
