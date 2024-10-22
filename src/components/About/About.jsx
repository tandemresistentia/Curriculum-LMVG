import React from 'react'
import { motion } from 'framer-motion'
import './About.css'
import AboutImage from '../../assets/About/about-image.png'
import { Code, Database, Layout, Server } from 'lucide-react'

const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, -1, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2
        }
      }
    }
  };

  return (
    <div className='about-app' id="about-section">
      <motion.p 
        className='about-app-title'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About me
        <motion.div 
          className='bellow-bar'
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.p>

      <div className='about-app-content'>
        <div className='about-app-content-left'>
          <motion.p 
            className='about-app-content-text'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            👋 Hey there! I'm a seasoned 
            <span className='about-app-content-text-exalted'> Full Stack Developer </span> 
            passionate about crafting immersive web experiences. With 
            <span className='about-app-content-text-exalted'> years </span> 
            of coding under my belt, I excel in translating complex concepts into user-friendly interfaces.
            <span className='tech-icons'>
              <Code className='tech-icon' />
              <Layout className='tech-icon' />
            </span>
          </motion.p>

          <motion.p 
            className='about-app-content-text'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            💡 I'm fueled by 
            <span className='about-app-content-text-exalted'> innovation </span> 
            and constantly up-to-date on the latest tech trends. Whether it's collaborating or going solo, 
            I'm dedicated to delivering 
            <span className='about-app-content-text-exalted'> impactful </span> solutions.
            <span className='tech-icons'>
              <Database className='tech-icon' />
              <Server className='tech-icon' />
            </span>
          </motion.p>
        </div>

        <div className='about-app-content-middle'>
          <motion.img 
            src={AboutImage} 
            alt='AboutImage'
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
        </div>

        <div className='about-app-content-right'>
          <motion.p 
            className='about-app-content-text'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.4 }}
          >
            🚀 I'm all about creative problem-solving and staying on the cutting edge. From 
            <span className='about-app-content-text-exalted'> front-end </span> 
            flair to 
            <span className='about-app-content-text-exalted'> back-end </span> 
            robustness, I've got the tools to make ideas come alive.
          </motion.p>

          <motion.p 
            className='about-app-content-text'
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.6 }}
          >
            🎉 Let's collaborate on creating 
            <span className='about-app-content-text-exalted'> remarkable </span> 
            online experiences together. Check out my portfolio and let's make ideas reality!
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default About