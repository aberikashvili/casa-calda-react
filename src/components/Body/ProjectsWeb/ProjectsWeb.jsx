import React, { useState } from 'react';

import Left from '../../../Imgs/Left.svg'
import Right from '../../../Imgs/Right.svg'

import './ProjectsWeb.scss'

const ProjectsWeb = ({ sliders }) => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [sliderTransformValue, setSliderTransformValue] = useState(0);

    const handleNext = () => {
        const nextSlider = (currentSlider + 1) % sliders.length;
        setCurrentSlider(nextSlider);
        updateSliderTransform(nextSlider);
    };

    const handlePrevious = () => {
        const prevSlider = (currentSlider - 1 + sliders.length) % sliders.length;
        setCurrentSlider(prevSlider);
        updateSliderTransform(prevSlider);
    };

    const updateSliderTransform = (index) => {
        const sliderWidth = 102 + 2;
        const transformValue = -index * sliderWidth;
        setSliderTransformValue(transformValue);
    };

    return(
        <div className='PWBody'>
             <div className="Oprojects">
                <h2 className='Mobile'>ჩვენი პროექტები</h2>
                <h2 className="Web">პროექტები</h2>
                <div className="Abuttons">
                    <img src={Left} alt="left arrow" className='Gblack' onClick={() => handlePrevious()}/>
                    <img src={Right} alt="right arrow Mobile" onClick={() => handleNext()}/>
                </div>
            </div> 
            <div className="slider-container">
                <div 
                className='sliderss'
                style={{ transform: `translateX(${sliderTransformValue}rem)`}}
                >
                {sliders.map((slider) =>
                    <div className='slider' key={slider.id}>
                        <img src={slider.img} alt="ქუთაისის პარლამენტის ფოტო" />
                        <div className="right">
                            <div className="StatusTitle">
                                <h4 className="status">{slider.status}</h4>
                                <h2 className="title">{slider.title}</h2>
                            </div>
                            <p className='Descrip'>
                            {slider.Descrip}
                            </p>
                            <div className="ul">
                                <h4>შესრულებული სამუშაო</h4>
                                <ul>
                                    {slider.items.map((item, index) => (
                                        <li className='SlidersLi' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <p className='SecondGray'>{slider.grayText}</p>
                            <button className='Orange'>სრული პროექტი</button>
                        </div>
                    </div>
                )}   
                </div>
            </div>
        </div>
    )
}

export default ProjectsWeb