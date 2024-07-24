import React from 'react'
import './Header.css'
import {logo} from '../assets/index'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section>
        <div className='wrapper'>
            <div className='header'>
                <div className='text'>
                    <Link to='/'><h3>Navalz Barbearia</h3></Link>
                    <Link to='/'><h4>@navalzbarbearia</h4></Link>
                </div>

                <div className='profile'>
                    <Link to='/'><img src={logo}></img></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header