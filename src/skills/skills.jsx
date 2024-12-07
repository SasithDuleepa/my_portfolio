import React from 'react';
import './skills.css';
import Card1 from '../components/card1/card1';

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
import Expressjs from './../assets/tech/expressjs.png';
import Git from './../assets/tech/git.png';


export default function Skills() {
  return (
    <div className='skills-container'>
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
      <Card1 icon = {NodeJs} title = 'Node js'/>
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



