import React from 'react';
import Header from '../Header';

const Layout = (props) => (
  <main className="main">
    <div className="sidebar">
      <Header />
    </div>
    <div className="main-content">{props.children}</div>
  </main>
);

export default Layout;
