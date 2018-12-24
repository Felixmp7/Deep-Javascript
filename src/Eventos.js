import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Eventos extends Component {

  cambiar = () => {
    var fondo = document.querySelector('.App-header');
    var texto = document.querySelector('p');
    fondo.style.backgroundColor = 'white';
    texto.style.color = '#282c34';
    console.log('Cambie el color');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button className="boton" onClick={this.cambiar}>Presioname</button>
        </header>
      </div>
    );
  }
}

export default Eventos;



/*  boton.addEventListener('click', function(){
    cambiarFondo();
  });*/

/*Eventos: 
-click
-mouseover
-mouseout
-focus
-blur
-keydown
-keypress
-keyup
*/

