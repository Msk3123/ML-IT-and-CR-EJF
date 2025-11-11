import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


import dotNET from '../assets/dot-NET-Core-600x600.png';
import js from '../assets/JavaScript-Emblem.png';
import cssImg from '../assets/logo-css-3-1536.png';
import nodeJS from '../assets/Node.js-Logo.wine.png';
import SQL from '../assets/SQL-Logo.png';
import react from '../assets/react.png';
import python from '../assets/python-logo.png';

const skills = [
  { id: 'js', label: 'JavaScript', img: js },
  { id: 'react', label: 'React', img: react },
  { id: 'nodejs', label: 'NodeJS', img: nodeJS },
  { id: 'python', label: 'Python', img: python },
  { id: 'SQL', label: 'SQL DataBase', img: SQL },
  { id: 'css', label: 'CSS', img: cssImg },
  { id: 'dotnet', label: '.NET', img: dotNET },
];

export default function SkillCarousel() {
  return (
    <div className="skill-carousel">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 25 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 }
        }}
      >
        {skills.map(s => (
          <SwiperSlide key={s.id}>
            <div className="skill-card">
              <div className="skill-card-inner">
                <img src={s.img} alt={s.label} className="skill-icon" />
              </div>
              <div className="skill-label">{s.label}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}