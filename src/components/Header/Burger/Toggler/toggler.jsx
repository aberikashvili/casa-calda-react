import "./toggler.scss"

import React, { useState } from 'react';

export default function Toggler() {
    const [language, setLanguage] = useState('GEO');

    const toggleLanguage = () => {
      setLanguage(language === 'GEO' ? 'ENG' : 'GEO');
    };
  
    return (
      <div className="toggle-button">
        <button onClick={toggleLanguage} className={`language-button ${language}`}>
          <div className="option">GEO</div>
          <div className="option">ENG</div>
        </button>
      </div>
    );
};

