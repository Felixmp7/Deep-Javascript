import React, { Component } from 'react';
import './css/Formulario.css';
class Formulario extends Component {

  submit = e => {
    e.preventDefault(e);
    console.log('Submiteando');
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var edad = document.querySelector('#edad').value;
    console.log(nombre,apellido,edad);
  }
  render() {
    return (
      <div className="Formulario">
        <div className="Cont-Form">
          <form id="form" className="form" action="#" onSubmit={this.submit}>
            <label htmlFor="nombre">Nombre</label> 
            <input name="nombre" id="nombre" type="text" placeholder="Nombre"/>
            <label htmlFor="apellido">Apellido</label> 
            <input name="apellido" id="apellido" type="text" placeholder="Apellido" />
            <label htmlFor="edad">Edad</label> 
            <input name="edad" id="edad" type="number" placeholder="Edad" />
            <button type="submit">Validar</button>
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


