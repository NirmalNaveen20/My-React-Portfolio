import React from 'react'
import './testimonials.css'
import US from '../../assets/US.png'
import NL from '../../assets/NL.png'
import BL from '../../assets/BL.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: US,
    name: '- Michael Crandall - ',
    review: 'Very communicative and helpful throughout the process. He helped me move our entire server from SlowDaddy (GoDaddy) to Amazon AWS, and made the process feel easy and seamless. Will work with him moving forward.'
  },

  {
    avatar: NL,
    name: '- Jessey Samuels - ',
    review: 'He is a great worker and provides excellent service. I highly recommend him. His attitude is one of his greatest assets.'
  },

  {
    avatar: BL,
    name: '- Christoffel Gerretsen - ',
    review: 'Work was amazing, all delivered as promised, the communication was excellent!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} />
                </div>
                
              <h5 className='client__name'><b>Fiverr</b> {name} </h5>
              <small className='client__review'> {review} </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials