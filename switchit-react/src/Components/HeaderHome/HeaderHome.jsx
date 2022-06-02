import React,{ useState } from "react";
import style from "./HeaderHome.module.css"
import imagen1 from "./Imagenes HeaderHome/image1.jpg"
import imagen2 from "./Imagenes HeaderHome/image2.png"
import imagen3 from "./Imagenes HeaderHome/image3.jpg"
import imagen4 from "./Imagenes HeaderHome/image4.png"

export default function HeaderHome(){
    const [active, setActive] = useState("");
    const sectionStyle = {
        position: "absolute",
     height: "60vh",
     width: "100%",
     display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
        backgroundImage: "url(" + active + ")",
        backgroundSize:"100%" + "100%",
    }
    return(
        <div className={style.containerHeaderHome}>
            <section style={sectionStyle} >
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <p className={style.cajaA}
                            onMouseEnter={() => setActive(imagen1)}
                            >Caja 1</p>                            
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <p className={style.cajaA}
                            onMouseEnter={() => setActive(imagen2)}
                            >Caja 2</p>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                        <p className={style.cajaA}
                            onMouseEnter={() => setActive(imagen3)}
                            >Caja 3</p>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                        <p className={style.cajaA}
                            onMouseEnter={() => setActive(imagen4)}
                            >Caja 4</p>
                        </li>
                    </ul>
            </section>
        </div>
    )
}