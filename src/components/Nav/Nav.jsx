import React from 'react'
import './Nav.css'
import Logo from '../../assets/Nav/logo.png'
const Nav = () => {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section){
      section.scrollIntoView({behavior: 'smooth'});
    }
  };
  return (
    <div className='app-nav'>
        <img src={Logo} alt='logo'/>
        <div className='app-nav-links'>
            <button className='button-nav-1' onClick={() => handleNavClick('home-section')}>Home</button>
            <button className='button-nav-2' onClick={() => handleNavClick('about-section')}>About me</button>
            <button className='button-nav-2' onClick={() => handleNavClick('projects-section')}>Projects</button>
            <button className='button-nav-3' onClick={() => handleNavClick('contact-section')}>Contact</button>
        </div>
    </div>
  )
}

export default Nav