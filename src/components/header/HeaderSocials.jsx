import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nirmal-naveen/" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/NirmalNaveen20" target="_blank"> <BsGithub /> </a>
        <a href="https://www.facebook.com/people/Nirmal-Naveen/100011583663817/" target="_blank"> <GrFacebook /> </a>
    </div>
  )
}

export default HeaderSocials