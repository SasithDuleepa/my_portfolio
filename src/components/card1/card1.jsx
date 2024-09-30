import React from 'react';
import './card1.css';



export default function Card1(props) {
  return (
    <div className='card1-container'>
        <img className='card1-icon' src={props.icon} alt="icon" />
        <p className='card1-p'>{props.title}</p>
      
    </div>
  )
}
