import React from 'react';
import './about.css';
import Card1 from '../components/card1/card1';

export default function About() {
  return (
    <div className='about-page-container'>

      <p className='about-p'>ABOUT ME</p>

      <p className='about-p1'>WHO AM I ?</p>
      

      <p className='about-p2'>Hi I'm Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>

      <p className='about-p3'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    
    <div className='about-card-container'>
      <Card1/>
      <Card1/>
      <Card1/>
      <Card1/>

    </div>
    </div>
  )
}
