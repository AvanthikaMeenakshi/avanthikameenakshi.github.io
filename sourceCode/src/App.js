import React, { Component } from 'react';
import './App.css';
import {
  Route
} from 'react-router-dom';
import HomePageRenderer from './components/HomePageRenderer';
import AboutPageContainer from './components/AboutPageContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePageRenderer} />
        <Route exact path="/about" component={AboutPageContainer} />
        <Route exact path="/contact" component={HomePageRenderer} />
      </div>
    );
  }
}

export default App