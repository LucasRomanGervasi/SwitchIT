import React from "react";
import Contactos from "../../../Contactos/Contactos";
import Nav from "../../../Nav/Nav";
import style from "./InstitucionesEducativas.module.css"

export default function InstitucionesEducativas(){
    return(
        <div className={style.containerInstitucionesEducativas}>
            <div>
                <Nav/>
            </div>
            <div className={style.headerInstituciones}>
                <h1 className={style.Instituciones}>Instituciones <br/> Educativas<span className={style.Servicios}>Servicios</span></h1>
            </div>
            <div id="Contactos">
                <Contactos/>
            </div>
        </div>
    )
}