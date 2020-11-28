import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Hello from './pages/HelloPage';
import ResumeAndTimeline from './pages/ResumeAndTimeline';
import Blog from './pages/Blog';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

const App = () => (
  <Router history={browserHistory}>
    <Layout>
      <Switch>
        <Route exact path="/" component={Hello} />
        <Route exact path="/resume" component={ResumeAndTimeline} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </Layout>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
