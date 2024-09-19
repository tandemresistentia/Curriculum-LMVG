import React from 'react'
import './Hero.css'

import ArrowIndication from '../../assets/Hero/arrowindication.png'
import Shake from '../../assets/Hero/shake.png'
import ArrowSpeed from '../../assets/Hero/arrowspeed.png'
import Photo from '../../assets/Hero/photo.png'
import ChevronDown from '../../assets/Hero/chevron-down.png'
import ManCode from '../../assets/Hero/mancode.png'
import LVGResume from '../../assets/Resume.pdf'
const Hero = () => {

    function handleDownload() {
        const link = document.createElement('a');
        link.href = LVGResume; 
        link.target = '_blank'; 
        link.download = 'LMVG-Resume.pdf'; 
        link.click();
    }
    const handleNavClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section){
          section.scrollIntoView({behavior: 'smooth'});
        }
      };
  return (
    <div className='hero-app'>

        <div className='hero-left'>
            <div className='hero-left-up'>
                <p className='hero-title'>Hi,</p>
                <div className='hero-title-arrow'>
                    <p className='hero-title'>I'm Luis,</p>
                    <img className='hero-arrow-indication' src={ArrowIndication} alt='arrowindication'/> 
                </div>
                <p className='hero-title-1'>Full Stack Developer</p>
                <p className='hero-subtitle'>React  /  Django  /  Python  /  AWS</p>
            </div>
            <div className='title-button-group'>
                <a href='https://www.linkedin.com/in/luis-miguel-vargas-garrido-1743a0114/'
                 target="_blank" rel="noreferrer" className='title-button-1'>
                    <img  src={Shake} alt='shake'/>
                    <p>Let's Talk</p>
                </a>
                <button className='title-button-2' onClick={handleDownload}>
                    <img className='arrow-speed' src={ArrowSpeed} alt='arrowspeed'/>
                    <div className='button-circle-2'/>
                    <p>Download CV</p>
                </button>
            </div>
        </div>

        <div className='hero-middle'>
            <img src={Photo} alt='profile'/>
            <button className='chevron-down-class' onClick={() => handleNavClick('about-section')}><img src={ChevronDown} alt='chevrondown'/></button>
        </div>

        <div className='hero-right'>
            <img  src={ManCode} alt='mancode'/>
            <div className='hero-right-group'>
                <p className='hero-title-small'>Empowering Dreams through</p>
                <p className='hero-title-small-1'>Creative Innovation</p>
            </div>
        </div>

    </div>
  )
}

export default Hero