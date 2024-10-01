import React from 'react';
import './work.css';

import Travel from './../assets/travel.png';
import Pos from './../assets/pos.png';
import Iot from './../assets/iot.png';
import Inventory from './../assets/inventory.png';

import WorkCard from '../components/workCard/workCard';

export default function Work() {
  return (
    <div className='page-container'>
            <p className='work-p1'>MY WORK</p>
            <p className='work-p2'>RECENT WORK</p>

      <div className='work-card-container'>
        <WorkCard image = 'img1' title=' TRAVEL WEB SITE'/>
        <WorkCard image = 'img2' title= 'INVENTORY MANAGEMENT SYSTEM'/>
        <WorkCard image = 'img3' title='SMART GREEN HOUSE'/>
        <WorkCard image = 'img4' title='POS SYSTEM'/>
      </div>
    </div>
  )
}
