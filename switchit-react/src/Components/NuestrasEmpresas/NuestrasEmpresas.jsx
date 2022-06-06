import React from "react"; 
import style from "./NuestrasEmpresas.module.css"
import americana from "./Imagenes Nuestras Empresas/americana.png"
import arauz from "./Imagenes Nuestras Empresas/arauz.png"
import autogroup from "./Imagenes Nuestras Empresas/autogroup.png"
import elbosque from "./Imagenes Nuestras Empresas/elbosque.png"

export default function NuestrasEmpresas(){
    return(
        <div className={style.containerHerramientas}>
        <div className={style.containerEmpresas}>
            <h1 className={style.titulo}> Empresas que confiaron en nosotros </h1>
            <div class="carruselInfinito" className={style.iconosEmpresas}>
            <div className={style.containerIcon}>
                <img className={style.icon} src={elbosque}></img>
                <img className={style.icon} src={autogroup}></img>
                <img  className={style.icon} src={arauz}></img>
                <img className={style.icon} src={americana}></img>

                <img className={style.icon} src={elbosque}></img>
                <img className={style.icon} src={autogroup}></img>
                <img className={style.icon} src={arauz}></img>
                <img className={style.icon} src={americana}></img>
            </div>
            </div>
        </div>
        <script > </script>
        </div>
    )
}