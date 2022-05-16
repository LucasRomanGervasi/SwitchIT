import React from "react";
import style from "./Home.module.css"
import hogarFoto from "../assets/hogares.png"
import institucionesFoto from "../assets/instituciones.png"
import empresasFoto from "../assets/empresas.png"
import Hogar from "./Servicios/Hogar"

export default function Home(){
    return(
        <div className={style.containerHome}>
            <div className={style.presentacion}>
            <h1 className={style.titulo1}> Nos dedicamos a </h1>
            <h2 className={style.titulo2}> digitalizar marca </h2>
            <p className={style.parrafo}> Brindamos un servicio integral de soluciones informáticas que, sumado al conocimiento a nuestra basta experiencia en 
             gestión de negocios, nos permite brindarte la solución que tu negocio necesita para adaptarse a este nuevo mundo 
                 empresarial y crecer orgánicamente. </p>
            </div>
            <div className={style.presentacion2}> 
            <div className={style.botonServicios}>
                <a className={style.servicios}>Conocé nuestros servicios para</a>
            </div>
            <div className={style.cajaServicios}>
                <div className={style.hogar}>
                    <img className={style.foto} src={hogarFoto}></img>
                    <h3 className={style.nombreCaja}>Hogar</h3>
                </div>
                <div className={style.institucionesEducativas}>
                    <img className={style.foto} src={institucionesFoto}></img>
                    <h3 className={style.nombreCaja}> Instituciones Educativas</h3>
                </div>
                <div className={style.empresas}>
                    <img className={style.foto} src={empresasFoto}></img>
                    <h3 className={style.nombreCaja}>Empresas</h3>
                </div>
            </div>
            </div>
            <div className={style.containerHogar}>
                <Hogar/>
            </div>
        </div>
    )
}