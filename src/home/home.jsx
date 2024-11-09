import React, { useEffect, useState } from 'react';
import './home.css';


import Image1 from './../assets/my1.png';
import Image2 from './../assets/my2.png';

import Download from './../assets/download.png';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='home-page-container'>

      <img alt='' src={currentSlide === 0 ? Image1 : Image2} className={currentSlide === 0 ? 'slide1' : 'slide2'} />


      <div className='home-text-container'>
        <h1 className='home-text-p1'>Hi!<br/> I'm sasith</h1>
        <p  className='home-text-p2'>Full Stack Developer</p>

        <button className='cv-btn'>
          <p className='cv-btn-text'>DOWNLOAD CV</p>
          <img src={Download} alt="Download" className='download-icon' />
        </button>

      </div>

      <div className='slider-btn-div'>
        <button className={currentSlide === 0 ?'slide-btn-active' :'slide-btn' } onClick={()=>{
          setCurrentSlide(0)
        }}></button>
        <button  className={currentSlide === 1 ?'slide-btn-active' :'slide-btn' } onClick={()=>{
          setCurrentSlide(1)
        }}></button>
      </div>

    </div>
  )
}
