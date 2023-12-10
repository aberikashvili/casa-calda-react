import React, { useState } from 'react';
import './WTSWeb.scss'; 

const WTSWeb = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(${-currentSlide * 33.33}%)` }}
        >
          {sliders.map((slider) => (
            <div key={slider.id} className="slider-item">
              <p>{slider.About}</p>
              <div className="Person">
                <img src={slider.src} alt={slider.name} />
                <div className="Pinfo">
                  <h3>{slider.name}</h3>
                  <p>{slider.Company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bullets">
        {sliders.map((slider, index) => (
          <span
            key={index}
            className={`bullet ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WTSWeb;