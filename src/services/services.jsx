import React from 'react';
import './services.css';
import Card2 from '../components/card2/card2';

export default function Services() {
  return (
    <div className='service-container'>
      <p className='service-p1'>What I do ?</p>
      <p className='service-p2'>Here are some of my <br/> expertise</p>
      <div className='service-card-container'>
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>
      <Card2/>

      </div>

     
      
    </div>
  )
}
