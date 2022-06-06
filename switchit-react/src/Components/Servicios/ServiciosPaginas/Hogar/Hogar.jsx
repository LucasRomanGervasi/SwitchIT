import React from "react";
import Contactos from "../../../Contactos/Contactos";
import Nav from "../../../Nav/Nav";
import style from "./Hogar.module.css";
import soporteTecnico from "./ImagenesHogar/soportetecnico.png";
import Networking from "./ImagenesHogar/networking.png";
import Domotica from "./ImagenesHogar/domotica.png";
import camaras from "./ImagenesHogar/camaras.png";

export default function Hogar(){
    return(
        <div className={style.containerHogar}>
            <div>
                <Nav/>
            </div>
            <div className={style.headerHogar}>
                <h1 className={style.HomeOffice}>Home Office<span className={style.Servicios}>Soluciones</span></h1>
            </div>
            <div className={style.container}>
            <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={soporteTecnico}></img>
                    <h3 className={style.nombreCaja}>Soporte técnicoy helpdesk</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Networking}></img>
                    <h3 className={style.nombreCaja}>Networking</h3>
                </div>
            </div>
            <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={Domotica}></img>
                    <h3 className={style.nombreCaja}>Domotica</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={camaras}></img>
                    <h3 className={style.nombreCaja}>camaras</h3>
                </div>
            </div>
            </div>
            <div id="Contactos">
                <Contactos/>
            </div>
        </div>
    )
}