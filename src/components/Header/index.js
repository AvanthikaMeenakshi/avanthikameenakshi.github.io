import React from 'react';

const Header = () => (
  <div className="sidebar-content">
    <div className="logo">
      <i className="fa fa-code"></i>
      <div className="logo-text">Ava</div>
    </div>
    <ul className="sidebar-menu">
      <li className="menu">
        <a href="/">Home</a>
      </li>
      <li className="menu">
        <a href="/resume">Resume</a>
      </li>
      <li className="menu">
        <a href="/portfolio">Portfolio</a>
      </li>
      <li className="menu">
        <a href="/testimonials">Testimonials</a>
      </li>
      <li className="menu">
        <a href="/blog">Blog</a>
      </li>
      <li className="menu">
        <a href="/books">Book Reviews</a>
      </li>
      <li className="menu">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
);

export default Header;
