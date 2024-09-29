import React, { useState } from 'react';
import './panel.css';

export default function Panel(props) {
    const [expand , setExpand] = useState(false);
  return (
    <div className='panel-main'>
        <div className='top-panel'>
            <p className='top-panel-p'> {props.header}</p>
            <button onClick={()=>{
                setExpand(!expand);
            }}>+</button>
        </div>
        <div className={`bottom-panel ${expand ? 'expanded' : ''}`}>{props.body}</div>
        
      
    </div>
  )
}
