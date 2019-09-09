import React from 'react';
import ReactDOM from 'react-dom';
import ComingSoon from "./components/ComingSoon";
import Layout from "./components/Layout"
import './Stylesheets/app.scss';

const App = () => <Layout><ComingSoon /></Layout>

ReactDOM.render(<App />, document.getElementById('app'))
