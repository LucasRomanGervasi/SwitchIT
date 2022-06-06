import React, {useState} from "react";
import style from "./Home.module.css"
import hogarFoto from "./Imagenes Home/hogares.png"
import institucionesFoto from "./Imagenes Home/instituciones.png"
import empresasFoto from "./Imagenes Home/empresas.png";
import switchInstituciones from "./Imagenes Home/switchInstituciones.png"
import switchHogar from "./Imagenes Home/switchHogar.png"
import switchEmpresas from "./Imagenes Home/switchEmpresas.png"
import Hogar from "../Servicios/InfoCardHogar"
import Instituciones from "../Servicios/InfoCardInstituciones"
import Empresas from "../Servicios/InfoCardEmpresas"
import News from "../News IT/News"
import Herramientas from "../Herramientas/Herramientas"
import Contactos from "../Contactos/Contactos";
import NuestrasEmpresas from "../NuestrasEmpresas/NuestrasEmpresas"

export default function Home(){
    const [servicios, setServicios] = useState("")
    const [active, setActive] = useState("");
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
                <p className={style.servicios}>Conocé nuestros servicios para</p>
            </div>
            <div data-aos="fade-up" className={style.cajaServicios}>
                {/* Caja Empresa */}
                <div className={style.switch}>
                <a className={style.empresas} href="#serviciosEmpresas" onMouseEnter={() => setActive("switchEmpresas")} onClick={() => setServicios("empresas")}>
                    <img alt="iconEmpresa" className={style.foto} src={empresasFoto}></img>
                    <h3 className={style.nombreCaja}>Empresas</h3>
                </a>
                    <img alt="switchEmpresa"  src={switchEmpresas} className={ active === "switchEmpresas" ? style.fotoSwitch : style.fotoNoSwitch}></img>
                </div>
                {/* Caja Instituciones */}
                <div className={style.switch}>
                <a  className={style.institucionesEducativas} href="#serviciosInstitutos" onMouseEnter={() => setActive("switchInstituciones")} onClick={() => setServicios("instituciones")}>
                    <img alt="iconInstituciones" className={style.foto} src={institucionesFoto}></img>
                    <h3 className={style.nombreCaja}> Instituciones Educativas</h3>
                </a>
                <img  alt="switchInstituciones" src={switchInstituciones} className={ active === "switchInstituciones" ? style.fotoSwitch : style.fotoNoSwitch}></img>
                </div>
                {/* Caja Hogar */}
                <div className={style.switch}>
                <a className={style.hogar} href="#serviciosHogar" onMouseEnter={() => setActive("switchHogar")} onClick={() => setServicios("home")}>
                    <img alt="iconHogar" className={style.foto} src={hogarFoto}></img>
                    <h3 className={style.nombreCaja}>Hogar</h3>
                </a>
                <img  alt="switchHogar" src={switchHogar}  className={ active === "switchHogar" ? style.fotoSwitch : style.fotoNoSwitch}></img>
                </div>
            </div>
            </div>
            </div>
            <div className={style.InfoCard}>
           </div> 
           <div>
            <div className={servicios === "home" ? style.divHogar : style.divNoneHogar}>
                <Hogar/>
                <div > <News/> </div>
                <div > <Herramientas/> </div>
                <div id="Contactos"> <Contactos/> </div>
            </div>
            <div className={servicios === "instituciones" ? style.divInstitutos : style.divNoneInstituciones}>
            <Instituciones/>
            <div > <News/> </div>
                <div > <Herramientas/> </div>
                <div id="Contactos"> <Contactos/> </div>
            </div>
            <div className={servicios === "empresas" ? style.divEmpresas : style.divNoneEmpresas}>
                <Empresas/>
                <div > <News/> </div>
                <div > <Herramientas/> </div>
                <div><NuestrasEmpresas/></div>
                <div id="Contactos"> <Contactos/> </div>
            </div>
           </div>
        </div>
    )
}