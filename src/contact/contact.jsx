import React from 'react';
import './contact.css';

import Location from './../assets/location.gif'
import Call from './../assets/contact.gif'
import Linkedin from './../assets/linkedin.gif'


export default function Contact() {
  return (
    <div className='contact-container'>
      <p className='contact-p1'>GET IN TOUCH</p>
      <p className='contact-p2'>CONTACT</p>

      <div className='contact-div'>
        <div className='contact-info'>
          <div className='contact-info-sub'>
              <img src={Location} className='contact-icon'/>
              <p className='contact-p3'>Address: 123 Main Street, Anytown USA</p>
          </div>
          <div className='contact-info-sub'>
            <img src={Call} className='contact-icon'/>
            <p className='contact-p3'>Phone: 0000000000000</p>
          </div>
          <div className='contact-info-sub'>
            <img src={Linkedin} className='contact-icon'/>
            <p className='contact-p3'>Email: info@example.com</p>
          </div>
          
          
          
        </div>

        <div className='contact-form'>
          <input className='contact-input' type="text" placeholder='Name' />
          <input  className='contact-input' type="text" placeholder='Email' />
          <input  className='contact-input' type="text" placeholder='Subject' />
          <textarea className='contact-input-text' placeholder='Message' />
          <div className='contact-btn-div'>
            <button className='contact-btn'>SEND MESSAGE</button>
          </div>
          
        </div>

      </div>
      
      
    </div>
  
  )
}
