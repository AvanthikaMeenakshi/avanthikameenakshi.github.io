import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from "./ComingSoon";
import './Stylesheets/app.scss';

const App = () => {
  return <ComingSoon />
}

ReactDOM.render(<App />, document.getElementById('app'))
