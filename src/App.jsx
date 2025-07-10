import './App.css';
import Saludo from './components/Saludo';
import Contador from './components/Contador';
import Boton from './components/Boton';
import CicloDeVida from './components/CicloDeVida';

function App() {
  return (
    <div>
      <Saludo nombre="Carlos" />
      <Contador />
      <Boton />
      <CicloDeVida />
    </div>
  );
}

export default App;

