export type Locale = "zh" | "en";

export function homePath(locale: Locale) {
  return locale === "zh" ? "/" : "/en/";
}

export function careerPath(locale: Locale, slug: string) {
  return locale === "zh" ? `/career/${slug}/` : `/en/career/${slug}/`;
}

export function resumePath(locale: Locale) {
  return locale === "zh" ? "/resume/" : "/en/resume/";
}

export function languageSwitchPath(currentLocale: Locale, slug?: string) {
  const nextLocale = currentLocale === "zh" ? "en" : "zh";
  return slug ? careerPath(nextLocale, slug) : homePath(nextLocale);
}
