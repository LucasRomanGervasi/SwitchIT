import './App.css';
import Nav from './Components/Nav/Nav.jsx'
import Home from './Components/Home/Home.jsx'
import News from "./Components/News IT/News.jsx"
import Herramientas from './Components/Herramientas/Herramientas';
import Nosotros from './Components/Nosotros/Nosotros';
import Contactos from './Components/Contactos/Contactos';

function App() {
  return (
    <div className="App">
      <div> <Nav/> </div>
      <div  id="Home"> <Home/> </div>
      <div > <News/> </div>
      <div > <Herramientas/> </div>
      <div id="Nosotros"> <Nosotros/> </div>
      <div id="Contactos"> <Contactos/> </div>
    </div>
  );
}

export default App;
