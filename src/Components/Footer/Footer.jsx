import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section>
      <div className='wrapper'>
        <div className='footer-section'>
        <div className='foo'>
          <h3>@byrobertlogan ✦ robert logan</h3>
        </div>
        <div className='foo-links'>
          <ul>
            <a href='https://www.instagram.com/byrobertlogan/' target='_blank'>Instagram</a>
          </ul>
          <ul>
            <a href='https://www.behance.net/byrobertlogan' target='_blank'>Behance</a>
          </ul>
          <ul>
            <a href='https://twitter.com/byrobertlogan' target='_blank'>Twitter</a>
          </ul>
          <ul>
            <a href='https://www.threads.net/@byrobertlogan' target='_blank'>Threads</a>
          </ul>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer