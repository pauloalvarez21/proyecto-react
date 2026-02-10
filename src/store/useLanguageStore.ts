import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Language } from "../translations/translations";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: "es",
      setLanguage: (language) => set({ language }),
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "es" ? "en" : "es" })),
    }),
    {
      name: "language-storage",
    },
  ),
);
