import { useState, useEffect } from 'react';

function CicloDeVida() {
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    document.title = `Cuenta: ${cuenta}`;
  }, [cuenta]);

  return (
    <div>
      <h2>Cuenta con useEffect: {cuenta}</h2>
      <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
    </div>
  );
}

export default CicloDeVida;
