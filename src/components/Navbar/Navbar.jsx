import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (  
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <img src={logo} alt="logo" />  
        </div>
        <div className="navbar-links__container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">What is AI-XP?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu__container scale-up-center">
          <div className="Navbar-menu__container-links">
            <p><a href="#Home">Home</a></p>
            <p><a href="#About">What is GPT3?</a></p>
            <p><a href="#Possibility">Open AI</a></p>
            <p><a href="#Features">Case Studies</a></p>
            <p><a href="#Blog">Library</a></p>
          </div>
          <div className="navbar-menu__container-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar