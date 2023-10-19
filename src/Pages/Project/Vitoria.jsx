import React, { useEffect } from 'react'
import './Project.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { vitoria1, vitoria2, vitoria3, vitoria4, vitoria5, vitoria6, vitoria7, vitoria8, vitoria9, vitoria11, vitoria12, vitoria13 } from '../../assets/'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Vitoria = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.vitoria");
  }, []);

  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>Vitória's Bakery</h2>
                <h4>2023</h4>
          </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria1} effect="blur" decoding='async'/>
                </div>

                <div className='proj-content'>
                    <p>{i18n.t("project.vitoria1")}</p>
                    <p>{i18n.t("project.vitoria2")}</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria2} effect="blur" decoding='async'/>
                </div>

                    <p>{i18n.t("project.vitoria3")}</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria3} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria4} effect="blur" decoding='async'/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria5} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria6} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria7} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria8} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria9} effect="blur" decoding='async'/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria11} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria12} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={vitoria13} effect="blur" decoding='async'/>
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

export default Vitoria