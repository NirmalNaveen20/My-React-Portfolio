import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Ganga Imesha',
    review: 'From the start of my web project, through to completion, Nirmal supported me and exceeded our expectations in every way. He is reliable, professional and easy to work with'
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
              <h5 className='client__name'> {name} </h5>
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