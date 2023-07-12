import React, {useEffect} from 'react'
import logo from"../echoes-header.png"

import './Styles/navbar.css'

function Navbar() {

  useEffect(() => {
    const handleClick = () => {
      document.querySelector('.nav').classList.toggle('mobile-nav');
      document.querySelector('.menu-toggle').classList.toggle('is-active');
    };

    document.querySelector('.menu-toggle').addEventListener('click', handleClick);

    return () => {
      document.querySelector('.menu-toggle').removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <div className="page-wrapper">
    <div className="nav-wrapper">
      <nav className="navbar">
        <img
          src={logo}
          alt="Company Logo"/>
        <div className="menu-toggle" id="mobile-menu"  >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="nav no-search">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/transactions">Magazines</a></li>
          <li className="nav-item"><a href="/advisor">Events</a></li>
          <li className="nav-item"><a href="/profile">Team</a></li>
          <li className="nav-item"><a href="/">About Us</a></li>
        </ul>
      </nav>
    </div>
  </div>


  )
}

export default Navbar





