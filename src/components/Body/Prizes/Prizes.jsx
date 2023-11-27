import './Prizes.scss'
import Prize1 from '../../../Imgs/Prize1.png'
import Prize2 from '../../../Imgs/Prize2.png'
import Prize3 from '../../../Imgs/Prize3.png'
import Prize4 from '../../../Imgs/Prize4.png'
import Prize6 from '../../../Imgs/Prize6.png'
import Prize5 from '../../../Imgs/Prize5.png'


export default function Prizes(){
    return(
        <div className="PrizesB">
            <div className="header">
                <h2>ჯილდოები, სიგელები</h2>
                <p>შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, 
                რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს</p>
                <button className='forWeb'>სრული სია</button>
            </div>
            <div className="PrizeImgs">
                <img src={Prize1} alt="Prize1" />
                <img src={Prize2} className='Uppic' alt="Prize2" />
                <img src={Prize3} alt="Prize3" />
                <img src={Prize4} className='MobPic' alt="Prize4" />
                <img src={Prize5} className='WebPic Uppic new' alt="Prize4" />
                <img src={Prize1} className='WebPic' alt="Prize1" />
                <img src={Prize2} className='WebPic Uppic' alt="Prize2" />
                <img src={Prize3} className='WebPic' alt="Prize3" />
                <img src={Prize6} className='WebPic Uppic new' alt="Prize4" />
            </div>
            <button className='forMob'>ნახე სრულად</button>
        </div>
    )
}