import React, { useState } from 'react';
import './panel.css';

import Minus from './../../assets/minus (1).png';
import Plus from './../../assets/plus-sign.png';

export default function Panel(props) {
    const [expand , setExpand] = useState(false);
  return (
    <div className='panel-main'>
        <div className='top-panel'>
            <p className='top-panel-p'> {props.header}</p>
            <button className='panel-btn' onClick={()=>{
                setExpand(!expand);
            }}>{
              <img src={expand ? Minus : Plus} alt="" className='panel-icon'/>
            }</button>
        </div>
        <div className={`bottom-panel ${expand ? 'expanded' : ''}`}>{props.body}</div>
        
      
    </div>
  )
}
