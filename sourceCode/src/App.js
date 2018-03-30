import React, { Component } from 'react';
import './App.css';
import {
  Route
} from 'react-router-dom';
import mediumPosts from './components/mediumPosts';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={mediumPosts} />
      </div>
    );
  }
}

export default App