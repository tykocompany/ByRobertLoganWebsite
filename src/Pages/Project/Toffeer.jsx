import React, { useEffect } from 'react'
import './Project.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Toffeer1 from '../../assets/Toffeer1.jpg'
import Toffeer2 from '../../assets/Toffeer2.jpg'
import Toffeer3 from '../../assets/Toffeer3.jpg'
import Toffeer4 from '../../assets/Toffeer4.jpg'
import Toffeer5 from '../../assets/Toffeer5.jpg'
import Toffeer6 from '../../assets/Toffeer6.jpg'
import Toffeer7 from '../../assets/Toffeer7.jpg'
import Toffeer8 from '../../assets/Toffeer8.jpg'
import Toffeer9 from '../../assets/Toffeer9.jpg'
import Toffeer10 from '../../assets/Toffeer10.jpg'
import Toffeer11 from '../../assets/Toffeer11.jpg'
import Toffeer12 from '../../assets/Toffeer12.jpg'
import Toffeer13 from '../../assets/Toffeer13.jpg'
import Toffeer14 from '../../assets/Toffeer14.jpg'
import Toffeer15 from '../../assets/Toffeer15.jpg'
import Toffeer16 from '../../assets/Toffeer16.jpg'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Toffeer = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.toffeer");
  }, []);

  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>Toffeer</h2>
                <h4>2023</h4>
          </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer1} effect="blur" decoding='async'/>
                </div>

                <div className='proj-content'>
                    <p>{i18n.t("project.toffeer1")}</p>
                    <p>{i18n.t("project.toffeer2")}</p>
                    <p>{i18n.t("project.toffeer3")}</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer2} effect="blur" decoding='async'/>
                </div>

                    <p>{i18n.t("project.toffeer4")}</p>
                    <p>{i18n.t("project.toffeer5")}</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer3} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer4} effect="blur" decoding='async'/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer5} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer6} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer7} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer8} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer9} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer10} effect="blur" decoding='async'/>
                </div>

                <p>{i18n.t("project.toffeer6")}</p>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer11} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer12} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer13} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer14} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer15} effect="blur" decoding='async'/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Toffeer16} effect="blur" decoding='async'/>
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

export default Toffeer