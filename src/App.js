import logo from './logo.svg';

import Funcionalidad from './components/funciodalidad';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
      {/* <Indicador/> */}
      <img src={logo} className="App-logo" alt="logo" />
      <Funcionalidad/>
      </div>
    </div>
  );
}

export default App;
