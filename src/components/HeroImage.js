import "./HeroImageStyle.css";
import React from "react";

import IntroImg from "../components/code.webp";

import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>Front-end Developer</h1>
            <div>
                <Link to="/Project" 
                className="btn">Project</Link>
                <Link to="/Contact" 
                className="btn btn-light">Contact</Link>
            </div>

        </div>
    </div>
  );
};

export default HeroImage;
    
    


