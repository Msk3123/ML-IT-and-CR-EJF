import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
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