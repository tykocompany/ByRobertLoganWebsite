import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { i18n } from '../../Translate/i18n'

const Soon = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.soon");
  }, []);

  return (
    <section>
      <Navbar/>

      <div className='wrapper'>

          <div className='notfound'>
          <h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#fff0f0" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm104,0a8,8,0,0,1-8,8H152a8,8,0,0,1,0-16h24A8,8,0,0,1,184,108Zm-9.08,48c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.93-28a8,8,0,1,1,13.86-8c7.46,12.91,19.2,20,33.07,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8Z"></path></svg>
          </h2>
          <h3>{i18n.t("Other.soon")}</h3>

          <Link to='/'>{i18n.t("buttons.goto")}</Link>

          </div>
      </div>

      <Footer/>
    </section>
  )
}

export default Soon