import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './NotFound.css'
import { i18n } from '../../Translate/i18n'

const NotFound = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.notfound");
  }, []);

  return (
    <section>
      <Navbar/>

      <div className='wrapper'>

          <div className='notfound'>
          <h2>404</h2>
          <h3>{i18n.t("Other.pagenotfound")}</h3>

          <Link to='/'>{i18n.t("buttons.goto")}</Link>

          </div>
      </div>

      <Footer/>
    </section>
  )
}

export default NotFound