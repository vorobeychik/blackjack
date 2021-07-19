import { useSelector } from 'react-redux';
import { languages } from '../data/language';
import { selectLanguage } from '../redux/languageSlice';

export function useTranslation() {
  const language = useSelector(selectLanguage);
  return languages[language];
}
