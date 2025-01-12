import { useAppDispatch, useAppSelector } from "@/app/store";
import { motion } from "motion/react";
import { useCallback, useMemo, useState } from "react";
import { Arrow } from "../Icons/Arrow";
import { ThemeToggle } from "../Buttons/ThemeToggle";
import { LocaleToggle } from "../Buttons/LocaleToggle";
import { useTranslation } from "@/hooks/useTranslation";
import { setIsMenu } from "@/features/layoutSlice";
import Link from "next/link";

export const Menu = () => {
  const { isMenu } = useAppSelector((s) => s.layout);

  const m = useMemo(
    () => ({
      enter: { bottom: isMenu ? 0 : "-100%" },
      exit: { bottom: "-100%" },
      transition: {
        duration: 1,
        ease: [0.755, 0.05, 0.855, 0.06],
        stiffness: 20,
        mass: 0.5,
      },
    }),
    [isMenu]
  );

  const dispatch = useAppDispatch();
  const closeMenu = () => dispatch(setIsMenu(false));

  return (
    <motion.aside
      initial={m.exit}
      animate={m.enter}
      transition={m.transition}
      className="h-[calc(100dvh-60px)] w-screen fixed z-[1000] bg-zinc-100 dark:bg-zinc-800"
    >
      <div className="h-full container mx-auto px-4 md:px-0">
        <Link href={"/"} onClick={closeMenu}>
          <HomeSection />
        </Link>
        <Link href={"/contact"} onClick={closeMenu}>
          <ContactSection />
        </Link>
        <Link href={"/about"} onClick={closeMenu}>
          <AboutSection />
        </Link>

        <div className="h-1/4 w-full flex items-center justify-between">
          <ThemeToggle />
          <LocaleToggle />
        </div>
      </div>
    </motion.aside>
  );
};

const HomeSection = () => {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation("components", "pages");

  return (
    <div
      className="h-1/4 w-full flex items-center justify-center md:justify-start border-b border-zinc-800 dark:border-zinc-100 cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        className="overflow-hidden"
        animate={{
          width: isHover ? "fit-content" : 0,
        }}
      >
        <Arrow className="h-[45px] md:h-[60px] -rotate-90 px-3" />
      </motion.div>
      <span className="text-[4rem] md:text-[7.5rem]">{t("home")}</span>
    </div>
  );
};

const ContactSection = () => {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation("components", "pages");

  return (
    <div
      className="h-1/4 w-full flex items-center justify-center border-b border-zinc-800 dark:border-zinc-100 cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        className="overflow-hidden"
        animate={{
          width: isHover ? "fit-content" : 0,
        }}
      >
        <Arrow className="h-[45px] md:h-[60px] -rotate-90 px-3" />
      </motion.div>
      <span className="text-[4rem] md:text-[7.5rem]">{t("contact")}</span>
      <motion.div
        className="overflow-hidden"
        animate={{
          width: isHover ? "fit-content" : 0,
        }}
      >
        <Arrow className="h-[45px] md:h-[60px] rotate-90 px-3" />
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation("components", "pages");

  return (
    <div
      className="h-1/4 w-full flex items-center justify-center md:justify-end border-b border-zinc-800 dark:border-zinc-100 cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className="text-[4rem] md:text-[7.5rem]">{t("about")}</span>
      <motion.div
        className="overflow-hidden"
        animate={{
          width: isHover ? "fit-content" : 0,
        }}
      >
        <Arrow className="h-[45px] md:h-[60px] rotate-90 px-3" />
      </motion.div>
    </div>
  );
};
