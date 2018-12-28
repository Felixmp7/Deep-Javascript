import React, { Component } from 'react';
import './css/Formulario.css';
class Formulario extends Component {
  render() {
    return (
      <div className="Formulario">
        <div className="Cont-Form">
          <form className="form" action="#">
            <label htmlFor="nombre">Nombre</label> 
            <input name="nombre" id="nombre" type="text" placeholder="Nombre"/>
            <label htmlFor="apellido">Apellido</label> 
            <input name="apellido" id="apellido" type="text" placeholder="Apellido" />
            <label htmlFor="edad">Edad</label> 
            <input name="edad" id="edad" type="number" placeholder="Edad" />
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;

/*Hacer un formulario con 3 botones.
Hacer un boton de submit.
Mostrar los datos en la pantalla.
Tener un boton que al darle click muestre los datos actuales del formulario.*/


