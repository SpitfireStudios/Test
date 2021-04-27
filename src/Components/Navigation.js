

import React, {Component} from 'react';
import { navItems } from "./navItems";
import './Navigation.css';
import logo from './logo.png';
import Dropdown from './Dropdown'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const currentLanguageCode = cookies.get('i18next') || 'en'

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

class Navigation extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render () {

        return(

        <nav className="Navigation">
          
            <Link to="/" style={{color:"white", textDecoration:"none" }}><div className="logo" href="./"> leaf
            <img src={logo} /> 
            </div>
            </Link>
            
            <div className="menuIcon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'navDropdown active' : 'navDropdown'}>

            {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <a
                    href="#"
                    className={classNames('navLinksLanguage', {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code)
                    }}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                      style={{
                        opacity: currentLanguageCode === code ? 0.5 : 1,
                      }}
                    ></span>
                    {name}
                  </a>
                </li>
              ))}

                {navItems.map((item, index) => {
                    return (

                        <li key = {index}> 

                            <a className={item.cName} href={item.url} to={item.url}>
                            {item.title}

                            </a>

                        </li>
                    )
                })}

            </ul>

            <Dropdown>Sign Up</Dropdown>

        </nav>

        )
        
    }

}


export default Navigation;