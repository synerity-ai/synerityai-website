import { createContext, useContext, useMemo, ReactNode } from 'react';
import en from '../locales/en.json';

type SupportedLanguage = keyof typeof translationsMap;

const translationsMap = {
  en,
};

type TranslationCatalog = typeof en;

interface TranslationContextValue {
  language: SupportedLanguage;
  t: (key: string, defaultValue?: string) => string;
}

const TranslationContext = createContext<TranslationContextValue | undefined>(undefined);

function getFromCatalog(catalog: TranslationCatalog, key: string) {
  return key.split('.').reduce<unknown>((accumulator, segment) => {
    if (accumulator && typeof accumulator === 'object' && segment in accumulator) {
      return (accumulator as Record<string, unknown>)[segment];
    }
    return undefined;
  }, catalog);
}

interface TranslationProviderProps {
  language?: SupportedLanguage;
  children: ReactNode;
}

export function TranslationProvider({ language = 'en', children }: TranslationProviderProps) {
  const resolvedLanguage: SupportedLanguage = translationsMap[language] ? language : 'en';

  const value = useMemo<TranslationContextValue>(() => {
    const catalog = translationsMap[resolvedLanguage];

    return {
      language: resolvedLanguage,
      t: (key: string, defaultValue?: string) => {
        const result = getFromCatalog(catalog, key);
        if (result === undefined || result === null) {
          return defaultValue ?? key;
        }
        if (typeof result === 'string') {
          return result;
        }
        return defaultValue ?? key;
      },
    };
  }, [resolvedLanguage]);

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
}

