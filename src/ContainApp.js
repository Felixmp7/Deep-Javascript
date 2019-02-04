import React, { Component } from 'react';
import Home from './Home';
import Navbar from './Navbar';

class ContainApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default ContainApp;
