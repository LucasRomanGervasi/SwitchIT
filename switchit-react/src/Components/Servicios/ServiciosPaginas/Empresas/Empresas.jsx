import React from "react";
import Contactos from "../../../Contactos/Contactos";
import Nav from "../../../Nav/Nav";
import style from "./Empresas.module.css"
import soporteTecnico from "./ImagenesEmpresas/soportetecnico.png"
import businessManagement from "./ImagenesEmpresas/businessManagement.png"
import Analisis from "./ImagenesEmpresas/analisis.png"
import Domotica from "./ImagenesEmpresas/domotica.png"
import camaras from "./ImagenesEmpresas/camaras.png"
import Networking from "./ImagenesEmpresas/networking.png"
import Desarrollo from "./ImagenesEmpresas/desarrollo.png"
import Instalacion from "./ImagenesEmpresas/instalacion.png"
import Hosting from "./ImagenesEmpresas/hosting.png"
import Diseño from "./ImagenesEmpresas/diseno.png"
import gestion from "./ImagenesEmpresas/gestion.png"
import Marketing from "./ImagenesEmpresas/marketing.png"
export default function Empresas(){
    return(
        <div className={style.containerEmpresas}>
            <div>
                <Nav/>
            </div>
            <div className={style.headerEmpresas}>
                <h1 className={style.Empresas}>Empresas<span className={style.Servicios}>Servicios</span></h1>
            </div>
            <div className={style.container}>
            <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={soporteTecnico}></img>
                    <h3 className={style.nombreCaja}>Soporte técnicoy helpdesk</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={businessManagement}></img>
                    <h3 className={style.nombreCaja}>Business Management</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Analisis}></img>
                    <h3 className={style.nombreCaja}>Analisis, investigacion y Consultoria en IT</h3>
                </div>
                </div>
                <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={Domotica}></img>
                    <h3 className={style.nombreCaja}>Domótica</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={camaras}></img>
                    <h3 className={style.nombreCaja}>Cámaras de seguridad</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Networking}></img>
                    <h3 className={style.nombreCaja}>Networking</h3>
                </div>
                </div>
                <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={Desarrollo}></img>
                    <h3 className={style.nombreCaja}>Desarrollo de software</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Instalacion}></img>
                    <h3 className={style.nombreCaja}>Instalación y mantenimiento de Data Centers</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Hosting}></img>
                    <h3 className={style.nombreCaja}>Hosting y cloud server</h3>
                </div>
                </div>
                <div data-aos="zoom-in-up" className={style.containerCajas}>
                <div className={style.caja} >
                    <img className={style.foto} src={Diseño}></img>
                    <h3 className={style.nombreCaja}>Diseño Gráfico</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={gestion}></img>
                    <h3 className={style.nombreCaja}>Gestión de Redes Sociales</h3>
                </div>
                <div className={style.caja} >
                    <img className={style.foto} src={Marketing}></img>
                    <h3 className={style.nombreCaja}>Marketing Digital</h3>
                </div>
                </div>
            </div>
            <div id="Contactos">
                <Contactos/>
            </div>
        </div>
    )
}