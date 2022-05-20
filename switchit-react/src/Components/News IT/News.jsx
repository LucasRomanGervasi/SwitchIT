import React from "react";
import style from "./News.module.css"
import  {BsCircleFill} from "react-icons/bs";
import ImagenCard from "./Imagenes NewsIT/ImagenNews.jpg";

export default function News(){
    return(
        <div className={style.containerNews}>
            <h1 className={style.titulo}>News It</h1>
            <div className={style.containerCard}>
                <div className={style.cardUno}>
                        <div className={style.topCard}> 
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                        </div>
                        <div className={style.bottomCard}>
                        <img className={style.ImagenCard} alt="imagen" src={ImagenCard}></img>
                        </div>
                </div>
                <div className={style.cardDos}>
                <div className={style.topCard}> 
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                        </div>
                        <div className={style.bottomCard}>
                        <img className={style.ImagenCard} alt="imagen" src={ImagenCard}></img>
                        </div>
                </div>
                <div className={style.cardTres}>
                <div className={style.topCard}> 
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                            <div className={style.circulo}><BsCircleFill/></div>
                        </div>
                        <div className={style.bottomCard}>
                            <img className={style.ImagenCard} alt="imagen" src={ImagenCard}></img>
                        </div>
                </div>
            </div>
        </div>
    )
}