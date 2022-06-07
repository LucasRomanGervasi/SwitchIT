import React from "react";
import style from "./Register.module.css"
import {BsFillArrowLeftCircleFill, BsPlusCircleFill} from "react-icons/bs"
import perfil from "./Imagenes Login-Register/perfil.png"

export default function Register(){
    return(
        <div  className={style.containerRegister}>
            <div className={style.containerFormulario}>
             <div className={style.containerBotonAtras}>
                <a className={style.botonAtras} href="/Login"><BsFillArrowLeftCircleFill/></a>
            </div>
                <h1 className={style.tituloFormulario}>Registrate</h1>
                <form className={style.formulario}>
            <div className={style.containerImagen}>
                <img alt="imagen" className={style.imagen} src={perfil}></img>
                <a className={style.iconMas}><BsPlusCircleFill/> </a>
                </div>
                    <input className={style.input} type="text" placeholder="Nombre"></input>
                    <input className={style.input} type="text" placeholder="Apellido"></input>
                    <input className={style.input} type="text" placeholder="Email"></input>
                    <input className={style.input} type="password" placeholder="Contraseña"></input>
                    <input className={style.input} type="password" placeholder="Confirmar Contraseña"></input>
                    <div className={style.containerBoton}>
                    <button className={style.boton}>Crear Usuario</button>
                </div>
                </form>
            </div>
        </div>
    )
}