import React from 'react'
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

const Costa = () => {
  return (
    <section>
        <Navbar/>
            <div className='wrapper'>
            <div className='project-page-header'>
                <h2>Toffeer</h2>
                <h4>2023</h4>
          </div>

                <div className='proj-img'>
                    <img src={Toffeer1} className='single-image'></img>
                </div>

                <div className='proj-content'>
                    <p>Toffeer values celebrating special moments and building sweet memories. Each piece of chocolate is meticulously prepared to capture the richest and most authentic flavors, providing a touch of luxury to those who taste it.</p>
                    <p>Our overriding goal was to create a visual identity that captured the true essence of the brand and the authentic taste of chocolate. From the logo to the selection of colors and graphic elements, every detail has been carefully planned to reflect the elegance, authenticity and tradition that Toffeer stands for.</p>
                    <p>We are excited to share this project.</p>

                    <div className='proj-img'>
                    <img src={Toffeer2} className='single-image'></img>
                </div>

                    <p>Regarding colors, the combination of orange and brown gives a vibrant and cheerful energy. The warm tone of beige provides comfort. Caramel and brown evoke chocolate itself and awaken delicious memories.</p>
                    <p>The chromatic chord is a tangible reflection of Toffeer. It creates a visual symphony that resonates in the sensory experiences we offer, establishing an emotional and memorable connection with everyone who encounters our brand.</p>

                    <div className='proj-img'>
                    <img src={Toffeer3} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer4} className='single-image'></img>
                </div>
                
                <div className='proj-img'>
                    <img src={Toffeer5} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer6} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer7} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer8} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer9} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer10} className='single-image'></img>
                </div>

                <p>As for the illustrations, the selected line evokes craftsmanship, symbolizing the tradition of chocolate. The illustrations are directly directed to the origin of chocolate, connecting with the symbolic universe already rooted in the segment.</p>
                
                <div className='proj-img'>
                    <img src={Toffeer11} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer12} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer13} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer14} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer15} className='single-image'></img>
                </div>

                <div className='proj-img'>
                    <img src={Toffeer16} className='single-image'></img>
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

export default Costa