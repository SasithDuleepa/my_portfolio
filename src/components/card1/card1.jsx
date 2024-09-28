import React from 'react';
import './card1.css';

import Icon from './../../assets/dns.png'

export default function Card1() {
  return (
    <div className='card1-container'>
        <img className='card1-icon' src={Icon} alt="icon" />
        <p className='card1-p'>System Development</p>
      
    </div>
  )
}
