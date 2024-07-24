import React, { useEffect } from 'react'
import './Project.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Rise1, Rise2, Rise3, Rise4, Rise5, Rise6, Rise7, Rise8, Rise9, Rise10, Rise11 } from '../../assets/Index'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Riseup = () => {
      
  useEffect(() => {
    document.title = i18n.t("tab.riseup");
  }, []);

  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>RiseUp</h2>
                <h4>2023</h4>
          </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise1} effect="blur"/>
                </div>

                <div className='proj-content'>
                    <p>{i18n.t("project.rise1")}</p>
                    <p>{i18n.t("project.rise2")}</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise2} effect="blur"/>
                </div>

                    <p>{i18n.t("project.rise3")}</p>
                    <p>{i18n.t("project.rise4")}</p>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise3} effect="blur"/>
                </div>

                    <p>{i18n.t("project.rise5")}</p>
                    <p>{i18n.t("project.rise6")}</p>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise4} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise5} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise6} effect="blur"/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise7} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise8} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise9} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise10} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Rise11} effect="blur"/>
                </div>
                
                </div>

                <div className='letsgo'>
              <h1>{i18n.t("enquire.areuready")}</h1>
              <h3>{i18n.t("enquire.fill")}</h3>
              <Link to='/enquire'><button class="sbutton"><p class="stext">{i18n.t("buttons.enquireFooter")}</p><span class="sbg"></span></button></Link>
          </div>

            <div className='goto'>
                <Link to='/'>{i18n.t("buttons.goto")}</Link>
            </div>

            </div>
        <Footer/>
    </section>
  )
}

export default Riseup