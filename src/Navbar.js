import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="/logo192.png" alt="MFY Logo" height="36" />
        <span>mfy</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">ANASAYFA</a></li>
        <li><a href="#">KURUMSAL</a></li>
        <li><a href="#">HİZMETLER</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">İLETİŞİM</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#"><img src="/public/flag-tr.svg" alt="TR" height="18" /></a>
        <a href="#"><img src="/public/flag-en.svg" alt="EN" height="18" /></a>
        <a href="#"><img src="/public/user.svg" alt="User" height="18" /></a>
      </div>
    </div>
  </nav>
);

export default Navbar;
