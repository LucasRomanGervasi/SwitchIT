import './App.css';
import Nav from './Components/Nav.jsx'
import Home from './Components/Home.jsx'
import News from "./Components/News.jsx"
import Herramientas from './Components/Herramientas';

function App() {
  return (
    <div className="App">
      <div> <Nav/> </div>
      <div> <Home/> </div>
      <div> <News/> </div>
      <div> <Herramientas/> </div>
    </div>
  );
}

export default App;
