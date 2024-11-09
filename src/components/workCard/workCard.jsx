import React from 'react';
import './workCard.css';

export default function WorkCard(props) {
  return (
    <div className={`work-card-main ${props.image}`}>


      <div  className='work-card-main-shade'></div>

      <p className='work-card-title'>{props.title}</p>
      <p className='work-card-content'>{props.content}</p>
      
    </div>
  )
}
