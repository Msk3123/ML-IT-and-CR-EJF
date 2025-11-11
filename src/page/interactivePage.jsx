import React from 'react';
import '../style/interactivePage.css';
import { interactiveData } from '../data/dataWebSite';

function InteractivePage({ selectedCategory, selectedTemplate, setSelectedTemplate }) {
    const renderContent =
        selectedCategory === 'CR'
            ? interactiveData.CR(selectedTemplate, setSelectedTemplate)
            : interactiveData[selectedCategory];

    return (
        <div className="interactive-page">
            <h1 className="interactive-page-title">Додаткове завдання</h1>
            <div className="role-content">
                {renderContent}
            </div>
        </div>
    );
}

export default InteractivePage;
