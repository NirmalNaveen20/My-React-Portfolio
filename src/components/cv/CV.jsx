import React from 'react'
import './cv.css'
import CV from '../../assets/MY-CV.jpg'

const Cv = () => {
  return (
    <section id='cv'>
      <h5>Get To Know</h5>
      <h2>My Resume</h2>
      <div className="container cv__content">
        <div className="cv-about__me">
          <div className="cv-about__me-image">
            <img src={CV} alt="My CV" />
          </div>
        </div>
       </div> 
    </section>
  )
}

export default Cv