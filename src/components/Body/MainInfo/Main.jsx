import MainImage from '../../../Imgs/Main.png'
import Ukure from '../../../Imgs/Ukure.png'
import './main.scss'

export default function Main() {
    return(
        <div className="Main">
            <div className="Video">
                <img src={Ukure} className='Ukure' alt="Ukure" />
                <img src={MainImage} alt="Example Picture" className='MainImg'/>
            </div>
            <div className="MainB">
                <h2>თბილი სახლი</h2>
                <p>ევროპის, აზიისა და ამერიკის კონტინენტზე მოქმედი ცნობილი კომპანიების საიმედო პარტნიორია და კლიენტებს სთავაზობს, 
                როგორც <span className='BlueText'>ხარისხიანი</span> პროდუქციის ასორტიმენტის სტანდარტულ მოდელებს, 
                ასევე ინდივიდუალური, სპეციფიური დაკვეთით დამზადებული პროდუქციის მოწოდებას <span className='BlueText'>უმოკლეს დროში</span>.</p>
                <div className="Abody">
                    <div className="Ainfo">
                        <h1 className='Num'>245</h1>
                        <h4 className='Numgray'>შესრულებული სამუშაო</h4>
                    </div>
                    <div className="Ainfo">
                        <h1 className='Num'>47</h1>
                        <h4 className='Numgray'>ჩვენი პარტნიორები</h4>
                    </div>
                    <div className="Ainfo">
                        <h1 className='Num'>287</h1>
                        <h4 className='Numgray'>თანამშრომელი</h4>
                    </div>
                    <div className="Ainfo">
                        <h1 className='Num'>38</h1>
                        <h4 className='Numgray'>მიღებული ჯილდო</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}