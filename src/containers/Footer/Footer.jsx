import React from 'react'
import "./Footer.scss"
import logo from "../../assets/logo.svg"

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="footer-btn">
        <button type="button">Request Early Access</button>
      </div>
      <div className="footer-links">
        <div className="footer-links__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer-links__div">
          <h4>Links</h4>
          <a href="#">Overons</a>
          <a href="#">Social Media</a>
          <a href="#">Counters</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-links__div">
          <h4>Company</h4>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-links__div">
          <h4>Get in touch</h4>
          <a href="#">My Adress Here</a>
          <a href="#">066-585-478</a>
          <a href="#">info@.com</a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2022 AI-XP. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer