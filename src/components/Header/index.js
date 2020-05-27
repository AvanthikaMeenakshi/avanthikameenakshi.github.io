import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import { withRouter, Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

const pages = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Resume',
    path: '/resume',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Menu = ({ isActive, pathname, setIsToggleMenuExpanded }) => (
  <ul className="sidebar-menu">
    {pages.map((page) => (
      <li
        key={page.title}
        className={`menu ${
          isActive && page.path === pathname ? 'menu-active' : ''
        }`}
        onClick={() => {
          setIsToggleMenuExpanded(false);
        }}
      >
        <Link to={page.path}>{page.title}</Link>
      </li>
    ))}
  </ul>
);

const ToggleMenu = ({ isActive, pathname }) => {
  const [isToggleMenuExpanded, setIsToggleMenuExpanded] = useState(false);
  return (
    <div className="toggle-menu">
      <button
        onClick={() => setIsToggleMenuExpanded(!isToggleMenuExpanded)}
        className="toggler"
      >
        <i className="fas fa-bars"></i>
      </button>
      <Collapse isOpen={isToggleMenuExpanded}>
        <Menu
          isActive={isActive}
          pathname={pathname}
          setIsToggleMenuExpanded={setIsToggleMenuExpanded}
        />
      </Collapse>
    </div>
  );
};

const SidebarWrapper = ({ isActive, pathname }) => (
  <div className="sidebar">
    <div className="sidebar-content">
      <div className="logo">
        <i className="fa fa-code"></i>
        <div className="logo-text">Ava</div>
      </div>
      <Menu isActive={isActive} pathname={pathname} />
      <Footer />
    </div>
  </div>
);

const Header = (props) => {
  const [isActive, setActiveTab] = useState('/');
  const { pathname } = props.location;
  useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);
  return (
    <>
      <ToggleMenu isActive={isActive} pathname={pathname} />
      <SidebarWrapper isActive={isActive} pathname={pathname} />
    </>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(Header);
