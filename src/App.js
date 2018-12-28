import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  
  handleBackground = () => {
    var elemento = document.querySelector('.App-header');
    elemento.style.backgroundColor = '#291A5B';
    console.log('Cambié el color');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p onClick={this.handleBackground}>Seleccion</p>
        </header>
      </div>
    );
  }
}

export default App;
