import './WTSAboutUs.scss'
import WTSWeb from '../WTSWeb/WTSWeb'

import { useState } from 'react';

export default function WTSAboutUs(){
    const [currentSlider, setCurrentSlider] = useState(0);

    const sliders = [
        {
          id:0,
          About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
          src: 'https://people.com/thmb/bZjgcTPaLzdOf_RLjN0beSg5JR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(677x919:679x921)/al-pacino-042423-2000-d6fdcc99931f4a32aec8aca88b80cd40.jpg',
          name: 'Al Pacino',
          Company: 'Does not matter'
        },
        {
            id:1,
            About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
            src: 'https://faroutmagazine.co.uk/static/uploads/1/2021/06/Marlon-Brando-in-The-Men.jpg',
            name: 'Marlon Brando',
            Company: 'Does matter'
          },
          {
            id:2,
            About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
            src: 'https://faroutmagazine.co.uk/static/uploads/1/2021/06/Marlon-Brando-in-The-Men.jpg',
            name: 'Marlon Brando',
            Company: 'Does matter'
          },
          {
            id:3,
            About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
            src: 'https://faroutmagazine.co.uk/static/uploads/1/2021/06/Marlon-Brando-in-The-Men.jpg',
            name: 'Marlon Brando',
            Company: 'Does matter'
          },
          {
            id:4,
            About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
            src: 'https://faroutmagazine.co.uk/static/uploads/1/2021/06/Marlon-Brando-in-The-Men.jpg',
            name: 'Marlon Brando',
            Company: 'Does matter'
          },
          {
            id:5,
            About: 'შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს',
            src: 'https://faroutmagazine.co.uk/static/uploads/1/2021/06/Marlon-Brando-in-The-Men.jpg',
            name: 'Marlon Brando',
            Company: 'Does matter'
          },
    ]

    const handleBulletClick = (index) => {
        setCurrentSlider(index);
    };

    return(
        <div className="WTSAboutUsB">
            <h2>რას ამბობენ ჩვენზე ?</h2>
            <div className="GrayB">
                <p>{sliders[currentSlider].About}</p>
                <div className='WTSside'>
                    <img src={sliders[currentSlider].src} alt="person img" />
                    <div className="WTSinfo">
                        <p className="blueN">{sliders[currentSlider].name}</p>
                        <p>{sliders[currentSlider].Company}</p>
                    </div>
                </div>
            </div>
            <div className="WebWTS">
              <WTSWeb sliders={sliders} />
            </div>
            <div className="bullets Mobile">
                {sliders.map((_, index) => (
                <span
                    key={index}
                    className={index === currentSlider ? 'active' : ''}
                    onClick={() => handleBulletClick(index)}
                ></span>
                ))}
            </div>
        </div>
    )
}