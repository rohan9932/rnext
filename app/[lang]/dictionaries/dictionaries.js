import "server-only";

//imports and dynamically loads the dictionary for the given locale
const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export async function getDictionary(locale) {
  return dictionaries[locale]();
}
