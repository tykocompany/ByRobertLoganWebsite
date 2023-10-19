import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './About.css'
import { i18n } from '../../Translate/i18n'

const About = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.about");
  }, []);

  return (
    <section>
      <Navbar/>

      <div className='wrapper'>
          <div className='about-header'>
              <h2>{i18n.t("about.title")}</h2>
              <h4>{i18n.t("about.desc")}</h4>
          </div>

          <div className='about-content'>
              <h4>{i18n.t("about.content")}</h4>
              <h4>{i18n.t("about.content2")}</h4>
              <h4>Everything is designed.</h4>
          </div>
      </div>

      <Footer/>
    </section>
  )
}

export default About