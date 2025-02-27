import './App.css';


import React, { useEffect, useState } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import Work from './work/work';
import Skills from './skills/skills';
import Services from './services/services';
import Home from './home/home';
import Hero from './hero/hero';
import Experience from './experience/experience';
import Education from './education/education';
import Contact from './contact/contact';
import About from './about/about';

import My from './../src/assets/my3.png';
import Menu from './../src/assets/menu.png';
import Close from './../src/assets/close.png';


function App() {

  const [currentElement , setCurrentElement] = useState('home');

    // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      // console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      // console.log('end', to);
      setCurrentElement(to);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);


  //sidebar current 
  const [show, setShow] = useState(false);

   return (
    <div>
<button className={show ? "sidebar_btn-show":"sidebar_btn-hide" } onClick={()=>setShow(!show)}> 
       <img alt='' src={show ? Close : Menu} className='sidemenu-icon' /></button>
      
      
          <div className='App'>



<div  className={show ? 'Sidebar':' Sidebar-hide'}>
  
<img src={My} alt="My" className='sidebar-img'/>
<p className='sidebar-name'>Sasith Duleepa</p>

<p className='occupation-p'>SOFTWARE ENGINEER IN SRI LANKA</p>



<Link
className="link"
activeClass="link active"
to="home"
spy={true}
smooth={true}
duration={1500}
offset={-100}

>HOME</Link>

<Link
className="link"
activeClass="active"
to="about"
spy={true}
smooth={true}
>ABOUT</Link>
<Link
className="link"
activeClass="active"
to="skills"
spy={true}
smooth={true}
>SKILLS</Link>
<Link
className="link"
activeClass="active"
to="services"
spy={true}
smooth={true}
>SERVICES</Link>
<Link
className="link"
activeClass="active"
to="experience"
spy={true}
smooth={true}
>EXPERIENCE</Link>
<Link
className="link"
activeClass="active"
to="education"
spy={true}
smooth={true}
>EDUCATION</Link>
<Link
className="link"
activeClass="active"
to="work"
spy={true}
smooth={true}
>WORK</Link>
<Link
className="link"
activeClass="active"
to="contact"
spy={true}
smooth={true}

>CONTACT</Link>









</div>






<div className='Body'>
{/* <Element name="home" className={`element ${currentElement}`}>
<Home/>
</Element> */}
<Element name="home" className={`element ${currentElement}`}>
<Hero/>
</Element>
<Element name="about" className={`element ${currentElement}`}>
<About/>
</Element>
<Element name="skills" className={`element ${currentElement}`}>
<Skills/>
</Element>
<Element name="services" className={`element ${currentElement}`}>
<Services/>
</Element>
<Element name="experience" className={`element ${currentElement}`}>
<Experience/>
</Element>
<Element name="education" className={`element ${currentElement}`}>
<Education/>
</Element>
<Element name="work" className={`element ${currentElement}`}>
<Work/>
</Element>
<Element name="contact" className={`element ${currentElement}`}>
<Contact/>
</Element>
</div>
</div>
<p className='bottom-text'>© Copyright 2024 All rights reserved.</p>
    </div>

  );
}

export default App;
