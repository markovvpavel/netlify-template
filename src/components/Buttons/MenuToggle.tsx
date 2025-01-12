import { useAppDispatch, useAppSelector } from "@/app/store";
import { setIsMenu } from "@/features/layoutSlice";
import { motion } from "motion/react";
import { useCallback } from "react";

export const MenuToggle = () => {
  const { isMenu } = useAppSelector((s) => s.layout);

  const dispatch = useAppDispatch();
  const toggleMenu = useCallback(() => dispatch(setIsMenu(!isMenu)), [isMenu]);

  return (
    <div
      className="h-[24px] aspect-square flex flex-col justify-center items-center gap-y-[6px] cursor-pointer"
      onClick={toggleMenu}
    >
      <LineFigure rotate={isMenu ? 45 : 0} y={isMenu ? 4 : 0} />
      <LineFigure rotate={isMenu ? -45 : 0} y={isMenu ? -4 : 0} />
    </div>
  );
};

const LineFigure = ({ rotate, y }: { rotate: number; y: number }) => (
  <motion.div
    className={"h-[2px] w-full bg-zinc-800 dark:bg-zinc-100"}
    animate={{
      rotate,
      y,
      transition: { duration: 0.3 },
    }}
  />
);
