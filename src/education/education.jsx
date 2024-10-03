import React from 'react';
import './education.css';
import Panel from '../components/panel/panel';



export default function Education() {
  return (
    <div className='edu-page-container'>
      <p className='header-p1'>Education</p>
      <p className='header-p2'>Education</p>

      <div className='edu-panel-container'>
        <Panel header='bsc hons in computer science' body='Wrexham University, United Kingdom,
I earned my Bachelor of Science with Honours in Computer Science, where I gained a solid foundation in programming, software development, and computer systems. My studies included hands-on projects that enhanced my technical skills and prepared me for real-world challenges in the tech industry. The program equipped me with critical thinking and problem-solving abilities, fostering my passion for technology and innovation.'/>
        <Panel header='Information technology - NDT' body='
        Institute of Technology, University of Moratuwa,
I obtained my National Diploma in Technology specializing in Information Technology at the Institute of Technology, University of Moratuwa. This program provided me with a comprehensive understanding of IT principles, including programming, systems analysis, and network management. Through practical assignments and projects, I developed essential technical skills and a solid foundation in various technologies, preparing me for my future studies and career in the tech field.

'/>
      </div>
    </div>
  )
}
