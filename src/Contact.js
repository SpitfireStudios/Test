

import React from "react";
import Navigation from "./Components/Navigation";
import { useTranslation } from 'react-i18next';
import './App.css';
import cookies from 'js-cookie'
import ContactForm from "./Components/ContactForm";

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

function Contact() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  return (
    <div className="Contact">

      <Navigation />

      <h1> {t('contact_form')} </h1>

      <ContactForm />
      
      <br></br>
      <h1>{t('contact_intro')}</h1>
      <br></br>
      <footer> <h2 style={{padding:14+'px'}}> {t('footer')}</h2> </footer>
      </div>
  );
}

export default Contact;
