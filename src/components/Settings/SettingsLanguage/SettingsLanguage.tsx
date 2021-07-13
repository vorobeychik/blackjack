import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage, Languages, selectLanguage} from '../../../redux/languageSlice';

export function SettingsLanguage() {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const changeLangHandler = useCallback(() => {
    const newLanguage = language === Languages.Ru ? Languages.EN : Languages.Ru;
    dispatch(changeLanguage(newLanguage));
  }, [language]);

  return (
    <div>
      <button onClick={changeLangHandler}>{language}</button>
    </div>
  );
}
