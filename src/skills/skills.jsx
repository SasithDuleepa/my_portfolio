import React from 'react';
import './skills.css';

import Card1 from '../components/card1/card1';

export default function Skills() {
  return (
    <div className='skills-container'>
      <p className='skills-p1'>My Specialty</p>
      <p className='skills-p2'>My Skills</p>
      <p className='skills-p3'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>


    <div className='skills-bar-container'>

      <div className='skill-bar'>
        <label className='skill-bar-label'>React.js</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress1'></div>
          <div className='skill-progress-bar-circle1'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>

      <div className='skill-bar'>
        <label className='skill-bar-label'>Node.js</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress2'></div>
          <div className='skill-progress-bar-circle2'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>

      <div className='skill-bar'>
        <label className='skill-bar-label'>CSS</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress3'></div>
          <div className='skill-progress-bar-circle3'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>

      <div className='skill-bar'>
        <label className='skill-bar-label'>Tailwind CSS</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress4'></div>
          <div className='skill-progress-bar-circle4'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>

      <div className='skill-bar'>
        <label className='skill-bar-label'>Arduino</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress5'></div>
          <div className='skill-progress-bar-circle5'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>

      <div className='skill-bar'>
        <label className='skill-bar-label'>Python</label>
        <div className='skill-progress-bar'>
          <div className='skill-progress-bar-line progress6'></div>
          <div className='skill-progress-bar-circle6'></div>
        </div>
        <span className='skill-bar-span'>75%</span>
      </div>
    </div>
    </div>
  )
}



