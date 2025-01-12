import { useAppDispatch, useAppSelector } from "@/app/store";
import { MenuToggle } from "@/components/Buttons/MenuToggle";
import { setIsMenu } from "@/features/layoutSlice";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const { theme } = useAppSelector((s) => s.app);

  const dispatch = useAppDispatch();
  const closeMenu = () => dispatch(setIsMenu(false));

  return (
    <header className="h-[60px] w-full sticky top-0 bg-zinc-100 dark:bg-zinc-800">
      <div className="h-full px-4 md:px-0 container mx-auto flex items-center justify-between">
        <Link href={"/"} onClick={closeMenu}>
          <div className="flex items-center space-x-3">
            <Image
              alt="logo"
              className="h-[24px] w-auto"
              src={`/logo/${theme}.svg`}
              height={0}
              width={0}
            />
            <span className="text-lg font-light">Netlify Template</span>
          </div>
        </Link>

        <MenuToggle />
      </div>
    </header>
  );
};
