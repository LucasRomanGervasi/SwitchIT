import React from "react";
import style from "./Nav.module.css"
import logo from "./Imagenes Nav/logo.png"

export default function Nav(){
    return(
        <div className={style.containerNav}>
            <div className={style.fotoNav}>
                <a href="/"><img  alt="logo" className={style.foto} src={logo}></img></a>
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
            <div className={style.botonHamburguesa}>
            <button className={style.botoncontainer}>
                    <span className={style.topline}> </span>
                    <span className={style.middleline}></span>
                    <span className={style.bottomline}></span>
            </button>
            </div>
            <div className={style.botonLogin}>
                <a href="Login"  className={style.boton}> Login</a>
            </div>
        </div>
    )
} 