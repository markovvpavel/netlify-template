import { useAppDispatch, useAppSelector } from "@/app/store";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";
import { useCallback, useEffect } from "react";
import { Theme } from "@/types";
import { setTheme } from "@/features/appSlice";

export const ThemeToggle = () => {
  const { theme } = useAppSelector((s) => s.app);
  const dispatch = useAppDispatch();

  const changeTheme = useCallback((theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      dispatch(setTheme("dark"));
    }
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      dispatch(setTheme("light"));
    }
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(
    () => changeTheme(theme === "dark" ? "light" : "dark"),
    [theme]
  );

  return (
    <div className="h-[36px] cursor-pointer select-none" onClick={toggleTheme}>
      {theme === "light" && <MoonIcon />}
      {theme === "dark" && <SunIcon />}
    </div>
  );
};
