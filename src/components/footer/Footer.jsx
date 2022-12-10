import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>My Logo</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><GrFacebook /></a>
        <a href="https://github.com"><BsGithub /></a>
        <a href="https://linkdin.com"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&Copy; Nirmal Naveen. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer