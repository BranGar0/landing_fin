import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <h2>Cuenta: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;
