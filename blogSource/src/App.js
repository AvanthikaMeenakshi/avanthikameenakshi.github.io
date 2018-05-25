import React, { Component } from 'react';
import './App.css';
import {
  Route
} from 'react-router-dom';
import HomePageRenderer from './components/HomePageRenderer';
import AboutPageContainer from './components/AboutPageContainer';

class App extends Component {
  render() {
    console.log(process.env);
    return (
      <div>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePageRenderer} />
        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={AboutPageContainer} />
        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={HomePageRenderer} />
      </div>
    );
  }
}

export default App
