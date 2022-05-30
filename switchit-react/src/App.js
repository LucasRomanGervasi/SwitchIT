import './App.css';
import Nav from './Components/Nav/Nav.jsx'
import Home from './Components/Home/Home.jsx'
import News from "./Components/News IT/News.jsx"
import Herramientas from './Components/Herramientas/Herramientas';
import Nosotros from './Components/Nosotros/Nosotros';
import Contactos from './Components/Contactos/Contactos';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Hogar from './Components/Servicios/ServiciosPaginas/Hogar/Hogar';
import InstitucionesEducativas from './Components/Servicios/ServiciosPaginas/Instituciones/InstitucionesEducativas';
import Empresas from './Components/Servicios/ServiciosPaginas/Empresas/Empresas';
import Login from './Components/Login-Register/Login';
import Register from './Components/Login-Register/Register';
import { useState } from 'react';
import Loading from './Components/Loading/Loading';

function AppPrincipal() {
  return (
    <div className="App">
      <div> <Nav/> </div>
      <div > <Home/> </div>
      <div > <News/> </div>
      <div > <Herramientas/> </div>
      <div id="Nosotros"> <Nosotros/> </div>
      <div id="Contactos"> <Contactos/> </div>
    </div>
  );
}

export default function App(){
    return(
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<AppPrincipal/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path='/Register' element={<Register/>}></Route>
    <Route exact path='/Hogar' element={<Hogar/>}/>
    <Route exact path='/InstitucionesEducativas' element={<InstitucionesEducativas/>}/>
    <Route exact path='/Empresas' element={<Empresas/>}/>
  </Routes>
  </BrowserRouter>
    )
    }

