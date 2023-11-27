import './NeedHelp.scss'

import { useState } from 'react';

export default function NeedHelp(){
        const [formData, setFormData] = useState({
            name: 'სახელი',
            email: 'ელ.ფოსტა',
            phoneNumber: 'ტელეფონის ნომერი',
            message: 'შეტყობინების ტექსტი',
        });
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form submitted:', formData);
        };
    return(
        <div className="NeedHelpB">
            <div className="firsttwo">
                <h2>გსურთ ჩვენი დახმარება?</h2>
                <p>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს. ხშირადაა შემთხვევა, 
                როდესაც დიზაინის შესრულებისას საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. 
                სწორედ ასეთ დროს არის მოსახერხებელი ამ გენერატორით შექმნილი ტექსტის გამოყენება,</p>
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <div className="two">
                        <label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                            />
                        </label>
                    </div>
                    <label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                    </label>
                    <button type="submit">გაგზავნა</button>
                </form>
            </div>
        </div>
    )
}