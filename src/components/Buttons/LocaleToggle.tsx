import { useAppDispatch, useAppSelector } from "@/app/store";
import { setLocale } from "@/features/appSlice";
import { useCallback } from "react";

export const LocaleToggle = () => {
  const { locale } = useAppSelector((s) => s.app);

  const dispatch = useAppDispatch();
  const toggleLocale = useCallback(
    () => dispatch(setLocale(locale === "en" ? "fr" : "en")),
    [locale]
  );

  return (
    <span className="text-lg cursor-pointer select-none" onClick={toggleLocale}>
      {locale === "fr" && "English"}
      {locale === "en" && "Français"}
    </span>
  );
};
