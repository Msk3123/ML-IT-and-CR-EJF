import React, { useState, useMemo } from "react";
import "../style/SkillPage.css";
import { SKILL_DATA } from "../data/dataWebSite";

export default function SkillPage({ selectedCategory }) {
    const [activeSkill, setActiveSkill] = useState(null);

    // Отримуємо навички з пропсів
    const skills = SKILL_DATA[selectedCategory];

    // Розподіляємо навички по колу
    const orbitItems = useMemo(() => {
        return skills.map((skill, index) => ({
            ...skill,
            angle: (360 / skills.length) * index,
        }));
    }, [skills]);

    // Скидання активної навички при зміні категорії
    React.useEffect(() => {
        setActiveSkill(null);
    }, [selectedCategory]);

    return (
        <div className="skills-section fade-in">
            <header className="skills-header">
                <h2>SKILLs {selectedCategory}</h2>
            </header>

            <div className="skill-orbit-wrapper">
                <div className={"skill-details " + (activeSkill ? "visible" : "")}>
                    <h3>{activeSkill ? activeSkill.name : "Обери навичку"}</h3>
                    <p>
                        {activeSkill
                            ? activeSkill.desc
                            : "Натисни на будь-яку навичку, щоб побачити її опис."}
                    </p>
                </div>

                <div className="skill-rotator">
                    {orbitItems.map((item) => (
                        <div
                            key={"line-" + item.id}
                            className="skill-line"
                            style={{ "--angle": item.angle }}
                        />
                    ))}

                    <div className="skill-core">{selectedCategory}</div>

                    {orbitItems.map((item) => (
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
