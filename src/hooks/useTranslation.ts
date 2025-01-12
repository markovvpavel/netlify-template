import { Locale, TranslationMap } from "@/types";
import { useState, useEffect } from "react";
import { useAppSelector } from "src/app/store";

type Section = "components";

const getTranslations = (
  locale: string,
  section: string,
  file: string
): { [key: string]: string } => {
  const translations: TranslationMap =
    require(`../locales/${section}/${file}`).default;

  return Object.fromEntries(
    Object.entries(translations).map(([key, value]) => [
      key,
      value[locale as Locale] || "",
    ])
  );
};

export const useTranslation = (section: Section, file: string) => {
  const [translations, setTranslations] = useState<{ [key: string]: string }>(
    {}
  );
  const { locale } = useAppSelector((s) => s.app);

  useEffect(() => {
    setTranslations(getTranslations(locale, section, file));
  }, [locale, section, file]);

  const t = (key: string): string => translations[key] || "";

  return { t, locale };
};
