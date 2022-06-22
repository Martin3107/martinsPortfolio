import "./FooterStyle.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
          <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
          <div>
            <p>
              no.3 Chituga street.
              </p>
              <p>
                Port Harcourt.
            </p>
          </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
          0906-970-3818</h4>       
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
          martinnwosu74@gmail.com</h4>
        </div>
</div>
        <div className="right">
          <h4>
            About me
          </h4>
          <p>I am Martin Nwosu, throughout my training, I have contributed to impacting business outcomes through effective organization, prioritization, and execution of key projects. My skills and qualification are an ideal match to the IT manager requirement and will bring immediate value to this companies technology goals.
I am independently motivated, yet I appreciate team efforts and collaborate productively within groups.</p>
<div className="social">
<FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
<FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
<FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
<FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
<FaGithub size={30} style={{ color: "#fff", marginRight: "1rem"}}/>
  
</div>
        </div>

      </div>
      </div>
       
  )
  }
    export default Footer