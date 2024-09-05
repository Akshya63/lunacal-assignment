import React, { useState } from 'react';
import '../App.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.<br/><br/>
                      I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year
                      old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>;
            case 'experiences':
                return <div>Experiences Content</div>;
            case 'recommended':
                return <div>Recommended Content</div>;
            default:
                return null;
        }
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
                    onClick={() => setActiveTab('about')}
                >
                    About Me
                </button>
                <button
                    className={`tab-button ${activeTab === 'experiences' ? 'active' : ''}`}
                    onClick={() => setActiveTab('experiences')}
                >
                    Experiences
                </button>
                <button
                    className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`}
                    onClick={() => setActiveTab('recommended')}
                >
                    Recommended
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;
