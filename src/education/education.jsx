import React from 'react';
import './education.css';
import Panel from '../components/panel/panel';

export default function Education() {
  return (
    <div className='edu-page-container'>
      <p className='edu-p1'>Education</p>
      <p className='edu-p2'>Education</p>

      <div className='edu-panel-container'>
        <Panel header='bsc hons in computer science' body='
        i studied batchlor of science hons degree in computer science at wrexham university United Kingdom'/>
        <Panel header='Information technology - NDT' body=''/>
      </div>
    </div>
  )
}
