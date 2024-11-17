import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

import ArrowIndication from '../../assets/Hero/arrowindication.png'
import Shake from '../../assets/Hero/shake.png'
import ArrowSpeed from '../../assets/Hero/arrowspeed.png'
import Photo from '../../assets/Hero/photo.png'
import ChevronDown from '../../assets/Hero/chevron-down.png'
import ManCode from '../../assets/Hero/mancode.png'
import LVGResume from '../../assets/Resume.pdf'

const AnimatedTechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const techCategories = [
    {
      category: "Frontend",
      tech: "React / Angular / Vue"
    },
    {
      category: "Backend",
      tech: "Express / Node.js / Django / Spring Boot / .NET"
    },
    {
      category: "Databases",
      tech: "MongoDB / PostgreSQL"
    },
    {
      category: "Cloud",
      tech: "AWS / Azure / GCP"
    }
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="hero-subtitle"
    >
      {techCategories.map((category, index) => (
        <motion.p
          key={index}
          variants={item}
          whileHover={{ 
            x: 10,
            transition: { duration: 0.2 }
          }}
        >
          <span className="font-semibold">{category.category}: </span>
          {category.tech}
        </motion.p>
      ))}
    </motion.div>
  );
};

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
                    <motion.p 
                        className='hero-title'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi,
                    </motion.p>
                    <div className='hero-title-arrow'>
                        <motion.p 
                            className='hero-title'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            I'm Luis,
                        </motion.p>
                        <motion.img 
                            className='hero-arrow-indication' 
                            src={ArrowIndication} 
                            alt='arrowindication'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        /> 
                    </div>
                    <motion.p 
                        className='hero-title-1'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Full Stack Developer
                    </motion.p>
                    <AnimatedTechStack />
                </div>
                <div className='title-button-group'>
                    <motion.a 
                        href='https://www.linkedin.com/in/luis-miguel-vargas-garrido-1743a0114/'
                        target="_blank" 
                        rel="noreferrer" 
                        className='title-button-1'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img src={Shake} alt='shake'/>
                        <p>Let's Talk</p>
                    </motion.a>
                    <motion.button 
                        className='title-button-2' 
                        onClick={handleDownload}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img className='arrow-speed' src={ArrowSpeed} alt='arrowspeed'/>
                        <div className='button-circle-2'/>
                        <p>Download CV</p>
                    </motion.button>
                </div>
            </div>

            <div className='hero-middle'>
                <motion.img 
                    src={Photo} 
                    alt='profile'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.button 
                    className='chevron-down-class'
                    onClick={() => handleNavClick('about-section')}
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 1 
                    }}
                >
                    <img src={ChevronDown} alt='chevrondown'/>
                </motion.button>
            </div>

            <div className='hero-right'>
                <motion.img  
                    src={ManCode} 
                    alt='mancode'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                />
                <motion.div 
                    className='hero-right-group'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className='hero-title-small'>Empowering Dreams through</p>
                    <p className='hero-title-small-1'>Creative Innovation</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero