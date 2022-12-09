import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel. Nisi officia laborum dolores non dolorem molestiae! Ipsa, sed ad'
  },
  {
    avatar: AVTR2,
    name: 'Engin Nora',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel. Nisi officia laborum dolores non dolorem molestiae! Ipsa, sed ad'
  },
  {
    avatar: AVTR3,
    name: 'Millie Bobby',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel. Nisi officia laborum dolores non dolorem molestiae! Ipsa, sed ad'
  },
  {
    avatar: AVTR4,
    name: 'Jatena Morgan',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vel. Nisi officia laborum dolores non dolorem molestiae! Ipsa, sed ad'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'> {name} </h5>
              <small className='client__review'> {review} </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials