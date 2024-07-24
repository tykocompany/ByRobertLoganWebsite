import React from 'react'
import Header from '../Components/Header'
import {map} from '../assets/index'
import { Link } from 'react-router-dom'

const Horarios = () => {
  return (
    <section>
      <Header/>
        <div className='wrapper'>
        <div className='agendar-header'>
            <Link to='/'><h4>Agendar ▸</h4></Link>
            <h4 className='horario-pc'>Horários de funcionamento</h4>
            <h4 className='horario-mobile'><Link to='/horario'>Horários de funcionamento</Link></h4>
          </div>

          <div className='agendar-itens'>
          <div className='agendar2'>
              <div className='box'>
                <a href='#'><h3>Combo: Cabelo e Barba</h3></a>
              </div>
              <div className='box'>
              <a href='#'><h3>Apenas Cabelo</h3></a>
              </div>
              <div className='box'>
              <a href='#'><h3>Apenas Barba</h3></a>
              </div>
              <div className='box'>
              <a href='#'><h3>Progressiva</h3></a>
              </div>
              <div className='box'>
              <a href='#'><h3>Hidratação</h3></a>
              </div>
            </div>
            <div className='horario2'>
              <div className='box2'>
                <h3>Segunda-feira: 8h às 18h</h3>
                <h3>Terça-feira: 8h às 18h</h3>
                <h3>Quarta-feira: 8h às 18h</h3>
                <h3>Quinta-feira: 8h às 18h</h3>
                <h3>Sexta-feira: 8h às 18h</h3>
                <h3>Sábado: 8h às 18h</h3>
                <h3>Domingo: 8h às 18h</h3>

                <div className='map'>
                  <h3>Aparecida de Goiânia</h3>
                  <img src={map}></img>
                </div>
              </div>
            </div>
          </div>

          <div className='social'>
              <div className='media'>
                  <div className='media-itens'>
                    <div className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#cfcfcf" viewBox="0 0 256 256"><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path></svg>
                    <p>@navalzbarbearia</p>
                    </div>
                    
                    <button className='instagram'>Seguir</button>
                  </div>
                  
              </div>

              <div className='media2'>
              <div className='media-itens'>
                    <div className='svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#cfcfcf" viewBox="0 0 256 256"><path d="M245.66,77.66l-29.9,29.9C209.72,177.58,150.67,232,80,232c-14.52,0-26.49-2.3-35.58-6.84-7.33-3.67-10.33-7.6-11.08-8.72a8,8,0,0,1,3.85-11.93c.26-.1,24.24-9.31,39.47-26.84a110.93,110.93,0,0,1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8,8,0,0,1,13.65-4.92c.35.35,33.28,33.1,73.54,43.72V88a47.87,47.87,0,0,1,14.36-34.3A46.87,46.87,0,0,1,168.1,40a48.66,48.66,0,0,1,41.47,24H240a8,8,0,0,1,5.66,13.66Z"></path></svg>
                    <p>@navalzstudio</p>
                    </div>
                    
                    <button className='instagram'>Seguir</button>
                  </div>
              </div>
          </div>

          <div className='by'>
              <h4>By <a href='https://tykocompany.com' target='_blank'>TYKO®</a></h4>
          </div>
        </div>
    </section>
  )
}

export default Horarios