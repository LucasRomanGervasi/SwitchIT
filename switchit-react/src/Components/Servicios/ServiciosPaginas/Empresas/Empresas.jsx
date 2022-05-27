import React from "react";
import Contactos from "../../../Contactos/Contactos";
import Nav from "../../../Nav/Nav";
import style from "./Empresas.module.css"
export default function Hogar(){
    return(
        <div className={style.containerEmpresas}>
            <div>
                <Nav/>
            </div>
            <div className={style.headerEmpresas}>
                <h1 className={style.Empresas}>Empresas<span className={style.Servicios}>Servicios</span></h1>
            </div>
            <div id="Contactos">
                <Contactos/>
            </div>
        </div>
    )
}