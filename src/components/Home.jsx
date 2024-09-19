import React from 'react'
import Nav from './Nav/Nav'
import Hero from './Hero/Hero'
import About from './About/About'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import './Home.css'

const Home = () => {
  return (
    <div className='home-app'>
        <div className='nav-hero-app'>
            <div id='home-section' className='home-nav'><Nav/></div>
            <div id='hero-section' className='home-hero'><Hero/></div>
            <div id='about-section' className='home-about'><About/></div>
            <div id='projects-section' className='home-project'><Project/></div>
            <div id='contact-section' className='home-contact'><Contact/></div>
        </div>

    </div>
  )
}

export default Home