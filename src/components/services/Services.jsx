import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi' 

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Cloud Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AWS DevOps Support Architect</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create AWS Lambda functions in Python</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Setup and manage AWS infrastructure, as DevOps Engineer</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AWS Cloud Assignments and Projects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy your application on AWS EC2</p>
            </li>
          </ul>
        </article>

        {/* END OF CLOUD COMPUTING */}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop websites in MERN Stack <br />(MongoDB, Express, ReactJS, NodeJS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Create React App Using Material UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop a High Performance web site using React</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Develop Web based applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy Website on the cloud</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        

      </div>
    </section>
  )
}

export default Services