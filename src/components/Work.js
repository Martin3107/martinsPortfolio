import "./WorkCardStyle.css"
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"

import tezos from "../assets/tezos.jpg"


import React from 'react'
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container"> 
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val, ind)=>{
           return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.Text}
            view={val.view}/>
           )
          })}
           <div className="project-card">
            <img src={tezos} alt="image" />
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
            <p>This is text</p>
             <div className="pro-btns">
                <NavLink to="url.com" className="btn">view</NavLink>
                <NavLink to="url.com" className="btn">source  </NavLink>
             </div>
             
           </div>  



           
            </div>
         </div>
         </div>
        
  
  )
}

export default Work