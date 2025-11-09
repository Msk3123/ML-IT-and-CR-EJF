import React, { useState } from 'react';
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
    { id: 'nodejs', label: 'NodeJS', img: nodeJS }, // replace with real React logo if available
    { id: 'python', label: 'Python', img: python }, // replace with Python logo asset
    { id: 'SQL', label: 'SQL DataBase', img: SQL },
    { id: 'css', label: 'CSS', img: cssImg },
    { id: 'dotnet', label: '.NET', img: dotNET },
];

export default function SkillCarousel() {
    const [start, setStart] = useState(0);
    const visibleCount = 4;
    const maxIndex = skills.length - visibleCount;

    const next = () => setStart(s => (s >= maxIndex ? 0 : s + 1));
    const prev = () => setStart(s => (s <= 0 ? maxIndex : s - 1));

    const visible = skills.slice(start, start + visibleCount);

    return (
        <div className="skill-carousel">
            <button className="arrow-btn" onClick={prev} aria-label="prev">❮</button>
            {visible.map(s => (
                <div key={s.id} className="skill-card">
                    <div className="skill-card-inner">
                        <img src={s.img} alt={s.label} className="skill-icon" />
                    </div>
                    <div className="skill-label">{s.label}</div>
                </div>
            ))}
            <button className="arrow-btn" onClick={next} aria-label="next">❯</button>
        </div>
    );
}