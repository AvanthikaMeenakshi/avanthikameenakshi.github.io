import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Books from './pages/Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stylesheets/app.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/books" component={Books} />
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
