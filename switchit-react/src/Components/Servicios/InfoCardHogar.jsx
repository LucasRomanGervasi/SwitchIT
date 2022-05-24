import React from "react";
import style from "./InfoCardHogar.module.css"
import hogar from "./FotosIconos/home.gif"
import  {BsArrowRight, BsHouseDoor} from "react-icons/bs";

export  default function infoCardHogar(){
    return(
        <div id="serviciosHome" className={style.containerHogar}>
            <div className={style.hogarUno}>
            <h1 className={style.titulo}>Hogar</h1>
            <div className={style.hogarTexto}>
            <h2 className={style.titulo2}> ¿Buscás tener una casa inteligente? </h2>
            <p className={style.parrafo}> Nuestro objetivo es que tengas el control de todos los
            elementos de tu casa, fomentando la conectividad
            constante con tu hogar.</p>
            </div>
            </div>
            <div className={style.hogarDos}>
                <img alt="casa" className={style.fotoHogar} src={hogar}></img>
                <a className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>
    )
}
/*    <div className={style.containerHogar}>
            <div className={style.hogarUno}>
            <h1 className={style.titulo}>Hogar</h1>
            <ul className={style.listado}>
                <li className={style.nombreListado}><span className={style.iconBall}><BsFillCircleFill/></span> Soporte/servicio técnico</li>
                <li className={style.nombreListado}><span className={style.iconBall}><BsFillCircleFill/></span> Networking/redes</li>
                <li className={style.nombreListado}><span className={style.iconBall}><BsFillCircleFill/></span>Cámaras</li>
                <li className={style.nombreListado}><span className={style.iconBall}><BsFillCircleFill/></span>Domótica</li>
            </ul>
            </div>
            <div className={style.hogarDos}>
                <a className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>*/