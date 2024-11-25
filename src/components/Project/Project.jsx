import React from 'react'
import { motion } from 'framer-motion'
import './Project.css'
import Project1 from '../../assets/Project/project-1.png'
import Project2 from '../../assets/Project/project-2.png'
import Project3 from '../../assets/Project/project-3.png'
import Project4 from '../../assets/Project/project-4.png'
import Project5 from '../../assets/Project/project-5.png'
import WhiteArrow from '../../assets/Project/white-arrow.png'
import OrangeArrow from '../../assets/Project/orange-arrow.png'
import Github from '../../assets/Project/github.png'
import Linkedin from '../../assets/Project/linkedin.png'
import Gmail from '../../assets/Project/gmail.png'
import { Database, Globe, Server, ShoppingBag, Waves, Code2,Droplet } from 'lucide-react'

const Project = () => {
  const emailAddress = 'luismvg41@gmail.com';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const ProjectIcon = ({ type }) => {
    const icons = {
      ecommerce: <ShoppingBag className="project-icon" />,
      swimming: <Waves className="project-icon" />, 
      monitoring: <Droplet className="project-icon" />,
      code: <Code2 className="project-icon" />
    };
    return icons[type];
  };

  return (
    <div className='project-app'>
      <motion.p 
        className='project-title'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A Peek at some OF MY 🖥️ 
        <span className='project-title-exalted'>Projects</span>
        <motion.div 
          className='project-bellow-bar'
          initial={{ width: 0 }}
          animate={{ width: "65%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.p>

      <motion.div 
        className='project-container'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className='project-container-item'
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div className="project-image-container">
            <img className='project-container-item-image' src={Project4} alt="Project3"/>
          </div>
          <div className="project-content">
            <div className="project-header">
              <p className='project-container-item-title'>
                <ProjectIcon type="code" /> ByteLabyrinth: Custom Web Development Solutions Platform
              </p>
            </div>
            <p className='project-container-item-subtitle'>ByteLabyrinth is a professional MEAN stack platform that bridges the gap between clients and web development services.</p>
            <div className='project-container-item-href-group'>
              <a href='https://github.com/tandemresistentia/ByteLabyrinth' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
                View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/>
              </a> 
              <a href='https://www.bytelabyrinth.com/' target="_blank" rel="noreferrer" className='project-container-item-href-1'>
                  Live Website <img className='project-orange-arrow' src={OrangeArrow} alt="Orange Arrow"/></a>
            </div>
          </div>
        </motion.div>

            <motion.div 
        className='project-container-item'
        variants={itemVariants}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
      >
        <div className="project-image-container">
          <img className='project-container-item-image' src={Project5} alt="TeamSync Platform"/>
        </div>
        <div className="project-content">
          <div className="project-header">
            <p className='project-container-item-title'>
              <ProjectIcon type="code" /> TeamSync: Enterprise Workforce Orchestration Platform
            </p>
          </div>
          <p className='project-container-item-subtitle'>
            A comprehensive resource management solution that streamlines team coordination, project tracking, and resource allocation through real-time analytics.
          </p>
          <div className='project-container-item-href-group'>
            <a href='https://github.com/tandemresistentia/TeamSync' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
              View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/>
            </a> 
          </div>
        </div>
      </motion.div>

        <motion.div 
          className='project-container-item'
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div className="project-image-container">
            <img className='project-container-item-image' src={Project3} alt="Project3"/>
          </div>
          <div className="project-content">
            <div className="project-header">
              <p className='project-container-item-title'>
                <ProjectIcon type="monitoring" /> Terra - Advanced Pipeline Leak Detection
              </p>
            </div>
            <p className='project-container-item-subtitle'>An interactive water leak management system with real-time metrics, geographical mapping, customizable filtering, and detailed analysis tools.</p>
          </div>
        </motion.div>

      </motion.div>

      <motion.div 
  className='project-container'
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div 
    className='project-container-item'
    variants={itemVariants}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
  >
    <div className="project-image-container">
      <img className='project-container-item-image' src={Project1} alt="Project1"/>
    </div>
    <div className="project-content">
      <div className="project-header">
        <p className='project-container-item-title'>
          <ProjectIcon type="ecommerce" /> E-commerce for Shoe enthusiasts
        </p>
      </div>
      <p className='project-container-item-subtitle'>Effortless shoe shopping with engaging interface.</p>
      <div className='project-container-item-href-group'>
        <a href='https://github.com/tandemresistentia/Footfab' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
          View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/>
        </a> 
      </div>
    </div>
  </motion.div>
  <motion.div 
    className='project-container-item'
    variants={itemVariants}
    whileHover={{ y: -10, transition: { duration: 0.2 } }}
  >
    <div className="project-image-container">
      <img className='project-container-item-image' src={Project2} alt="Project2"/>
    </div>
    <div className="project-content">
      <div className="project-header">
        <p className='project-container-item-title'>
          <ProjectIcon type="swimming" /> Swimtrack. A fitness website
        </p>
      </div>
      <p className='project-container-item-subtitle'>Empowers swimmers to track progress and access to resources.</p>
      <div className='project-container-item-href-group'>
        <a href='https://github.com/tandemresistentia/Swimming-Fitness' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
          View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/>
        </a> 
      </div>
    </div>
  </motion.div>
</motion.div>

      <motion.div 
        className='project-socials'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.a 
          href='https://github.com/tandemresistentia' 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={Github} alt="github"/>
        </motion.a>
        <motion.a 
          href='https://www.linkedin.com/in/luis-miguel-vargas-garrido-1743a0114/' 
          target="_blank" 
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={Linkedin} alt="linkedin"/>
        </motion.a>
        <motion.a 
          className='project-socials-title' 
          href={`mailto:${emailAddress}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={Gmail} alt="gmail"/>
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Project