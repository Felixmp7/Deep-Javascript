import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// BOM - Browser object model

class Bom extends Component {
  abrirVentana = url => {
    window.open(url,"", "width=400,height=40");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/Bom.js</code> and save to reload.
          </p>
          <p onClick={this.abrirVentana('https://github.com/Felixmp7')}> Abrir Ventana</p>
        </header>
      </div>
    );
  }
}

export default Bom;

console.log(window); // Muestra un objeto completo con muchas propiedades de la ventana del browser
console.log(window.innerWidth); // Me indica el ancho de la ventana en el browser
console.log(window.innerHeight); // Me indica el alto de la ventana en el browser
console.log(window.location); // Accedo a las propiedades de la url

