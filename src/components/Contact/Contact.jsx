import React from 'react'
import Nav from '../Nav/Nav'
import ContactTitle from '../../assets/Contact/contact-title.png'
import ContactArrow from '../../assets/Contact/contact-arrow.png'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-app'>
        <div className='contact-upper'>
            <img className='contact-title-image' src={ContactTitle} alt="Contact Title"/> 
            <a className='contact-href' href='https://www.linkedin.com/in/luis-miguel-vargas-garrido-1743a0114/'  target="_blank" rel="noreferrer">
                <img className='contact-arrow' src={ContactArrow} alt="Contact Arrow"/>
            </a>
        </div>
        <Nav/>
    </div>
  )
}

export default Contact