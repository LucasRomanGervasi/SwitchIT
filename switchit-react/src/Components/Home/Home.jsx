import React, {useState} from "react";
import style from "./Home.module.css"
import hogarFoto from "./Imagenes Home/hogares.png"
import institucionesFoto from "./Imagenes Home/instituciones.png"
import empresasFoto from "./Imagenes Home/empresas.png"
import Hogar from "../Servicios/InfoCardHogar"
import Instituciones from "../Servicios/InfoCardInstituciones"
import Empresas from "../Servicios/InfoCardEmpresas"

export default function Home(){
    const [servicios, setServicios] = useState("")
    return(
        <div className={style.containerHome}>
            <div className={style.headerHome}>
                <h1 className={style.Soluciones}>Soluciones  <span className={style.SolucionesDos}> 360</span></h1>
            </div>
            <div  id="Home" className={style.presentacion}>
            <div data-aos="fade-up"  className={style.presentacion1}>
            <h1   className={style.titulo1}> Nos dedicamos a </h1>
            <h2  className={style.titulo2}> digitalizar marcas </h2>
            <div data-aos="fade-up"   className={style.parrafo} >
            <p> Brindamos un servicio integral de soluciones informáticas que, sumado al conocimiento a nuestra basta experiencia en 
             gestión de negocios, nos permite brindarte la solución que tu negocio necesita para adaptarse a este nuevo mundo 
                 empresarial y crecer orgánicamente. </p>
            </div>
        </div>
            <div  className={style.presentacion2}> 
            <div data-aos="fade-up" className={style.botonServicios}>
                <a className={style.servicios}>Conocé nuestros servicios para</a>
            </div>
            <div data-aos="fade-up" className={style.cajaServicios}>
                <a className={style.hogar} href="#serviciosHogar" onClick={() => setServicios("home")}>
                    <img className={style.foto} src={hogarFoto}></img>
                    <h3 className={style.nombreCaja}>Hogar</h3>
                </a>
                <a  className={style.institucionesEducativas} href="#serviciosInstitutos" onClick={() => setServicios("instituciones")}>
                    <img className={style.foto} src={institucionesFoto}></img>
                    <h3 className={style.nombreCaja}> Instituciones Educativas</h3>
                </a>
                <a className={style.empresas} href="#serviciosEmpresas" onClick={() => setServicios("empresas")}>
                    <img className={style.foto} src={empresasFoto}></img>
                    <h3 className={style.nombreCaja}>Empresas</h3>
                </a>
            </div>
            </div>
            </div>
            <div className={style.InfoCard}>
           </div> 
           <div>
            <div className={servicios === "home" ? style.divHogar : style.divNoneHogar}>
                <Hogar/>
            </div>
            <div className={servicios === "instituciones" ? style.divInstitutos : style.divNoneInstituciones}>
            <Instituciones/>
            </div>
            <div className={servicios === "empresas" ? style.divEmpresas : style.divNoneEmpresas}>
                <Empresas/>
            </div>
           </div>
        </div>
    )
}