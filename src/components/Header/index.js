import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { withRouter, Link } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Resume', path: '/resume' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

const Header = (props) => {
  const [isActive, setActiveTab] = useState('/');
  console.log(props.location.pathname);
  useEffect(() => {
    setActiveTab(props.location.pathname);
  }, [props.location.pathname]);
  return (
    <div className="sidebar-content">
      <div className="logo">
        <i className="fa fa-code"></i>
        <div className="logo-text">Ava</div>
      </div>
      <ul className="sidebar-menu">
        {pages.map((page) => (
          <li
            key={page.title}
            className={`menu ${
              isActive && page.path === props.location.pathname
                ? 'menu-active'
                : ''
            }`}
          >
            <Link to={page.path}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default withRouter(Header);
