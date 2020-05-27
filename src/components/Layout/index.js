import React from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

const Layout = (props) => (
  <main className="main">
    <Header />
    <div className="main-content">{props.children}</div>
  </main>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
