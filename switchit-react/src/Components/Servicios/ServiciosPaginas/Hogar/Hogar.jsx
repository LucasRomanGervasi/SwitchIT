import React from "react";
import Contactos from "../../../Contactos/Contactos";
import Nav from "../../../Nav/Nav";
import style from "./Hogar.module.css"
export default function Hogar(){
    return(
        <div className={style.containerHogar}>
            <div>
                <Nav/>
            </div>
            <div className={style.headerHogar}>
                <h1 className={style.HomeOffice}>Home Office<span className={style.Servicios}>Soluciones</span></h1>
            </div>
            <div id="Contactos">
                <Contactos/>
            </div>
        </div>
    )
}