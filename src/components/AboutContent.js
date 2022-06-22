import "./AboutContentStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

import about from "../assets/about.jpg"
import about1 from "../assets/about1.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>Im a front-end developer. I create responsive and secure websites for my clients.</p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <div className="img-stack top">
                <img src={about} className="img" alt="true"/>  
            </div>
            <div className="img-stack bottom">
                <img src={about1} className="img" alt="true"/>  
            </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent