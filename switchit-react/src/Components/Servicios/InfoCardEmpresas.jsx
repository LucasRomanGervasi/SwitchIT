import React from "react";
import style from "./InfoCardEmpresas.module.css"
import  {BsArrowRight, BsHouseDoor} from "react-icons/bs";
import empresas from "./FotosIconos/empresas.gif"

export  default function infoCardEmpresas(){
    return(
        <div className={style.containerEmpresas}>
            <div className={style.empresasUno}>
            <h1 className={style.titulo}>Empresas</h1>
            <h2 className={style.titulo2}> ¿Querés sumarte a la revolución digital?</h2>
            <p className={style.parrafo}>Desde instalaciones de servidores, hasta la comunicación
            digital, nuestro objetivo es analizar tu empresa para
            ofrecerte un asesoramiento integral y personalizado.</p>
            </div>
            <div className={style.empresasDos}>
                <img alt="empresas" className={style.fotoEmpresas} src={empresas}></img>
                <a className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>
    )
}