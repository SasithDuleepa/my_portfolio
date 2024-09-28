import './App.css';


import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import Work from './work/work';
import Skills from './skills/skills';
import Services from './services/services';
import Home from './home/home';
import Experience from './experience/experience';
import Education from './education/education';
import Contact from './contact/contact';
import About from './about/about';


function App() {

    // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

   return (
    <div className='App'>

      <div className='Sidebar'>
        <p className='sidebar-name'>Sasith Duleepa</p>

        <p className='occupation-p'>SOFTWARE ENGINEER IN SRI LANKA</p>

    

        <Link
      className="link"
      activeClass="link active"
      to="home"
      spy={true}
      smooth={true}
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
            {/* Element components that act as scroll targets */}
    <Element name="home" className="element">
      <Home/>
    </Element>
    <Element name="about" className="element">
      <About/>
    </Element>
    <Element name="skills" className="element">
      <Skills/>
    </Element>
    <Element name="services" className="element">
      <Services/>
    </Element>
    <Element name="experience" className="element">
      <Experience/>
    </Element>
    <Element name="education" className="element">
      <Education/>
    </Element>
    <Element name="work" className="element">
      <Work/>
    </Element>
    <Element name="contact" className="element">
      <Contact/>
    </Element>
      </div>




    </div>
  );
}

export default App;
