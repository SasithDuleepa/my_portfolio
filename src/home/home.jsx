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

  const DownloadCV = () => {
    const cvUrl = require('./../assets/sasith.pdf'); // Correct path for Webpack to bundle the file
  
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "sasith.pdf"; 
    // link.setAttribute(
    //   'download',
    //   `FileName.pdf`,
    // );

  
    // Append the link, trigger the download, and then remove it
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    document.body.removeChild(link);
  };
  


  return (
    <div className='home-page-container'>

      <img alt='' src={currentSlide === 0 ? Image1 : Image2} className={currentSlide === 0 ? 'slide1' : 'slide2'} />


      <div className='home-text-container'>
        
        {currentSlide ===  0 ? 
        <h1 className='home-text-p1'>Hi!<br/> I'm Sasith</h1>
        :
        <h1 className='home-text-p1'>Hello!</h1>}
        

        {currentSlide ===  0 ? 
        <p  className='home-text-p2'>Full Stack Developer</p>
        :
        <p  className='home-text-p2'>Welcome to My Portfolio</p>}

        <button className='cv-btn' onClick={DownloadCV}>
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
