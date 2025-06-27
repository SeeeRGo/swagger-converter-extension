import { translations } from '../utils/translations'
import { useLanguage } from '../contexts/language-context'
import type { TranslationKey } from '../utils/translations'

export function useTranslations() {
  const { language } = useLanguage()
  
  const t = (key: TranslationKey) => {
    return translations[language][key]
  }

  return { t }
}

