import React from "react";
import style from "./HeaderHome.module.css"
import imagen1 from "./Imagenes HeaderHome/image1.jpg"
import imagen2 from "./Imagenes HeaderHome/image2.jpg"
import imagen3 from "./Imagenes HeaderHome/image3.jpg"
import imagen4 from "./Imagenes HeaderHome/image4.jpg"

export default function HeaderHome(){
    return(
        <div className={style.containerHeaderHome}>
            <section className={style.cajas}>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <a className={style.cajaA}>Caja 1</a>                            
                            <img className={style.cajaImg} src={imagen1}></img>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <a className={style.cajaA}>Caja 2</a>
                            <img className={style.cajaImg} src={imagen2}></img>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <a className={style.cajaA}>Caja 3</a>
                            <img className={style.cajaImg} src={imagen3}></img>
                        </li>
                    </ul>
                    <ul className={style.cajaUl}>
                        <li className={style.cajaLi}>
                            <a className={style.cajaA}>Caja 4</a>
                            <img className={style.cajaImg} src={imagen4}></img>
                        </li>
                    </ul>
            </section>
        </div>
    )
}