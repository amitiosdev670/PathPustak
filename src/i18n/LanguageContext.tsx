import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { Lang, LocaleText } from '@/content/types';
import { t } from '@/i18n/strings';

const STORAGE_KEY = 'bhaktipath.lang';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tx: (text: LocaleText) => string;
  s: (key: Parameters<typeof t>[0]) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function deviceLang(): Lang {
  const code = getLocales()[0]?.languageCode?.toLowerCase();
  return code === 'hi' || code === 'mr' || code === 'ne' ? 'hi' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('hi');

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored === 'hi' || stored === 'en') {
        setLangState(stored);
        return;
      }
      setLangState(deviceLang());
    });
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang: (next) => {
        setLangState(next);
        void AsyncStorage.setItem(STORAGE_KEY, next);
      },
      tx: (text) => text[lang],
      s: (key) => t(key, lang),
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
