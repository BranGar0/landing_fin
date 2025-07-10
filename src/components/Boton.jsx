import { useState } from 'react';

function Boton() {
  const [mensaje, setMensaje] = useState('Haz clic en el botón');

  const manejarClick = () => {
    setMensaje('¡Gracias por hacer clic!');
  };

  return (
    <div>
      <p>{mensaje}</p>
      <button onClick={manejarClick}>Haz clic aquí</button>
    </div>
  );
}

export default Boton;

