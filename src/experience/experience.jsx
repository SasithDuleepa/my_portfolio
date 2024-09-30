import React from 'react';
import './experience.css';

export default function Experience() {
  return (
    <div className='exp-page-container'>

      <p className='exp_p1'>Experience</p>
      <p className='exp_p2'>Work Experience</p>
      

      <div className='experience-card-container'>
        <div className='exp-card-div'>
          <div className='exp-card-circle'></div>
          <div className='exp-card-arrow'></div>
          <div className='exp-card-container'>
            <div className='exp-p-div'>
              <p className='exp-p1'>Intern Software Engineer</p>
              <p className='exp-p2'>2023</p>
            </div>
            <p className='exp-p3'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>

        <div className='exp-card-div'>
          <div className='exp-card-circle'></div>
          <div className='exp-card-arrow'></div>
          <div className='exp-card-container'>
            <div className='exp-p-div'>
              <p className='exp-p1'>Associate Software Engineer</p>
              <p className='exp-p2'>2024</p>
            </div>
            <p className='exp-p3'>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
