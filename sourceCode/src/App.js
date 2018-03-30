import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from 'react-router-dom';

const Main = () => (<div>hksjhkdjsh</div>);

class App extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/" component={Main} />
        </div>
      </Switch>
    );
  }
}

export default App