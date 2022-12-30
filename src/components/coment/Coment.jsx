import React from 'react'
import './coment.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import AVATAR1 from '../../asetss/avatar1.jpg'
import AVATAR2 from '../../asetss/avatar2.jpg'
import AVATAR3 from '../../asetss/avatar3.jpg'

const data = [
    {
      avatar: AVATAR1,
      name: "Ernest Achiever",
      review:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
    },
    {
      avatar: AVATAR2,
      name: "Ernest Achiever",
      review:
        "Lorem ipsum dolor sit amet consecteturex alias porro excepturi ad ratione aut,eveniet quidem est totam modi aperiam exercitationem inventore? Quod, animi."
    },
    {
      avatar: AVATAR3,
      name: "Ernest Achiever",
      review:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
    },
    {
      avatar: AVATAR1,
      name: "Ernest Achiever",
      review:
        "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum"
    }
  ];
  

const Coment = () => {
  return (
        <Swiper className="container testimonials__container">
        
        {data.map(({ avatar, name, review }, index) => {

          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}

        {/* <Swiper className='coment__container-cards'>
            <SwiperSlide className='coment__container-cards-card'>
                <img src={AVATAR1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
            </SwiperSlide>

            <SwiperSlide className='coment__container-cards-card'>
                <img src={AVATAR1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
            </SwiperSlide>

            <SwiperSlide className='coment__container-cards-card'>
                <img src={AVATAR1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
            </SwiperSlide>

            <SwiperSlide className='coment__container-cards-card'>
                <img src={AVATAR1} alt="" />
                <p>Lorem ipsum dolor sit amet</p>
            </SwiperSlide>
        </Swiper> */}
    </Swiper>
  )
}

export default Coment