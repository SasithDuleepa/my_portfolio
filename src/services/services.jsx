import React from 'react';
import './services.css';
import Card2 from '../components/card2/card2';

import Icon1 from '../assets/backend.png';
import Icon2 from '../assets/dns.png';
import Icon3 from '../assets/iot-solution.png';

export default function Services() {
  return (
    <div className='service-container'>
      <p className='service-p1'>What I do ?</p>
      <p className='service-p2'>Here are some of my <br/> expertise</p>
      <div className='service-card-container'>
      <Card2 icon={Icon1} title='SYSTEM DEVELOPMENT' content='Building cloud-based systems with a focus on meeting all requirements.
      '/>
      <Card2 icon={Icon2} title='WEB SITE DEVELOPMENT' content='Creating responsive websites and web applications.'/>
      <Card2 icon={Icon3} title='IOT SOLUTIONS' content='Developing IoT solutions for connected devices and systems.'/>



      </div>

     
      
    </div>
  )
}
