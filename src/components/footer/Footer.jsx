import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nirmal Naveen</a>

      <ul className='permalinks'>
        <li><a href="#H">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/people/Nirmal-Naveen/100011583663817/"><GrFacebook /></a>
        <a href="https://github.com/NirmalNaveen20"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/nirmal-naveen/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>©Nirmal Naveen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer