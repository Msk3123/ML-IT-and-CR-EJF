import React, { useState } from 'react';
import '../style/interactivePage.css';
import { interactiveData } from '../data/interactiveData';

function InteractivePage() {
    const [selectedRole, setSelectedRole] = useState('CR');

    return (
        <div className="interactive-page">
            <h1 className="interactive-page-title">Додаткове завдання</h1>
            <div className="interactive-content">
                <button
                    className={`interactive-button ${selectedRole === 'CR' ? 'active' : ''}`}
                    onClick={() => setSelectedRole('CR')}
                >CR</button>
                <button
                    className={`interactive-button ${selectedRole === 'IT' ? 'active' : ''}`}
                    onClick={() => setSelectedRole('IT')}
                >IT</button>
                {interactiveData[selectedRole]}
            </div>
        </div>
    );
}

export default InteractivePage;
