import { useContext } from 'react';
import { LanguageContext, type LanguageContextValue } from './LanguageProvider';

export function useI18n(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useI18n muss innerhalb von <LanguageProvider> verwendet werden.');
  return ctx;
}
