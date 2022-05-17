import React from "react";
import style from "./InfoCardEmpresas.module.css"
import  {BsArrowRight, BsHouseDoor} from "react-icons/bs";

export  default function infoCardEmpresas(){
    return(
        <div className={style.containerEmpresas}>
            <div className={style.containerTitulo}>
            <h1 className={style.titulo}>Empresas</h1>
            </div>
            <div className={style.empresasUno}>
            <h2 className={style.titulo2}> ¿Querés sumarte a la revolución digital?</h2>
            <p className={style.parrafo}>Desde instalaciones de servidores, hasta la comunicación
            digital, nuestro objetivo es analizar tu empresa para
            ofrecerte un asesoramiento integral y personalizado.</p>
            </div>
            <div className={style.empresasDos}>
                <a className={style.fotoEmpresas}><BsHouseDoor/></a>
                <a className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>
    )
}