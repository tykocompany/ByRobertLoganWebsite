import React from 'react'
import './Project.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Carisse1,Carisse2,Carisse3,Carisse4,Carisse5,Carisse6,Carisse7} from '../../assets/Index'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const Carisse = () => {
  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>Carisse</h2>
                <h4>2022</h4>
          </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse1} effect="blur"/>
                </div>

                <div className='proj-content'>
                    <p>Toffeer values celebrating special moments and building sweet memories. Each piece of chocolate is meticulously prepared to capture the richest and most authentic flavors, providing a touch of luxury to those who taste it.</p>
                    <p>Our overriding goal was to create a visual identity that captured the true essence of the brand and the authentic taste of chocolate. From the logo to the selection of colors and graphic elements, every detail has been carefully planned to reflect the elegance, authenticity and tradition that Toffeer stands for.</p>
                    <p>We are excited to share this project.</p>

                    <div className='proj-img'>
                    <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse2} effect="blur"/>
                </div>

                    <p>Regarding colors, the combination of orange and brown gives a vibrant and cheerful energy. The warm tone of beige provides comfort. Caramel and brown evoke chocolate itself and awaken delicious memories.</p>
                    <p>The chromatic chord is a tangible reflection of Toffeer. It creates a visual symphony that resonates in the sensory experiences we offer, establishing an emotional and memorable connection with everyone who encounters our brand.</p>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse3} effect="blur"/>
                </div>
                
                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse4} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse5} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse6} effect="blur"/>
                </div>

                <div className='proj-img'>
                <LazyLoadImage className='single-image' alt="Toffer 1" src={Carisse7} effect="blur"/>
                </div>
                
                </div>

                <div className='letsgo'>
              <h1>Are you ready?</h1>
              <h3>Fill out a short form so I can get in touch with you to get your project started. This way I can understand better about your company and the services you need.</h3>
              <Link to='/enquire'><button class="sbutton"><p class="stext">Let's go</p><span class="sbg"></span></button></Link>
          </div>

            <div className='goto'>
                <Link to='/'>Go to homepage ▸</Link>
            </div>

            </div>
        <Footer/>
    </section>
  )
}

export default Carisse