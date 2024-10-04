import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

import Location from '../assets/map.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Gmail from '../assets/gmail.png';



export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    // Pass the form object directly as the third argument
    emailjs
      .sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`)
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
      <p className='header-p1'>GET IN TOUCH</p>
      <p className='header-p2'>CONTACT</p>

      <div className='contact-div'>
        <div className='contact-info'>
          <div className='contact-info-sub'>
            <a href='https://maps.app.goo.gl/ni6Yy1kuVH6oxAUN7'> <img alt='' src={Location} className='contact-icon' /></a>             
              <p className='contact-p3'>no.870, Unagalawehera, Polonnaruwa, Sri Lanka.</p>
          </div>
          <div className='contact-info-sub'>
            <img alt='' src={Gmail} className='contact-icon'/>
            <p className='contact-p3'>duleepajayathissa@gmail.com</p>
          </div>
          <div className='contact-info-sub'>
            <a  href='https://www.linkedin.com/in/sasith-duleepa/'>  <img alt='' src={Linkedin} className='contact-icon'/></a>
            <p className='contact-p3'>Sasith Duleepa</p>
          </div>
          <div className='contact-info-sub'>
            <a href='https://github.com/SasithDuleepa'><img alt='' src={Github} className='contact-icon'/></a>
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
