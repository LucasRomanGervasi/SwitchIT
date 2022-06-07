import React,{ useState } from "react";
import style from "./HeaderHome.module.css"
import imagen1 from "./Imagenes HeaderHome/image1.jpg"
import imagen2 from "./Imagenes HeaderHome/image2.png"
import imagen3 from "./Imagenes HeaderHome/image3.jpg"
import imagen4 from "./Imagenes HeaderHome/image4.png"
import {BsArrowRight} from "react-icons/bs"

export default function HeaderHome(){
    const [active, setActive] = useState("");
    const sectionStyle = {
        position: "absolute",
     height: "80vh",
     width: "100%",
     display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundImage: "url(" + active + ")",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    transition: "1s",
    }
    return(
        <div className={style.containerHeaderHome}>
            <section style={sectionStyle} >
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <div className={style.containerCaja}
                            onMouseEnter={() => setActive(imagen1)}
                            >
                            <h1 className={style.cajaTitulo}>Caja1</h1>
                            <p className={ active === imagen1 ? style.cajaParrafo : style.cajaNoParrafo}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Et, enim possimus ipsam aspernatur nulla dicta recusandae ab, 
                            velit delectus soluta saepe? 
                            </p>
                            <div className={style.cajaA} >
                            <a href="Login" className={active === imagen1 ? style.cajaParrafo2 : style.cajaNoParrafo2}>
                                Descubre
                            </a>
                            <p className={style.cajaIcon}>
                            <BsArrowRight/>
                            </p>
                            </div>                        
                            </div> 
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <div className={style.containerCaja}
                            onMouseEnter={() => setActive(imagen2)}
                            >
                            <h1 className={style.cajaTitulo}>Caja2</h1>
                            <p className={ active === imagen2 ? style.cajaParrafo : style.cajaNoParrafo}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Et, enim possimus ipsam aspernatur nulla dicta recusandae ab, 
                            velit delectus soluta saepe? 
                            </p>
                            <div className={style.cajaA} >
                            <a href="Login" className={active === imagen2 ? style.cajaParrafo2 : style.cajaNoParrafo2}>
                                Descubre
                            </a>
                            <p className={style.cajaIcon}>
                            <BsArrowRight/>
                            </p>
                            </div>
                            </div>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                        <div className={style.containerCaja}
                            onMouseEnter={() => setActive(imagen3)}
                            >
                             <h1 className={style.cajaTitulo}>Caja3</h1>
                            <p className={ active === imagen3 ? style.cajaParrafo : style.cajaNoParrafo}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Et, enim possimus ipsam aspernatur nulla dicta recusandae ab, 
                            velit delectus soluta saepe? 
                            </p>
                            <div className={style.cajaA} >
                            <a href="Login" className={active === imagen3 ? style.cajaParrafo2 : style.cajaNoParrafo2}>
                                Descubre
                            </a>
                            <p className={style.cajaIcon}>
                            <BsArrowRight/>
                            </p>
                            </div>
                        </div>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                        <div className={style.containerCaja}
                            onMouseEnter={() => setActive(imagen4)}
                            >
                            <h1 className={style.cajaTitulo}>Caja4</h1>
                            <p className={ active === imagen4 ? style.cajaParrafo : style.cajaNoParrafo}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Et, enim possimus ipsam aspernatur nulla dicta recusandae ab, 
                            velit delectus soluta saepe? 
                            </p>
                            <div className={style.cajaA} >
                            <a href="Login" className={active === imagen4 ? style.cajaParrafo2 : style.cajaNoParrafo2}>
                                Descubre
                            </a>
                            <p className={style.cajaIcon}>
                            <BsArrowRight/>
                            </p>
                            </div>
                            </div>
                        </li>
                    </ul>
            </section>
        </div>
    )
}