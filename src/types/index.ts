export type Locale = "en" | "fr";

export type Theme = "light" | "dark";

export interface TranslationMap {
  [key: string]: Record<Locale, string>;
}

export type WithChildren = {
  children: React.ReactNode;
};
