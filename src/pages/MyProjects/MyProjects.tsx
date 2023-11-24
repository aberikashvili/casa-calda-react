
import './MyProjects.scss';
import React, { useState } from 'react';
import './MyProjects.scss';

const MyProjects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      url:"./images/parliament.png", 
      isDone:true,
      title:"ქუთაისის პარლამენტი"
  },
  {
      url:"./images/parliament.png", 
      isDone:false,
      title:"ქუთაისის პარლამენტი"
  },
  {
      url:"./images/parliament.png", 
      isDone:true,
      title:"ქუთაისის პარლამენტი"
  },
  {
    url:"./images/parliament.png", 
    isDone:true,
    title:"ქუთაისის პარლამენტი"
},
{
  url:"./images/parliament.png", 
  isDone:true,
  title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},]
  const filteredProjects = projects.filter(item => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'inProgress') {
      return !item.isDone;
    } else {
      return item.isDone;
    }
  });
console.log(filteredProjects)
const buttonStyle = {
  all: filter === 'all' ? { backgroundColor: ' #F58634' } : {},
  inProgress: filter === 'inProgress' ? { backgroundColor: '#F58634' } : {},
  completed: filter === 'completed' ? { backgroundColor: '#F58634' } : {},
};
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
          <button onClick={() => setFilter('all')} style={buttonStyle.all} >ყველა პროექტი</button>
          <button onClick={() => setFilter('inProgress')} style={buttonStyle.inProgress}>მიმდინარე</button>
          <button onClick={() => setFilter('completed')} style={buttonStyle.completed}>დასრულებული</button>
        </div>
      </section>

      <section className="projects-gallery">
        {filteredProjects.map(item => (
          <div className="image-container" key={Math.random()}>
            <img src={item.url} alt="image_1" className="parliament-image" />
            <h1 className="title">{item.isDone ? 'დასრულებული' : 'მიმდინარე'}</h1>
            <h2 className="subtitle">
            {item.title}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MyProjects;
