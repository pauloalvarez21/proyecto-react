import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language } from './translations';

interface LanguageState {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: 'es',
            setLanguage: (language) => set({ language }),
            toggleLanguage: () =>
                set((state) => ({
                    language: state.language === 'es' ? 'en' : 'es',
                })),
        }),
        {
            name: 'language-storage',
        }
    )
);
