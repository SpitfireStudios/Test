

import React from "react";
import Navigation from "./Components/Navigation";
import { useTranslation } from 'react-i18next';
import './App.css';
import cookies from 'js-cookie';
import Contact from './Contact';
import {Route, Link} from 'react-router-dom';
import Home from './Home';

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

function App() {


  return(
    <div className="App">

      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/" component={Home} />

    </div>
    );
}

export default App;
