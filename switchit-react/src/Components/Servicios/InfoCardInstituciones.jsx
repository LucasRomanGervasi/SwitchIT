import React from "react";
import style from "./InfoCardInstituciones.module.css"
import  {BsArrowRight, BsHouseDoor} from "react-icons/bs";

export default function infoCardInstituciones() {
    return(
        <div className={style.containerInstituciones}>
            <div className={style.containerTitulo}>
            <h1 className={style.titulo}>Instituciones Educativas</h1>
            </div>
            <div className={style.institucionesUno}>
            <h2 className={style.titulo2}>¿Buscás digitalizar tu institución?</h2>
            <p className={style.parrafo}>Preparamos aulas híbridas e implementamos Google For
            Education con el objetivo de brindar una experiencia
            óptima en el dictado de clases, tanto en la presencialidad
            como en la virtualidad.</p>
            </div>
            <div className={style.institucionesDos}>
                <a className={style.fotoInstituciones}><BsHouseDoor/></a>
                <a className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>
    )
}