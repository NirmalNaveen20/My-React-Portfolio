import React from 'react'
import './portfolio.css'
import MERN from '../../assets/MERN.jpeg'
import ANDROID from '../../assets/Android.png'
import AI from '../../assets/AI.jpg'


const data = [
  {
    id: 1,
    image: AI,
    title: 'Alan AI News Web Application',
    github: 'https://github.com/NirmalNaveen20/Alan-AI-News-Web-Application',
    demo: 'https://ai-alan.netlify.app/'
  },
  {
    id: 2,
    image: MERN,
    title: 'Livecare Hospitals',
    github: 'https://github.com/NirmalNaveen20/Livecare-Hospital-Admin',
  },
  {
    id: 3,
    image: ANDROID,
    title: 'EatUp-FoodApp',
    github: 'https://github.com/NirmalNaveen20/EatUp-FoodApp',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio