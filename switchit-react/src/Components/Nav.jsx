import React from "react";
import style from "./Nav.module.css"
import logo from "../assets/logo.png"

export default function Nav(){
    return(
        <div className={style.containerNav}>
            <div className={style.fotoNav}>
                <img alt="logo" className={style.foto} src={logo}></img>
            <div className={style.botonesNav}>
             <ul className={style.ulNav}>
                <li className={style.liNav}>
                    <a className={style.aNav} href="#Home">Home</a>
                </li>
                <li className={style.liNav}>
                    <a className={style.aNav} href="#Nosotros">Nosotros</a>
                </li>
                <li className={style.liNav}>
                    <a className={style.aNav} href="#Servicios">Servicios</a>
                </li>
                <li className={style.liNav}>
                    <a className={style.aNav} href="#Contactos">Contactos</a>
                </li>
             </ul>
            </div>
            </div>
            <div className={style.botonLogin}>
                <a className={style.boton}> Login</a>
            </div>
        </div>
    )
} 