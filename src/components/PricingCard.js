import "./PricingCardStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
    <div className="card-container">
    <div className="card">
        <h3> </h3>
        <span className="bar"></span>
        <p className="btc"></p>
        <p></p>
        <p>  </p>
        <p> </p>
        <p> </p>
        <Link to="/contact" className="btn">
            
        </Link>
       
        </div>    
        <div className="card">
        <h3> </h3>
        <span className="bar"></span>
        <p className="btc"></p>
        <p></p>
        <p> </p>
        <p> </p>
        <p> </p>
        <Link to="/contact" className="btn">
            
        </Link>
       
        </div>  
        <div className="card">
        <h3> </h3>
        <span className="bar"></span>
        <p className="btc"></p>
        <p></p>
        <p></p>
        <p> </p>
        <p> </p>
        <Link to="/contact" className="btn">
            
        </Link>
       
        </div>      
    </div>
        </div>
  )
}

export default PricingCard