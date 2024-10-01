import React from 'react';
import './card2.css';  


export default function Card2(props) {
  return (
    <div className='card2-container'>

        <div className='hexagon'>
            <img className='card2-img' src={props.icon} alt="" />

            
        </div>

        <p className='card2-p1'>{props.title}</p>
            <p className='card2-p2'>{props.content}</p>
      
    </div>
  )
}
