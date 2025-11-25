import React from "react"; 
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <Router basename="/kasa">
      <Routes />
    </Router>
  );
}

export default App;
