import React from 'react';
import './experience.css';

import Icon from '../assets/legal_13794759.svg';

export default function Experience() {
  return (
    <div className='exp-page-container'>

      <p className='exp_p1'>Experience</p>
      <p className='exp_p2'>Work Experience</p>
      

      <div className='experience-card-container'>
        <div className='exp-card-div'>
          <div className='exp-card-circle1'>
          <img src={Icon} className='exp-card-circle-img' />
          </div>
          <div className='exp-card-arrow'></div>
          <div className='exp-card-container'>
            <div className='exp-p-div'>
              <p className='exp-p1'>Intern Software Engineer</p>
              <p className='exp-p2'>2023</p>
            </div>
            <p className='exp-p3'> I began my career as an intern software engineer, diving into the world of programming and technology.
               During this period, I enhanced my coding skills and gained hands-on experience with various programming languages and frameworks. 
               I actively contributed to projects, collaborating with experienced developers, which deepened my understanding of software development practices and team dynamics.
               This invaluable experience laid the foundation for my growth in the tech industry.</p>
          </div>
        </div>

        <div className='exp-card-div'>
          <div className='exp-card-circle2'>
            <img src={Icon} className='exp-card-circle-img' />
          </div>
          <div className='exp-card-arrow'></div>
          <div className='exp-card-container'>
            <div className='exp-p-div'>
              <p className='exp-p1'>Associate Software Engineer</p>
              <p className='exp-p2'>2024</p>
            </div>
            <p className='exp-p3'>After my internship, I was promoted to Associate Software Engineer. In this role, 
              I effectively applied my skills and knowledge to various projects, contributing to the development of innovative solutions.
               I collaborated with cross-functional teams, enhancing my problem-solving abilities and understanding of software development processes.
               This position allowed me to take on more responsibilities, driving projects from conception to completion while continually expanding my technical expertise.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
