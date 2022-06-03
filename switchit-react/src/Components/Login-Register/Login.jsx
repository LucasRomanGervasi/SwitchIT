import React from "react";
import style from "./Login.module.css"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import perfil from "./Imagenes Login-Register/perfil.png"
export default function Login() {
    return(
            <div className={style.containerLogin}>
            <div className={style.containerFormulario}>
            <div className={style.containerBotonAtras}>
                <a className={style.botonAtras} href="/"><BsFillArrowLeftCircleFill/></a>
            </div>
                <form className={style.formulario}>
                <h1 className={style.tituloFormulario}>Login</h1>
                    <input className={style.input} type="text" placeholder="Email"></input>
                    <input className={style.input} type="password" placeholder="Contraseña"></input>
                    <div className={style.containerBoton}>
                    <button className={style.boton}>Ingresar</button>
                </div>
                </form>
                    <div className={style.containerRegistrate}>
                        <h2 className={style.registrate}>¿Te olvidaste la contraseña? <a className={style.botonRegistrate} href="#CambiarContraseña">Cambiar contraseña</a></h2>
                        <h3 className={style.registrate}>¿No tienes cuenta? <a className={style.botonRegistrate} href="/Register">Registrate</a></h3>
                    </div>
            </div>
        </div>
    )
}