
import './ProjectsDetails.scss'
import Image from './images/Smart.png'
import ImageA from './images/Arrow1.png'
import ImageB from './images/Arrow2.png'
import  { useState, useRef } from "react";
import image2 from './images2/Image2.png'
const ProjectsDetails=()=> {
  const projects=[
    {
        url:'./images2/Image3.png', 
        isDone:true,
        title:"ქუთაისის პარლამენტი"
    },
    {
        url:"./images2/Image4.png", 
        isDone:false,
        title:"ქუთაისის პარლამენტი"
    },
    {
        url:"./images2/Image5.png", 
        isDone:true,
        title:"ქუთაისის პარლამენტი"
    },
    {
      url:"./images2/Image3.png", 
      isDone:true,
      title:"ქუთაისის პარლამენტი"
  },
  {
    url:'./images2/Image3.png', 
    isDone:true,
    title:"ქუთაისის პარლამენტი"
},
{
    url:"./images2/Image4.png", 
    isDone:false,
    title:"ქუთაისის პარლამენტი"
},
{
    url:"./images2/Image5.png", 
    isDone:true,
    title:"ქუთაისის პარლამენტი"
},
{
  url:"./images2/Image3.png", 
  isDone:true,
  title:"ქუთაისის პარლამენტი"
},]

const [scrollPosition, setScrollPosition] = useState(0);
const scrollContainerRef = useRef<HTMLDivElement>(null);

const handleScroll = (scrollOffset:number) => {
  let newScrollPosition = scrollPosition + scrollOffset;
  if(scrollContainerRef?.current){

  if (newScrollPosition<0){
    newScrollPosition=0
  }
  if (newScrollPosition>1700){
    newScrollPosition=1700
  }
  scrollContainerRef.current.scrollLeft = newScrollPosition;
  }
  setScrollPosition(newScrollPosition);
  
  
};

    return (
     <main >
      
      <section className="project-details">
        <h1 >ახალციხე სმარტი</h1>
        <h2>დასრულებულია</h2>
        <div className="image-div">
        <img src={Image} alt="SmartImage" className="Smart" />
        
        <div className="details">
        <div className="left-side">
          <h2>შესრულებული სამუშაო</h2>
            <ul>
              <li>გათბობა-კონდიცირება</li>
              <li>ვენტილაცია</li>
              <li>კანალიზაცია</li>
              <li>წყალმომარაგება</li>
              <li>ელექტროობა</li>
              </ul>
              </div>
              <div className="right-side">
              <ul>
              <li>ვიდეო თვალყური</li>
              <li>სახანძრო სისტემები</li>
              <li>სრული სისტემების კომპიუტერული მართვა BMS</li>
            </ul>
            </div>
        </div>
        </div>
        <p className="text1">Lorem Ipsum საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. 
        იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის
         საცდელი ეგზემპლარი დაბეჭდა. მისი ტექსტი არამარტო 5 საუკუნის მანძილზე შემორჩა, არამედ მან 
         დღემდე, ელექტრონული ტიპოგრაფიის დრომდეც უცვლელად მოაღწია. განსაკუთრებული პოპულარობა 
         მას 1960-იან წლებში გამოსულმა Letraset-ის ცნობილმა ტრაფარეტებმა მოუტანა, უფრო მოგვიანებით კი 
         — Aldus PageMaker-ის ტიპის საგამომცემლო პროგრამებმა, რომლებშიც Lorem Ipsum-ის სხვადასხვა ვერსიები
          იყო ჩაშენებული.</p>
        <p className="text2">გავრცელებული მოსაზრებით, Lorem Ipsum შემთხვევითი ტექსტი სულაც არაა. 
        მისი ფესვები ჯერკიდევ ჩვ. წ. აღ-მდე 45 წლის დროინდელი კლასიკური ლათინური ლიტერატურიდან მოდის.
         ვირჯინიის შტატში მდებარე ჰემპდენ-სიდნეის კოლეჯის პროფესორმა რიჩარდ მაკკლინტოკმა აიღო ერთ-ერთი ყველაზე
          იშვიათი ლათინური სიტყვა "consectetur" Lorem Ipsum-პასაჟიდან და გადაწყვიტა მოეძებნა იგი კლასიკურ 
          ლიტერატურაში. ძიება შედეგიანი აღმოჩნდა — ტექსტი Lorem Ipsum გადმოწერილი ყოფილა ციცერონის 
          "de Finibus Bonorum et Malorum"-ის 1.10.32 და 1.10.33 თავებიდან. ეს წიგნი ეთიკის თეორიის 
          ტრაქტატია, რომელიც რენესანსის პერიოდში ძალიან იყო გავრცელებული. Lorem Ipsum-ის პირველი ხაზი,
           "Lorem ipsum dolor sit amet..." სწორედ ამ წიგნის 1.10.32 თავიდანაა.</p> 
      </section>
      <section className="photo-gallery">
      <div className="gallery-h1">
        <h1>ფოტო გალერეა</h1>
        <div className="arrows">
          <button>
        <img src={ImageA} alt="ArrowImage" className="arrow" />
        </button>
        <button>
        <img src={ImageB} alt="ArrowImage"  className="arrow"/>
        </button>
        </div>
        </div>
        <div className="gridcontainer">
          <div className="item item-1"></div>
          <div className="item item-2"></div>
          <div className="item item-3"></div>
          <div className="item item-4"></div>
          <div className="item item-5"></div>
       </div>
       
       </section> 
       <section className="other-projects">
       
       <div className="otherprojects-h1">
       <h1 >სხვა პროექტები</h1>
        <div className="arrows">
        <button onClick={()=>handleScroll(-100)}>
        <img src={ImageA} alt="ArrowImage" className="arrow" />
        </button>
        <button onClick={()=>handleScroll(100)}>
        <img src={ImageB} alt="ArrowImage"  className="arrow"  />
        </button>
        </div>
        </div>
       <div className="slider-containers" ref={scrollContainerRef} >
        {projects.map(item=>{
            return(<div className="slider-container" id='container1'>
            <img src={item.url} alt="image_1" className="parliament-image" />
            <h1 className="title">{item.isDone?"დასრულებული":"მიმდინარე"}</h1>
            <h2 className="subtitle">{item.title}</h2>
          </div>)
        })}
        
        </div>
        


        </section>
        
        
      </main>
    );
}
export default ProjectsDetails;