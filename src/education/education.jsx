import React from 'react';
import './education.css';
import Panel from '../components/panel/panel';

export default function Education() {
  return (
    <div className='page-container'>
      <p className='edu-p1'>Education</p>
      <p className='edu-p2'>Education</p>

      <div className='edu-panel-container'>
        <Panel/>
        <Panel/>
        <Panel/>
      </div>
    </div>
  )
}
