import './App.css';
import { useState, useEffect } from 'react';
import ProfileSection from './page/ProfileSection';
import appLogo from './assets/Лого-ІЯК.png';
import WhyEJF from "./page/WhyEJF";
import SkillPage from "./page/SkillPage";
import InteractivePage from "./page/interactivePage";
import LastPage from "./page/lastPage";
import PossibleQA from "./page/PossibleQuestions";
import { initRevealOnScroll } from './utils/revealOnScroll';

import {
    interactiveData,
    SKILL_DATA,
    experienceContent,
    experienceGoals,
    profileMotivation,
} from "./data/dataWebSite";

function App() {
    useEffect(() => initRevealOnScroll(), []);

    const [selectedCategory, setSelectedCategory] = useState("CR");
    const [selectedTemplate, setSelectedTemplate] = useState("Shablone1");

    const content = interactiveData[selectedCategory];
    const skills = SKILL_DATA[selectedCategory];
    const experience = experienceContent[selectedCategory];
    const goals = experienceGoals[selectedCategory];
    const profileMotivationData = profileMotivation[selectedCategory];
    return (
        <div className="App">
            <header className="App-header">
                <div className="header-left">
                    <img src={appLogo} alt="Logo" className="EJF-logo" />
                </div>

                <div className="header-center">
                    <h1 className="text-shine">Motivation Letter IT and CR</h1>
                </div>

                <div className="header-right">
                    <div className="category-switch">
                        <button
                            className={`nav-btn ${selectedCategory === 'CR' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('CR')}
                        >
                            CR
                        </button>

                        <button
                            className={`nav-btn ${selectedCategory === 'IT' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('IT')}
                        >
                            IT
                        </button>
                    </div>
                </div>
            </header>

            <div className="Whyme-page">
                <ProfileSection
                    experience={experience}
                    goals={goals}
                    selectedCategory={selectedCategory}
                    profileMotivation={profileMotivationData}
                />
                <WhyEJF selectedCategory={selectedCategory} />
            </div>

            <div className="second-page">
                <SkillPage
                    skills={skills}
                    selectedCategory={selectedCategory}
                />
            </div>

            <div className="question-page">
                <InteractivePage
                    content={content}
                    selectedCategory={selectedCategory}
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                />
            </div>

            <div className="maybeqwestion-page">
                <PossibleQA selectedCategory={selectedCategory}
                />
            </div>
            
            <div className="last-page">
                <LastPage 
                    selectedCategory={selectedCategory}
                />
            </div>

            

        </div>
    );
}

export default App;
