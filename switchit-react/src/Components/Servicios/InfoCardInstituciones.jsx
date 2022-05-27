import React from "react";
import style from "./InfoCardInstituciones.module.css"
import  {BsArrowRight} from "react-icons/bs";
import mochila from "./FotosIconos/mochila.gif"

export default function infoCardInstituciones() {
    return(
        <div id="serviciosInstitutos" className={style.containerInstituciones}>
            <div className={style.institucionesUno}>
            <h1 className={style.titulo}>Instituciones Educativas</h1>
            <div className={style.institucionesTexto}>
            <h2 className={style.titulo2}>¿Buscás digitalizar tu institución?</h2>
            <p className={style.parrafo}>Preparamos aulas híbridas e implementamos Google For
            Education con el objetivo de brindar una experiencia
            óptima en el dictado de clases, tanto en la presencialidad
            como en la virtualidad.</p>
            </div>
            </div>
            <div className={style.institucionesDos}>
                <img alt="mochila" className={style.fotoInstituciones} src={mochila}></img>
                <a href="InstitucionesEducativas" className={style.boton}>Conocé más <BsArrowRight/></a>
            </div>
        </div>
    )
}