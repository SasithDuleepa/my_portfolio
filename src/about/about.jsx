import React from 'react';
import './about.css';
import Card1 from '../components/card1/card1';
import Iot from './../assets/iot-solution.png'
import Frontend from './../assets/front-end-programming.png'
import Backend from './../assets/backend.png';
import System from './../assets/dns.png';

import Python from './../assets/tech/python.png';
import Html from './../assets/tech/html.png';
import Javascript from './../assets/tech/javascript.png';
import Tailwind from './../assets/tech/tailwind-css.png';
import Css from './../assets/tech/css.png';
import ReactJs from './../assets/tech/react-js.png';
import NodeJs from './../assets/tech/node-js.png';
import Arduino from './../assets/tech/arduino.png';
import Mongodb from './../assets/tech/mongodb .png';
import Mysql from './../assets/tech/mysql1.png';

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
      <Card1 icon = {Html} title = 'HTML'/>
      <Card1 icon = {Javascript} title = 'Javascript'/>
      <Card1 icon = {Tailwind} title = 'Tailwind css'/>
      <Card1 icon = {Css} title = 'CSS'/>
      <Card1 icon = {ReactJs} title = 'React js'/>
      <Card1 icon = {NodeJs} title = 'Node js'/>
      <Card1 icon = {Arduino} title = 'Arduino'/>
      <Card1 icon = {Python} title = 'Python'/>
      <Card1 icon = {Mongodb} title = 'mongo db'/>
      <Card1 icon = {Mysql} title = 'mysql'/>

    </div>
    </div>
  )
}
