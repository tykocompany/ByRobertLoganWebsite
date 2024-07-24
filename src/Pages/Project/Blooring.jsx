import React, { useEffect } from 'react'
import './Project.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import Blooring1 from '../../assets/Blooring1.jpg'
import Blooring2 from '../../assets/Blooring2.jpg'
import Blooring4 from '../../assets/Blooring4.jpg'
import Blooring5 from '../../assets/Blooring5.jpg'
import Blooring6 from '../../assets/Blooring6.jpg'
import Blooring7 from '../../assets/Blooring7.jpg'
import Blooring8 from '../../assets/Blooring8.jpg'
import Blooring9 from '../../assets/Blooring9.jpg'
import Blooring10 from '../../assets/Blooring10.jpg'
import Blooring11 from '../../assets/Blooring11.jpg'
import Blooring12 from '../../assets/Blooring12.jpg'
import Blooring13 from '../../assets/Blooring13.jpg'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Blooring = () => {
    
  useEffect(() => {
    document.title = i18n.t("tab.blooring");
  }, []);

  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>Blooring</h2>
                <h4>2023</h4>
          </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring1} effect="blur"/>
                </div>

                <div className='proj-content'>
                    <p>{i18n.t("project.blooring1")}</p>
                    <p>{i18n.t("project.blooring2")}</p>
                    <p>{i18n.t("project.blooring3")}</p>
                    
                    

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring2} effect="blur"/>
                </div>

                <p>{i18n.t("project.blooring4")}</p>
                    <p>{i18n.t("project.blooring5")}</p>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring4} effect="blur"/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring5} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring6} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring7} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring8} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring9} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring10} effect="blur"/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring11} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring12} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Blooring13} effect="blur"/>
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

export default Blooring