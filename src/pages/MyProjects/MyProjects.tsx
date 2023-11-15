import React from 'react';
import './MyProjects.scss';

const MyProjects = () => {
  const projects=[
    {
        url:"./images/parliament.png", 
        isDone:true,
        title:"დასრულებული"
    },
    {
        url:"./images/parliament.png", 
        isDone:false,
        title:"დასრულებული"
    },
    {
        url:"./images/parliament.png", 
        isDone:true,
        title:"დასრულებული"
    },
    {
      url:"./images/parliament.png", 
      isDone:true,
      title:"დასრულებული"
  },
  {
    url:"./images/parliament.png", 
    isDone:true,
    title:"დასრულებული"
},
{
  url:"./images/parliament.png", 
  isDone:true,
  title:"დასრულებული"
},
{
  url:"./images/parliament.png", 
  isDone:true,
  title:"დასრულებული"
},
{
  url:"./images/parliament.png", 
  isDone:true,
  title:"დასრულებული"
},
    
  ]
  return (
    <main>
      <section className="ourprojects">
        <div className='ourprojects-h'>
        <h1 className='ourprojects-h1'>ჩვენი პროექტები</h1>
        <h2 className='ourprojects-h2'>
          შემთხვევით გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის
          შემქმნელებს,<br />
          რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს
        </h2>
        </div>
        <div className="buttons">
        <button >
          ყველა პროექტი
        </button>
        <button >
          მიმდინარე
        </button>
        <button >
          დასრულებული
        </button>
      </div>
      </section>
      

      {/* New containers */}
      <section className="projects-gallery">
        {projects.map(item=>{
            return(<div className="image-container" >
            <img src={item.url} alt="image_1" className="parliament-image" />
            <h1 className="title">{item.title}</h1>
            <h2 className="subtitle">{item.isDone?"ქუთაისის პარლამენტი":"ქუთაისის პარლამენტი"}</h2>
          </div>)
        })}
        
        </section>
    </main>
  );
};

export default MyProjects;
