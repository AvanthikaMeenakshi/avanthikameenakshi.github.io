import React from 'react';

const Header = () => (
  <div className="container-fluid header-bg">
    <div className="container">
      <div className="row menu">
        <div className="menu__wrapper d-none d-lg-block col-md-12">
          <nav className="">
            <ul>
              <li>
                <a href="#resume">Resume</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="menu__wrapper col-md-12 d-lg-none">
          <button type="button" className="menu__mobile-button">
            <span>
              <i className="fa fa-bars"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
