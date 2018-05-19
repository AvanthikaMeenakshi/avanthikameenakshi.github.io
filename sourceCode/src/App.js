import React, { Component } from 'react';
// import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './App.css';
import {
  Route
} from 'react-router-dom';
import HomePageRenderer from './components/HomePageRenderer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePageRenderer} />
      </div>
    );
  }
}

export default App