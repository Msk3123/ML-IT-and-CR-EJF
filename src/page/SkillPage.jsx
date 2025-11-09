import React, { useState, useMemo } from "react";
import "../style/SkillPage.css";
import { SKILL_DATA } from "../data/SkilsData";

// Дані навичок для двох категорій
export default function SkillPage() {
  // Поточна активна категорія (CR або IT)
  const [activeCategory, setActiveCategory] = useState("CR");
  // Поточна вибрана навичка всередині категорії
  const [activeSkill, setActiveSkill] = useState(null);

  // Масив навичок для відображення
  const skillsForCategory = useMemo(() => SKILL_DATA[activeCategory], [activeCategory]);

  // Рівномірний розподіл кутів для орбіти
  const orbitItems = useMemo(() => {
    const total = skillsForCategory.length;
    // Старт з верхньої точки (-90deg) щоб перша навичка була зверху
    return skillsForCategory.map((skill, index) => {
      const angle = (index / total) * 360 - 90; // градуси
      return { ...skill, angle };
    });
  }, [skillsForCategory]);

  // Скинути вибір при зміні категорії
  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    setActiveSkill(null);
  };

  return (
    <div className="skills-section fade-in">
      {/* Заголовок з перемикачами категорій */}
      <header className="skills-header">
        <h2>SKILLs</h2>
        <div className="category-switch">
          <button
            className={activeCategory === "CR" ? "active" : ""}
            onClick={() => handleSelectCategory("CR")}
          >
            CR
          </button>
          <button
            className={activeCategory === "IT" ? "active" : ""}
            onClick={() => handleSelectCategory("IT")}
          >
            IT
          </button>
        </div>
      </header>

      {/* Основний блок орбіти + панель опису */}
      <div className="skill-orbit-wrapper">
        {/* Панель деталей навички */}
        <div className={"skill-details " + (activeSkill ? "visible" : "")}>
          <h3>{activeSkill ? activeSkill.name : "Обери навичку"}</h3>
          <p>{activeSkill ? activeSkill.desc : "Натисни на будь-яку навичку, щоб побачити її опис."}</p>
        </div>

        {/* Ротатор: обертає лінії та вузли */}
        <div className="skill-rotator">
          {/* Лінії від центру до вузлів */}
          {orbitItems.map(item => (
            <div
              key={"line-" + item.id}
              className="skill-line"
              style={{ "--angle": item.angle }}
            />
          ))}

          {/* Центральне ядро */}
          <div className="skill-core">{activeCategory}</div>

          {/* Вузли навичок */}
          {orbitItems.map(item => (
            <div
              key={item.id}
              className={"skill-item " + (activeSkill?.id === item.id ? "active" : "")}
              style={{ "--angle": item.angle }}
              onClick={() => setActiveSkill(item)}
            >
              <span className="skill-label">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

