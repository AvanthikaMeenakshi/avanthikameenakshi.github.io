import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Hello from './pages/HelloPage';
import Profile from './pages/Profile';
import Blog from './pages/Blog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/resume" component={Profile} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
