import React from 'react'

import Navbar from "../components/NavBar"

import Footer from "../components/Footer"

import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="ABOUT." text= "I really love what i do. "/>
      <Footer/>
      <AboutContent/>

    </div>
  )
}

export default About