import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

import Location from './../assets/location.gif'
import Call from './../assets/contact.gif'
import Linkedin from './../assets/linkedin.gif'


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Pass the form object directly as the third argument
    emailjs
      .sendForm('service_zlsr3r4', 'template_l7tg2uo', form.current, '0q0ak5Ga51v88ziyp')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };
  
  return (
    <div className='contact-container'>
      <p className='contact-p1'>GET IN TOUCH</p>
      <p className='contact-p2'>CONTACT</p>

      <div className='contact-div'>
        <div className='contact-info'>
          <div className='contact-info-sub'>
            <a href='https://maps.app.goo.gl/ni6Yy1kuVH6oxAUN7'> <img src={Location} className='contact-icon' /></a>             
              <p className='contact-p3'>no.870, Unagalawehera, Polonnaruwa, Sri Lanka.</p>
          </div>
          <div className='contact-info-sub'>
            <img src={Call} className='contact-icon'/>
            <p className='contact-p3'>000 00 00 000</p>
          </div>
          <div className='contact-info-sub'>
            <img src={Linkedin} className='contact-icon'/>
            <p className='contact-p3'>Sasith Duleepa</p>
          </div>
          
          
          
        </div>


          <form ref={form} onSubmit={sendEmail} className='contact-form'>
  <input className='contact-input' type="text" placeholder='Name' name="name" />
  <input className='contact-input' type="email" placeholder='Email' name="email" />
  <input className='contact-input' type="text" placeholder='Subject' name="subject" />
  <textarea className='contact-input-text' placeholder='Message' name="message" />
  <button type="submit" className='contact-btn'>SEND MESSAGE</button>
</form>

          
        </div>

      </div>
      
      
    
  
  )
}
