import React from "react"; 
import style from "./Herramientas.module.css"
/* TECNOLOGIAS */
import anyConnect from "./Imagenes Herramientas/Tecnologias/AnyConnect.png"
import anyDesk from "./Imagenes Herramientas/Tecnologias/AnyDesk.png"
import AWS from "./Imagenes Herramientas/Tecnologias/AWS.png"
import Docker from "./Imagenes Herramientas/Tecnologias/Docker.png"
import Firebase from "./Imagenes Herramientas/Tecnologias/Firebase.png"
import Gatsby from "./Imagenes Herramientas/Tecnologias/Gatsby.png"
import GoogleCloud from "./Imagenes Herramientas/Tecnologias/Google-Cloud.png"
import MicrosoftRD from "./Imagenes Herramientas/Tecnologias/MicrosoftRD.png"
import MongoDB from "./Imagenes Herramientas/Tecnologias/MongoDB.png"
import NodeJS from "./Imagenes Herramientas/Tecnologias/NodeJS.png"
import ReactIcon from "./Imagenes Herramientas/Tecnologias/ReactIcon.png"
/* PARTNERS */
import Cisco from "./Imagenes Herramientas/Partners/Cisco.png"
import DELL from "./Imagenes Herramientas/Partners/DELL-EMC.png"
import HPEnterprise from "./Imagenes Herramientas/Partners/HP-Enterprise.png"
import Microsoft from "./Imagenes Herramientas/Partners/Microsoft-W.png"
import Promox from "./Imagenes Herramientas/Partners/Promox.png"
import TP from "./Imagenes Herramientas/Partners/TP-Link.png"

export default function Herramientas(){
    return(
        <div className={style.containerHerramientas}>
        <div className={style.containerPartners}>
            <h1 className={style.titulo}> Partners </h1>
            <div class="carruselInfinito" className={style.iconosPartners}>
            <div className={style.containerIcon}>
                <img alt="icon" className={style.icon} src={Cisco}></img>
                <img alt="icon" className={style.icon} src={DELL}></img>
                <img alt="icon" className={style.icon} src={HPEnterprise}></img>
                <img alt="icon" className={style.icon} src={Microsoft}></img>
                <img alt="icon" className={style.icon} src={Promox}></img>
                <img alt="icon" className={style.icon} src={TP}></img>

                <img alt="icon" className={style.icon} src={Cisco}></img>
                <img alt="icon" className={style.icon} src={DELL}></img>
                <img alt="icon" className={style.icon} src={HPEnterprise}></img>
                <img alt="icon" className={style.icon} src={Microsoft}></img>
                <img alt="icon" className={style.icon} src={Promox}></img>
                <img alt="icon" className={style.icon} src={TP}></img>
            </div>
            </div>
        </div>  
        <div className={style.containerTecnologias}>
            <h1 className={style.titulo}> Tecnologias</h1>
            <div className={style.iconosTecnologias}>
                <div className={style.containerIcon}>
                <img alt="icon" className={style.icon} src={anyConnect}></img>
                <img alt="icon" className={style.icon} src={anyDesk}></img>
                <img alt="icon" className={style.icon} src={GoogleCloud}></img>
                <img alt="icon" className={style.icon} src={Gatsby}></img>
                <img alt="icon" className={style.icon} src={Firebase}></img>
                <img alt="icon" className={style.icon} src={Docker}></img>
                <img alt="icon" className={style.icon} src={MicrosoftRD}></img>
                <img alt="icon" className={style.icon} src={AWS}></img>
                <img alt="icon" className={style.icon} src={ReactIcon}></img>
                <img alt="icon" className={style.icon} src={NodeJS}></img>
                <img alt="icon" className={style.icon} src={MongoDB}></img>
               
                <img alt="icon" className={style.icon} src={anyConnect}></img>
                <img alt="icon" className={style.icon} src={anyDesk}></img>
                <img alt="icon" className={style.icon} src={GoogleCloud}></img>
                <img alt="icon" className={style.icon} src={Gatsby}></img>
                <img alt="icon" className={style.icon} src={Firebase}></img>
                <img alt="icon" className={style.icon} src={Docker}></img>
                <img alt="icon" className={style.icon} src={MicrosoftRD}></img>
                <img alt="icon" className={style.icon} src={AWS}></img>
                <img alt="icon" className={style.icon} src={ReactIcon}></img>
                <img alt="icon" className={style.icon} src={NodeJS}></img>
                <img alt="icon" className={style.icon} src={MongoDB}></img>
                </div>
            </div>
        </div>
        <script > </script>
        </div>
    )
}