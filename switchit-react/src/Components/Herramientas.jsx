import React from "react"; 
import style from "./Herramientas.module.css"
/* TECNOLOGIAS */
import anyConnect from "../assets/Tecnologias/AnyConnect.png"
import anyDesk from "../assets/Tecnologias/AnyDesk.png"
import AWS from "../assets/Tecnologias/AWS.png"
import Docker from "../assets/Tecnologias/Docker.png"
import Firebase from "../assets/Tecnologias/Firebase.png"
import Gatsby from "../assets/Tecnologias/Gatsby.png"
import GoogleCloud from "../assets/Tecnologias/Google-Cloud.png"
import MicrosoftRD from "../assets/Tecnologias/MicrosoftRD.png"
import MongoDB from "../assets/Tecnologias/MongoDB.png"
import NodeJS from "../assets/Tecnologias/NodeJS.png"
import ReactIcon from "../assets/Tecnologias/ReactIcon.png"
/* PARTNERS */
import Cisco from "../assets/Partners/Cisco.png"
import DELL from "../assets/Partners/DELL-EMC.png"
import HPEnterprise from "../assets/Partners/HP-Enterprise.png"
import Microsoft from "../assets/Partners/Microsoft-W.png"
import Promox from "../assets/Partners/Promox.png"
import TP from "../assets/Partners/TP-Link.png"

export default function Herramientas(){
    return(
        <div className={style.containerHerramientas}>
        <div className={style.containerPartners}>
            <h1 className={style.titulo}> Partners </h1>
            <div className={style.iconosPartners}>
                <img alt="icon" className={style.icon} src={Cisco}></img>
                <img alt="icon" className={style.icon} src={DELL}></img>
                <img alt="icon" className={style.icon} src={HPEnterprise}></img>
                <img alt="icon" className={style.icon} src={Microsoft}></img>
                <img alt="icon" className={style.icon} src={Promox}></img>
                <img alt="icon" className={style.icon} src={TP}></img>
            </div>
        </div>  
        <div className={style.containerTecnologias}>
            <h1 className={style.titulo}> Tecnologias</h1>
            <div className={style.iconosTecnologias}>
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
    )
}