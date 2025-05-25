import React from 'react';
import './about.css';
import Card1 from '../components/card1/card1';
import useIntersectionObserver from '../hooks/useIntersectionObserver'; // Import the hook

import Python from './../assets/tech/python.webp';
import Html from './../assets/tech/html.webp';
import Javascript from './../assets/tech/javascript.webp';
import Tailwind from './../assets/tech/tailwind-css.webp';
import Css from './../assets/tech/css.webp';
import ReactJs from './../assets/tech/react-js.webp';
import NodeJs from './../assets/tech/node-js.webp';
import Arduino from './../assets/tech/arduino.webp';
import Mongodb from './../assets/tech/mongodb.webp';
import Mysql from './../assets/tech/mysql1.webp';

export default function About() {
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div 
      ref={elementRef} 
      className={`about-page-container section-entry ${isVisible ? 'is-visible' : ''}`}
    >
      <p className='about-p header-p1'>ABOUT ME</p>

      <p className='about-p1 header-p2'>WHO AM I ?</p>
      

      <p className='about-p1 body-p1'>In a world woven with code and creativity, there exists a developer named Sasith,         
        who dances between the lines of logic and imagination. Born with an insatiable curiosity for all things digital,
         he embarked on a journey to master the realms of web development. With React and Node as his trusted companions,
         he transforms ideas into interactive experiences, blending functionality with flair.</p>

      <p className='about-p3 body-p1'>But Sasith’s story doesn’t stop at lines of code. His passion for innovation led him to build IoT solutions, 
        like automating a greenhouse where technology and nature co-exist in perfect harmony.
         A self-motivated explorer, he thrives in the unknown, constantly learning and crafting solutions for every challenge that comes his way.
         
         </p>
         <p className='about-p3 body-p1'>
         This is not just the story of a developer; it’s the story of someone who believes that every project holds a new adventure. And for Sasith, the adventure has only just begun.
         </p>
    

    </div>
  )
}
