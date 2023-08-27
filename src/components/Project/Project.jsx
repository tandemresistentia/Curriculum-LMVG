import React from 'react'
import './Project.css'
import Project1 from '../../assets/Project/project-1.png'
import Project2 from '../../assets/Project/project-2.png'
import Project3 from '../../assets/Project/project-3.png'
import OrangeArrow from '../../assets/Project/orange-arrow.png'
import WhiteArrow from '../../assets/Project/white-arrow.png'
import Github from '../../assets/Project/github.png'
import Linkedin from '../../assets/Project/linkedin.png'
import Gmail from '../../assets/Project/gmail.png'
const Project = () => {
  const emailAddress = 'luismvg41@gmail.com';
  return (
    <div className='project-app'>
        <p className='project-title'>A Peek at some OF MY  🖥️  
        <span className='project-title-exalted'>Projects</span> <div className='project-bellow-bar'/></p>
        <div className='project-container'>

            <div className='project-container-item'>
                <img className='project-container-item-image' src={Project1} alt="Project1"/>
                <p className='project-container-item-title'>E-commerce for Shoe enthusiasts</p>
                <p className='project-container-item-subtitle'>Effortless shoe shopping with engaging interface.</p>
                <div className='project-container-item-attribute-group'>
                  <p className='project-container-item-attribute'>React</p>
                  <p className='project-container-item-attribute'>Django</p>
                </div>
                <div className='project-container-item-href-group'>
                <a href='https://footfab-front-production.up.railway.app/' target="_blank" rel="noreferrer" className='project-container-item-href-1'>
                  Live Website <img className='project-orange-arrow' src={OrangeArrow} alt="Orange Arrow"/></a>
                <a href='https://github.com/tandemresistentia/Footfab' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
                View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/></a>
                </div>
            </div>

            <div className='project-container-item'>
                <img className='project-container-item-image' src={Project2} alt="Project2"/>
                <p className='project-container-item-title'>Swimtrack. A fitness website</p>
                <p className='project-container-item-subtitle'>Empowers swimmers to track progress and access to resources.</p>
                <div className='project-container-item-attribute-group'>
                  <p className='project-container-item-attribute'>React</p>
                  <p className='project-container-item-attribute'>Django</p>
                </div>
                <div className='project-container-item-href-group'>
                <a href='https://swimming-fitness.up.railway.app/' target="_blank" rel="noreferrer" className='project-container-item-href-1'>
                  Live Website <img className='project-orange-arrow' src={OrangeArrow} alt="Orange Arrow"/></a>
                <a href='https://github.com/tandemresistentia/Swimming-Fitness' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
                View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/></a>
                </div>
            </div>

            <div className='project-container-item'>
                <img className='project-container-item-image' src={Project3} alt="Project3"/>
                <p className='project-container-item-title'>Doneminder. Task management</p>
                <p className='project-container-item-subtitle'>Seamlessly create, manage, and track tasks and reminders.</p>
                <div className='project-container-item-attribute-group'>
                  <p className='project-container-item-attribute'>React</p>
                  <p className='project-container-item-attribute'>Django</p>
                </div>
                <div className='project-container-item-href-group'>
                <a href='https://doneminder-front-production.up.railway.app/' target="_blank" rel="noreferrer" className='project-container-item-href-1'>
                  Live Website <img className='project-orange-arrow' src={OrangeArrow} alt="Orange Arrow"/></a>
                <a href='https://github.com/tandemresistentia/doneminder' target="_blank" rel="noreferrer" className='project-container-item-href-2'>
                View Code <img className='project-white-arrow' src={WhiteArrow} alt="White Arrow"/></a>
                </div>
            </div>
        </div>
        <div className='project-socials'>
          <a href='https://github.com/tandemresistentia' target="_blank" rel="noreferrer"><img src={Github} alt="github"/></a>
          <a href='https://www.linkedin.com/in/luis-miguel-vargas-garrido-1743a0114/' 
          target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin"/></a>
          <a className='project-socials-title' href={`mailto:${emailAddress}`}><img src={Gmail} alt="gmail"/></a>
        </div>
    </div>
  )
}

export default Project