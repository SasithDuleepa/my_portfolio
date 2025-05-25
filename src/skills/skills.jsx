import React from 'react';
import './skills.css';
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
import Expressjs from './../assets/tech/expressjs.webp';
import Git from './../assets/tech/git.webp';
import NextJs from './../assets/tech/nextjs.webp';
import Django from './../assets/tech/django.webp';


export default function Skills() {
  const [elementRef, isVisible] = useIntersectionObserver({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <div 
      ref={elementRef}
      className={`skills-container section-entry ${isVisible ? 'is-visible' : ''}`}
    >
      <p className='header-p1'>My Specialty</p>
      <p className='header-p2'>My Skills</p>
      <p className='body-p1'>Venturing into the world of tech, Sasith braved the wilds of JavaScript and scaled the heights of React and Node. 
        With each challenge—from CSS quirks to backend mysteries—he sharpened his skills. Now armed with HTML, CSS, JavaScript, React, Node.js
        , and more, Sasith creates seamless digital experiences, constantly adding new tools to his arsenal, ready for his next adventure.</p>


    



<div className='about-card-container'>
      <Card1 icon = {Html} title = 'HTML'/>
      <Card1 icon = {Javascript} title = 'Javascript'/>
      <Card1 icon = {Tailwind} title = 'Tailwind css'/>
      <Card1 icon = {Css} title = 'CSS'/>
      <Card1 icon = {ReactJs} title = 'React js'/>
      <Card1 icon = {NextJs} title='Next js'/>
      <Card1 icon = {NodeJs} title = 'Node js'/>
      <Card1 icon = {Django} title='django'/>
      <Card1 icon = {Arduino} title = 'Arduino'/>
      <Card1 icon = {Python} title = 'Python'/>
      <Card1 icon = {Mongodb} title = 'mongo db'/>
      <Card1 icon = {Mysql} title = 'mysql'/>
      <Card1 icon = {Expressjs} title='Express Js'/>
      <Card1 icon = {Git} title='github'/>
 
    </div>
    </div>
  )
}



