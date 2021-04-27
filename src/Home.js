

import React from "react";
import Navigation from "./Components/Navigation";
import { useTranslation } from 'react-i18next';
import './App.css';
import cookies from 'js-cookie';
import {Route, Link} from 'react-router-dom';

const languages = [
  {
    code:'fr',
    name:'Français',
    country_code: 'fr'
  },

  {
    code:'tr',
    name:'Türkçe',
    country_code: 'tr'
  },

  {
    code:'en',
    name:'English',
    country_code: 'en'
  },
]

function Home() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  return (
    <div className="Home">

      <Navigation />

      <h1>{t('welcome_message')}</h1>
      <br></br>
      <h1>{t('about')}</h1>
      <br></br>
      <h1>{t('tagline')}</h1>

      <footer> <h2 style={{padding:14+'px'}}> {t('footer')}</h2> </footer>
    </div>
  );
}

export default Home;
