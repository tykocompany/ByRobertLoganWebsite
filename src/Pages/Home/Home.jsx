import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Home.css'
import ProfileLogan from '../../assets/ProfileLogan.png'
import { Link } from 'react-router-dom'
import ThumbToffeer from '../../assets/ThumbToffeer.jpg'
import LogoBever from '../../assets/LogoBever.svg'
import LogoBlooring from '../../assets/LogoBlooring.svg'
import LogoCarisse from '../../assets/LogoCarisse.svg'
import LogoCeogic from '../../assets/LogoCeogic.svg'
import LogoCosta from '../../assets/LogoCosta.svg'
import LogoGynflex from '../../assets/LogoGynflex.svg'
import LogoReal from '../../assets/LogoReal.svg'
import LogoRise from '../../assets/LogoRise.svg'
import LogoToffeer from '../../assets/LogoToffeer.svg'
import LogoTyko from '../../assets/LogoTyko.svg'
import LogoVcookies from '../../assets/LogoVcookies.svg'
import LogoVoice from '../../assets/LogoVoice.svg'
import LogoZero from '../../assets/LogoZero.svg'
import BlooringThumb from '../../assets/BlooringThumb.png'
import CarisseThumb from '../../assets/CarisseThumb.png'
import CeogicThumb from '../../assets/CeogicThumb.png'
import CostaThumb from '../../assets/CostaThumb.png'
import RiseThumb from '../../assets/RiseThumb.png'
import ToffeerThumb from '../../assets/ToffeerThumb.png'
import ThumbToffeerPlace from '../../assets/ThumbToffeer.jpg'
import TykoThumb from '../../assets/TykoThumb.png'
import VitoriaThumb from '../../assets/VitoriaThumb.jpg'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { i18n } from '../../Translate/i18n'

const Home = () => {
  
  
  useEffect(() => {
    document.title = i18n.t("tab.home");
  }, []);

  return (
    <section>
      <Navbar/>

      <div className='wrapper'>

       <div className='header'>
        <div className='profile'>
          <div className='profile-picture'>
          <LazyLoadImage className='photo' alt="Toffer 1" src={ProfileLogan} effect="blur"/>
          </div>
          <div className='profile-title'>
          <h1>{i18n.t("titles.myName")}</h1>
          <h3>Brand Designer</h3>
          </div>
        </div>
        <h3>{i18n.t("messages.description")}</h3>
        <div className='profile-link'>
        <h4>{i18n.t("messages.seehere")}</h4>
        <a href='https://instagram.com/byrobertlogan' target='_blank'><h4>@byrobertlogan</h4></a>
        </div>

        <div className='companies'>

          <div className='featured'>
            <h3 className='featuredby'>{i18n.t("titles.featuredLogo")}</h3>
          </div>

          <div className='logo-slide'>
              <img src={LogoBever} className='logo-company'></img>
              <img src={LogoBlooring} className='logo-company'></img>
              <img src={LogoCarisse} className='logo-company'></img>
              <img src={LogoCeogic} className='logo-company'></img>
              <img src={LogoCosta} className='logo-company'></img>
              <img src={LogoGynflex} className='logo-company'></img>
              <img src={LogoReal} className='logo-company'></img>
              <img src={LogoRise} className='logo-company'></img>
              <img src={LogoToffeer} className='logo-company'></img>
              <img src={LogoTyko} className='logo-company'></img>
              <img src={LogoVcookies} className='logo-company'></img>
              <img src={LogoVoice} className='logo-company'></img>
              <img src={LogoZero} className='logo-company'></img>
          </div>

          <div className='logo-slide'>
              <img src={LogoBever} className='logo-company'></img>
              <img src={LogoBlooring} className='logo-company'></img>
              <img src={LogoCarisse} className='logo-company'></img>
              <img src={LogoCeogic} className='logo-company'></img>
              <img src={LogoCosta} className='logo-company'></img>
              <img src={LogoGynflex} className='logo-company'></img>
              <img src={LogoReal} className='logo-company'></img>
              <img src={LogoRise} className='logo-company'></img>
              <img src={LogoToffeer} className='logo-company'></img>
              <img src={LogoTyko} className='logo-company'></img>
              <img src={LogoVcookies} className='logo-company'></img>
              <img src={LogoVoice} className='logo-company'></img>
              <img src={LogoZero} className='logo-company'></img>
          </div>

        </div>


       </div>

       <div className='projects'>
          <div className='projects-header'>
            <h3>{i18n.t("titles.featuredProj")}</h3>
            <Link to='/projects'><h3>{i18n.t("titles.allproj")}</h3></Link>
          </div>
          <div className='projects-container'>
              <Link to='/toffeer'>
                <div className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={ToffeerThumb} effect="blur" decoding='async'/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>Toffeer</h3>
                    <h4>{i18n.t("miniproj.toffeer")}</h4>
                  </div>
                  </div>
              </Link>

              <Link to='/soon'>
                <div className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Preview" src={VitoriaThumb} effect="blur" decoding='async'/>
                  </div>
                  <p className='project-tag'>{i18n.t("miniproj.soon")}</p>
                  <div className='project-info'>
                    <h3>Vitória's</h3>
                    <h4>{i18n.t("miniproj.vitoria")}</h4>
                  </div>
                  </div>
              </Link>
              
              <Link to='/riseup' className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={RiseThumb} effect="blur" decoding='async'/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>RiseUp</h3>
                    <h4>{i18n.t("miniproj.riseup")}</h4>
                  </div>
              </Link>
              
              
          </div>

          <div className='projects-container'>
              <Link to='/blooring'>
                <div className='project'>
                  <div className='project-img'>
                  <LazyLoadImage className='project-image' alt="Toffer 1" src={BlooringThumb} effect="blur"/>
                  </div>
                  <p className='project-tag'>2023</p>
                  <div className='project-info'>
                    <h3>Blooring Inc</h3>
                    <h4>{i18n.t("miniproj.blooring")}</h4>
                  </div>
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

        </div>

          <div className='process'>
            <div className='process-header'>
              <h2>{i18n.t("titles.howWorks")}</h2>
              <h1>{i18n.t("titles.brandCreation")}</h1>
            </div>

            <div className='process-container'>
                <div className='process-info'>
                  <h3>{i18n.t("titles.form")}</h3>
                  <h4>{i18n.t("messages.form")}</h4>
                </div>
                <div className='process-info'>
                  <h3>{i18n.t("titles.proposal")}</h3>
                  <h4>{i18n.t("messages.proposal")}</h4>
                </div>
                <div className='process-info'>
                  <h3>{i18n.t("titles.search")}</h3>
                  <h4>{i18n.t("messages.search")}</h4>
                </div>
                <div className='process-info'>
                  <h3>{i18n.t("titles.strategy")}</h3>
                  <h4>{i18n.t("messages.strategy")}</h4>
                </div>
                <div className='process-info'>
                  <h3>{i18n.t("titles.design")}</h3>
                  <h4>{i18n.t("messages.design")}</h4>
                </div>
                <div className='process-info'>
                  <h3>{i18n.t("titles.guidelines")}</h3>
                  <h4>{i18n.t("messages.guidelines")}</h4>
                </div>
            </div>
          </div>

          <div className='benefits'>
              <div className='benefits-header'>
                <h2>{i18n.t("titles.benefits")}</h2>
                <h1>{i18n.t("titles.brandid")}</h1>
              </div>

              <div className='benefits-container'>
                    <div className='benefit'>
                      <h3>{i18n.t("titles.recognition")}</h3>
                      <h4>{i18n.t("messages.recognition")}</h4>
                    </div>
                    <div className='benefit'>
                      <h3>{i18n.t("titles.reliability")}</h3>
                      <h4>{i18n.t("messages.reliability")}</h4>
                    </div>
                    <div className='benefit'>
                      <h3>{i18n.t("titles.idcreation")}</h3>
                      <h4>{i18n.t("messages.idcreation")}</h4>
                    </div>
                    <div className='benefit'>
                      <h3>{i18n.t("titles.communication")}</h3>
                      <h4>{i18n.t("messages.communication")}</h4>
                    </div>
              </div>
          </div>

          <div className='feedbacks'>

                <div className='feedbacks-header'>
                  <h2>{i18n.t("titles.checkout")}</h2>
                  <h1>{i18n.t("titles.feedbacks")}</h1>
                </div>
                <div className='all-feedbacks'>
                <div className='feedback-slide'>
                <div className='feedback'>
                    <h3>Petpeth</h3>
                    <h4>{i18n.t("feedback.petpeth")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Ceogic</h3>
                    <h4>{i18n.t("feedback.ceogic")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Vitória</h3>
                    <h4>{i18n.t("feedback.vcookies")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Bever</h3>
                    <h4>{i18n.t("feedback.bever")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Blooring Inc</h3>
                    <h4>{i18n.t("feedback.blooring")}</h4>
                </div>
                
                </div>
                <div className='feedback-slide'>
                <div className='feedback'>
                    <h3>Petpeth</h3>
                    <h4>{i18n.t("feedback.petpeth")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Ceogic</h3>
                    <h4>{i18n.t("feedback.ceogic")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Vitória</h3>
                    <h4>{i18n.t("feedback.vcookies")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Bever</h3>
                    <h4>{i18n.t("feedback.bever")}</h4>
                </div>
                <div className='feedback'>
                    <h3>Blooring Inc</h3>
                    <h4>{i18n.t("feedback.blooring")}</h4>
                </div>
                
                </div>
                </div>
          </div>

          <div className='letsgo'>
              <h1>{i18n.t("titles.areuready")}</h1>
              <h3>{i18n.t("messages.areuready")}</h3>
              <Link to='/enquire'><button class="sbutton"><p class="stext">{i18n.t("buttons.enquireFooter")}</p><span class="sbg"></span></button></Link>
          </div>


      </div>
      <Footer/>
    </section>
  )
}

export default Home