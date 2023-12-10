import { useState } from 'react';

import Left from '../../../Imgs/Left.svg'
import Right from '../../../Imgs/Right.svg'

import './Services.scss'

export default function Services(){
    const [currentSlider, setCurrentSlider] = useState(0);
    const [sliderTransformValue, setSliderTransformValue] = useState(0);

    const sliders = [
        {
          id:0,
          title: 'სუსტი დენები',
          items: [
            'კომპიუტერია, ტელეფონია, ტელევიზია',
            'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
            'ვიდეო მეთვალყურეობა',
            'ფონური მუსიკა',
            'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
          ],
        },
        {
            id:1,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
              'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
              'ვიდეო მეთვალყურეობა',
              'ფონური მუსიკა',
              'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
            ],
          },
          {
            id:2,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
              'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
              'ვიდეო მეთვალყურეობა',
              'ფონური მუსიკა',
              'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
            ],
          },
          {
            id:3,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
              'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
              'ვიდეო მეთვალყურეობა',
              'ფონური მუსიკა',
              'სისტემების კომპიუტერული მართვა და ავტომატიზაცია (BMS)',
            ],
          },
          {
            id:4,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
              'ხანძარსაწინააღმდეგო სიგნალიზაცია, ევაკუაციის გამოცხადების სისტემები',
            ],
          },
          {
            id:5,
            title: 'ძლიერი დენები',
            items: [
              'კომპიუტერია, ტელეფონია, ტელევიზია',
            ],
          },
    ]

    const handleNext = () => {
      const nextSlider = (currentSlider + 1) % sliders.length;
      const maxVisibleSlides = 4;
      const maxHiddenSlides = sliders.length - maxVisibleSlides;
  
      if (window.innerWidth <= 700) {
          setCurrentSlider(nextSlider);
          updateSliderTransform(nextSlider);
      } else {
          if (nextSlider <= maxHiddenSlides) {
              setCurrentSlider(nextSlider);
              updateSliderTransform(nextSlider);
          }
      }
  };
      
    
    const handlePrevious = () => {
      const prevSlider = (currentSlider - 1 + sliders.length) % sliders.length;
      const maxVisibleSlides = 4;
      const maxHiddenSlides = sliders.length - maxVisibleSlides;

      if (window.innerWidth <= 700) {
          setCurrentSlider(prevSlider);
          updateSliderTransform(prevSlider);
      } else {
          if (currentSlider > 0) {
              setCurrentSlider(prevSlider);
              updateSliderTransform(prevSlider);
          }
      }
  };
    
    const updateSliderTransform = (index) => {
      const sliderWidth = 24.063 + 2;
      const visibleSlides = 4;
      const maxHiddenSlides = sliders.length - visibleSlides;
      const transformValue = index <= maxHiddenSlides ? -index * sliderWidth : -maxHiddenSlides * sliderWidth;
    
      setSliderTransformValue(transformValue);
    };

    const handleBulletClick = (index) => {
        setCurrentSlider(index);
    };

      const renderSlider = (index) => {
        return (
          <div key={index} className="slider" style={{ transform: `translateX(${sliderTransformValue}rem)` }}>
            <div className="first">
              <h3 className="SlidersTitle">{sliders[index].title}</h3>
              <ul>
                {sliders[index].items.map((item, i) => (
                  <li className="SlidersLi" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      };

    return(
        <div className='Bservices'>
                <div className="Scarousel">
                    <div className="Oservices">
                        <h2>ჩვენი სერვისები</h2>
                        <div className="Abuttons">
                            <img src={Left} alt="left arrow" className='Gblack' onClick={() => handlePrevious()}/>
                            <img src={Right} alt="right arrow" onClick={() => handleNext()}/>
                        </div>
                    </div>
                    <p className='Gtext'>ჩვენთან შეძენილი პროდუქცია მომხმარებელს სათანადო სერვისის მეშვეობით ხანგრძლივი, მრავალწლიანი პერიოდის განმავლობაში შეუქმნის ჯანსაღ და კომფორტულ გარემოს.</p>
                    <div className="slider SliderMob">
                        <div className="first">
                            <h3 className='SlidersTitle'>{sliders[currentSlider].title}</h3>
                            <ul>
                                {sliders[currentSlider].items.map((item, index) => (
                                    <li className='SlidersLi' key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bullets">
                            {sliders.map((_, index) => (
                            <span
                                key={index}
                                className={index === currentSlider ? 'active' : ''}
                                onClick={() => handleBulletClick(index)}
                            ></span>
                            ))}
                        </div>
                    </div>
                    <div className="slider-container">
                        {sliders.map((_, index) => renderSlider(index))}
                    </div>
                </div>
        </div>
    )
}