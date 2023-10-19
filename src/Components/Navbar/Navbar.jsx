import React, { useEffect, useState } from 'react'
import './Navbar.css'
import LogoLogan from '../../assets/LogoLogan.png'
import { Link } from 'react-router-dom'
import { i18n } from '../../Translate/i18n'

const Navbar = () => {


  const [isActive, setIsActive] = useState(false);

  return (
      <section>
        <div className='wrapper'>
            <div className='nav'>
              <div className='nav-links'>
                <Link to='/'><div className='nav-logo'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.22 331.7" width="20px" height="auto" fill='white'><defs><style></style></defs><g id="Camada_2" data-name="Camada 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M157.84,74q13.53,12.38,13.55,31.46a127.44,127.44,0,0,1-2.68,27.45H240a166.71,166.71,0,0,0,4.7-41.18q0-39.15-26.78-64.92Q191.12,0,151,0q-28.8,0-49,14.05T72,54.21V6.69H0v325H72V115.8Q72,91,86,76.31t37.49-14.72Q144.25,61.59,157.84,74Z"/><path class="cls-1" d="M204,201.76c-25.58,13.67-66.92,21.77-99.25,30.7,66.17,18.27,81,33.08,99.25,99.24,18.27-66.16,33.08-81,99.24-99.24C270.89,223.53,229.55,215.43,204,201.76Z"/><path class="cls-1" d="M204,133.22c-36.26,33.83-26.77,54.23,0,68.54C230.74,187.45,240.23,167.05,204,133.22Z"/></g></g></svg>
                </div></Link>
                <div className='nav-pages'>
                  <Link to='/'>
                  <ul>
                    <li>{i18n.t("navbar.home")}</li>
                    </ul></Link>
                    <Link to='/projects'>
                  <ul>
                    <li>{i18n.t("navbar.projects")}</li>
                    </ul></Link>
                    <Link to='/about'>
                  <ul>
                    <li>{i18n.t("navbar.about")}</li>
                    </ul></Link>
                    <Link to='/enquire'>
                  <ul>
                    <li className='enquire-link'>{i18n.t("navbar.enquire")}</li>
                    </ul></Link>
                </div>
              </div>
              <div className='nav-socials'>
                <div className='nav-social'>
                    <li>
                      <a href='https://instagram.com/byrobertlogan' target="_blank" className='social'>
                      <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z" stroke="#fff" stroke-width="1.5"></path><path d="M17.5 6.51l.01-.011" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </a>
                    </li>
                </div>
                <div className='nav-social'>
                    <li>
                      <a href='https://www.behance.net/byrobertlogan' target="_blank" className='social'>
                      <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.099 11.826c2.535 0 2.535 4.174 0 4.174H6v-4.174m3.099 0H6m3.099 0c2.535 0 2.535-3.826 0-3.826H6v3.826M15.5 11a2.5 2.5 0 00-2.5 2.5h5a2.5 2.5 0 00-2.5-2.5zM13 13.5a2.5 2.5 0 002.5 2.5c.928 0 1.49-.322 1.813-.62M17 8.5h-3" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </a>
                    </li>
                </div>
                <div className='nav-social'>
                    <li>
                      <a href='https://twitter.com/byrobertlogan' target="_blank" className='social'>
                      <svg width="19px" height="19px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="23" height="23" rx="8" fill="transparent" stroke="white" stroke-width="2"></rect><g transform="translate(2.5, 2.5)"><path d="M15.744 -0.25h3.308l-7.227 8.26 8.502 11.24H13.67l-5.214-6.817L2.49 19.75H0.18l7.73-8.835L0.254 -0.25h6.826l4.713 6.231zm-1.161 17.52h1.833L5.084 1.876H3.117z" fill="white"></path></g></svg>
                      </a>
                    </li>
                </div>
              </div>

              <div onClick={() => setIsActive(true)} className='menu-icon'>
          <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M3 5h18M3 12h18M3 19h18" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>

            </div>

            <div className={`mobile-menu-conteiner ${isActive ? "active" : "" }`}>
            <div onClick={() => setIsActive(false)} className='close-icon'>  
            <svg width="45px" height="45px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>

            <ul className='menu-items'>
            <li>
              <Link to='/'>{i18n.t("navbar.home")}</Link>
            </li>

            <li>
              <Link to='/projects'>{i18n.t("navbar.projects")}</Link>
            </li>
            <li>
              <Link to='/about'>{i18n.t("navbar.about")}</Link>
            </li>
            <li>
              <Link to='/enquire' className='enquire-link'>{i18n.t("navbar.enquire")}</Link>
            </li>
            </ul>
            

        </div>

        </div>
      </section>
  )
}

export default Navbar