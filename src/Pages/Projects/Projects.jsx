import React, { useEffect } from 'react'
import './Projects.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ThumbToffeer from '../../assets/ThumbToffeer.jpg'
import BlooringThumb from '../../assets/BlooringThumb.png'
import CarisseThumb from '../../assets/CarisseThumb.png'
import CeogicThumb from '../../assets/CeogicThumb.png'
import CostaThumb from '../../assets/CostaThumb.png'
import RiseThumb from '../../assets/RiseThumb.png'
import ToffeerThumb from '../../assets/ToffeerThumb.png'
import TykoThumb from '../../assets/TykoThumb.png'
import VitoriaThumb from '../../assets/VitoriaThumb.jpg'
import meta from '../../assets/meta.png'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Projects = () => {

  
    
  useEffect(() => {
    document.title = i18n.t("tab.projects");
  }, []);

  return (
    <section>
      <Navbar />

      <div className='wrapper'>

          <div className='project-page-header'>
                <h2>{i18n.t("miniproj.title")}</h2>
                <h4>{i18n.t("miniproj.desc")}</h4>
          </div>

          <div className='projects-container'>
              <Link to='/toffeer' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={ToffeerThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>Toffeer</h3>
                    <h4>{i18n.t("miniproj.toffeer")}</h4>
                  </div>
              </Link>

              <Link to='/vitoria' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={VitoriaThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>Vitória's</h3>
                    <h4>{i18n.t("miniproj.vitoria")}</h4>
                  </div>
              </Link>
              
              <Link to='/riseup' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={RiseThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>RiseUp</h3>
                    <h4>{i18n.t("miniproj.riseup")}</h4>
                  </div>
              </Link>
              
              
          </div>

          <div className='projects-container'>
              <Link to='/blooring' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={BlooringThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>Blooring</h3>
                    <h4>{i18n.t("miniproj.blooring")}</h4>
                  </div>
              </Link>

              <Link to='/soon' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={CostaThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>{i18n.t("miniproj.soon")}</p>
                  <div className='project-info'>
                    <h3>Costa</h3>
                    <h4>{i18n.t("miniproj.costa")}</h4>
                  </div>
              </Link>

              <Link to='/soon' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={TykoThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>{i18n.t("miniproj.soon")}</p>
                  <div className='project-info'>
                    <h3>TYKO®</h3>
                    <h4>{i18n.t("miniproj.tyko")}</h4>
                  </div>
              </Link>
          </div>

          <div className='projects-container'>
              <Link to='/soon' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={CarisseThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>{i18n.t("miniproj.soon")}</p>
                  <div className='project-info'>
                    <h3>Carisse</h3>
                    <h4>{i18n.t("miniproj.carisse")}</h4>
                  </div>
              </Link>

              <Link to='/soon' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={CeogicThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>{i18n.t("miniproj.soon")}</p>
                  <div className='project-info'>
                    <h3>Ceogic Inc.</h3>
                    <h4>{i18n.t("miniproj.ceogic")}</h4>
                  </div>
              </Link>

              
          </div>

      </div>

      <Footer/>
    </section>
  )
}

export default Projects