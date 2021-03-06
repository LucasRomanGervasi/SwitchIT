import React from "react"
import style from "./Contactos.module.css"
import {FaFacebookF, FaLinkedinIn, FaInstagram} from "react-icons/fa"

export default function Contactos(){
    return(
        <div className={style.containerContactos}>
            <div className={style.contactosUno}>
                <div className={style.titulos}>
                    <h1 className={style.tituloUno}>Encontranos,</h1>
                    <h2 className={style.tituloDos}>tenemos soluciones.</h2>
                </div>
                <div className={style.containerInformacion}>
                    <p className={style.informacion}>info@<span className={style.informacionSwitch}>switchit</span>.com.ar</p>
                    <div className={style.subrayado}></div>
                    <p className={style.informacion}>11-6713-1996</p>
                    <div className={style.subrayado}></div>
                    <p className={style.informacion}>11-6744-3962</p>
                </div>
                <div className={style.iconos}>
                    <div className={style.containerFacebook}> 
                    <span className={style.facebook}>
                    <FaFacebookF/>
                    </span>
                    </div>
                    <div className={style.containerInstagram}> 
                    <span className={style.instagram}>
                    <FaInstagram/>
                    </span>
                    </div>
                    <div className={style.containerLinkedin}> 
                    <span className={style.linkedin}>
                    <FaLinkedinIn/>
                    </span>
                    </div>
                </div>
            </div>
            <div className={style.contactosDos}>
                <div className={style.containerTituloFormulario}>
                    <h1 className={style.tituloFormulario}>¿Cómo podemos ayudarte?</h1>
                </div>
                <div className={style.formulario}>
                    
                </div>
                <div className={style.containerBoton}>
                    <button className={style.boton}>Enviar</button>
                </div>
            </div>
        </div>
    )
}