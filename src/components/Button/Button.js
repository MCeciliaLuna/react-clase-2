import React from 'react';
import './Button.css'

const Button = ({texto, numero}) => {
  const helloWorld = (texto) => {
    document.write(texto)
  }
  return (
    <div>
      <button onClick={()=>helloWorld('¡Hola Mundo!')}>{texto} {numero}</button>
    </div>
  );
};

export default Button;