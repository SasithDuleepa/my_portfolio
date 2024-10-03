import React from 'react';
import './about.css';
import Card1 from '../components/card1/card1';
import Iot from './../assets/iot-solution.png'
import Frontend from './../assets/front-end-programming.png'
import Backend from './../assets/backend.png';
import System from './../assets/dns.png';

export default function About() {
  return (
    <div className='about-page-container'>

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
    
    <div className='about-card-container'>
      <Card1 icon = {Frontend} title = 'Frontend Developer'/>
      <Card1 icon = {Backend} title = 'Backend Developer'/>
      <Card1 icon = {System} title = 'System Developer'/>
      <Card1 icon = {Iot} title = 'IoT Developer'/>

    </div>
    </div>
  )
}
