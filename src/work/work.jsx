import React from 'react';
import './work.css';

import WorkCard from '../components/workCard/workCard';

export default function Work() {
  return (
    <div className='page-container'>
            <p className='work-p1'>MY WORK</p>
            <p className='work-p2'>RECENT WORK</p>

      <div className='work-card-container'>
        <WorkCard />
      </div>
    </div>
  )
}
