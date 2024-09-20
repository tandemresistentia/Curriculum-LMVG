import React from 'react'
import './About.css'
import AboutImage from '../../assets/About/about-image.png'

const About = () => {
  return (
    <div className='about-app'>
      <p className='about-app-title'>About me<div className='bellow-bar'/></p>
      <div className='about-app-content'>
        <div className='about-app-content-left'>

          <p className='about-app-content-text'>👋 Hey there! I'm a seasoned 
          <span className='about-app-content-text-exalted'> Full 
          Stack Developer</span> passionate about crafting immersive web experiences. 
          With <span className='about-app-content-text-exalted'>years </span> 
          of coding under my belt, I excel in translating complex 
          concepts into user-friendly interfaces.</p>

          <p className='about-app-content-text'>💡 I'm fueled by 
          <span className='about-app-content-text-exalted'> innovation</span> and 
          constantly up-to-date on the latest tech trends. Whether it's collaborating 
          or going solo, I'm dedicated to delivering 
          <span className='about-app-content-text-exalted'> impactful</span> solutions. </p>

        </div>

        <div className='about-app-content-middle'>
          <img src={AboutImage} alt='AboutImage'/>
        </div>
        <div className='about-app-content-right'>
        
        <p className='about-app-content-text'>🚀 I'm all about creative problem-solving 
        and staying on the cutting edge. From 
        <span className='about-app-content-text-exalted'> front-end</span> flair to 
        <span className='about-app-content-text-exalted'> back-end</span> robustness,
         I've got the tools to make ideas come alive. </p>

          <p className='about-app-content-text'>🎉 Let's collaborate on creating 
          <span className='about-app-content-text-exalted'> remarkable </span> 
          online experiences together. Check out my portfolio and let's make ideas reality!</p>

        </div>
      </div>
      
    </div>
  )
}

export default About