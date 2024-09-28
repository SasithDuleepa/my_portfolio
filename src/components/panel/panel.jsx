import React, { useState } from 'react';
import './panel.css';

export default function Panel() {
    const [expand , setExpand] = useState(true);
  return (
    <div className='panel-main'>
        <div className='top-panel'>
            <p className='top-panel-p'> oidc ibh</p>
            <button onClick={()=>{
                setExpand(!expand);
            }}>+</button>
        </div>
        <div className={`bottom-panel ${expand ? 'expanded' : ''}`}></div>
        
      
    </div>
  )
}
