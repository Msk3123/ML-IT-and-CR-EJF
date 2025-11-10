import React, { useState } from 'react';
import '../style/interactivePage.css';
import { interactiveData } from '../data/interactiveData';

function InteractivePage() {
    const [selectedRole, setSelectedRole] = useState('CR');
    const [selectedTemplate, setSelectedTemplate] = useState('Shablone1');

    const renderContent =
        selectedRole === 'CR'
            ? interactiveData.CR(selectedTemplate, setSelectedTemplate)
            : interactiveData[selectedRole];

    return (
        <div className="interactive-page">
            <h1 className="interactive-page-title">Додаткове завдання</h1>
            <div className="category-switch">
                <button
                    className={` ${selectedRole === 'CR' ? 'active' : ''}`}
                    onClick={() => setSelectedRole('CR')}
                >
                    CR
                </button>
                <button
                    className={` ${selectedRole === 'IT' ? 'active' : ''}`}
                    onClick={() => setSelectedRole('IT')}
                >
                    IT
                </button>
            </div>
            <div className="role-content">
                {renderContent}
            </div>
        </div>
    );
}

export default InteractivePage;