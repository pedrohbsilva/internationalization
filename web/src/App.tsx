import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import './global.css';

interface LanguageProps{
  id: number;
  value: string;
  name: string;
}

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('');
  const languages = [
    {id: 1, value: 'en', name: t('English')},
    {id: 2, value: 'pt', name: t('Portuguese')},    
  ]

  useEffect(() =>{
    const load = async() =>{
      const languageSelected = localStorage.getItem('language');
      if(!languageSelected) {
        localStorage.setItem('language', 'en');
        i18n.changeLanguage('en')
      }
      if(languageSelected && language.length === 0){
        localStorage.setItem('language', languageSelected);
        i18n.changeLanguage(languageSelected)
      }
      if(languageSelected !== language && language.length > 0){
        localStorage.setItem('language', language);
        i18n.changeLanguage(language)
      }
    }
    load()
  },[language, i18n])

  return (
    <div className="container">
      <h1 className="text">{t("Hello World")}</h1>
      <select 
        value={language}
        onChange={e => setLanguage(e.target.value)}
      >
        <option hidden>{t('Switch languages')}</option>
        {languages.map((item: LanguageProps)=>(
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
