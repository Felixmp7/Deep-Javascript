import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// BOM - Browser object model

class Bom extends Component {
  abrirVentana = () => {
    window.open('https://github.com/Felixmp7', "", "width=400,height=400"); //Para abrir en otra pestaña
  }                                                                         // quito el segundo parametro.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Clickea el boton para abrir en una nueva ventana tu github.
          </p>
          <button className="boton" onClick={this.abrirVentana}>Abrir Ventana</button>
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

