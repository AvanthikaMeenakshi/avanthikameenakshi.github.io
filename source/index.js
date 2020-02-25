import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stylesheets/app.scss";

const App = () => (
  <Layout>
  </Layout>
);

ReactDOM.render(<App />, document.getElementById("app"));
