import React, { useEffect, useState } from 'react';
import './home.css';


import Image1 from './../assets/me.jpeg';
import Image2 from './../assets/sasith.jpg';

export default function Home() {
  const [currectSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='home-page-container'>

      <img src={currectSlide === 0 ? Image1 : Image2} alt="Image 1" className={currectSlide === 0 ? 'slide1' : 'slide2'} />


      <div className='home-text-container'>
        <h1>Hi! I'm sasith</h1>
        <p>Full Stack Developer</p>

        <button>Download CV</button>

      </div>

      <div className='slider-btn-div'>
        <button className={currectSlide === 0 ?'slide-btn-active' :'slide-btn' } onClick={()=>{
          setCurrentSlide(0)
        }}></button>
        <button  className={currectSlide === 1 ?'slide-btn-active' :'slide-btn' } onClick={()=>{
          setCurrentSlide(1)
        }}></button>
      </div>

    </div>
  )
}
