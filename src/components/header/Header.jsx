import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {AiFillCode} from 'react-icons/ai'
import {AiFillCloud} from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nirmal Naveen</h1>
        <h5 className="text-light"><AiFillCode className='experience__details-icon'/>Fullstack Developer</h5>
        <h5 className="text-light"><AiFillCloud className='experience__details-icon'/>Cloud Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header