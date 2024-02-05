import { Icono } from "../Icono/Icono";
import { CardComunidad } from "./CardComunidad";
import styles from "./JoinComunidad.module.scss"

import {
    FaTwitter,
    FaTelegram,
    FaReddit,
    FaInstagram,
    FaDiscord,
    FaYoutube,
  } from "react-icons/fa";
import JoinComunidadSwiper from "./JoinComunidadSwiper";

export function JoinComunidad(){
    return (
        <div className={styles.allcontainer}>
                <div className={styles.cardsContainer}>
                    <div className={styles.tittleComunity}>
                        <h2 className={styles.join}>Join our </h2>
                        <h2 className={styles.joinComunidad}> Community</h2>
                    </div>
                    <div className={styles.phraseComunity}>Together we can make the PancakeSwap community even stronger</div>
                    <div className={styles.soloCards}>
                        <div className={styles.cards}>
                            <div className={styles.normalCard}>
                            <CardComunidad 
                                comunidades="Community members" 
                                numeros="2.0M +" 
                                multi="Multilingual Communities" 
                                multiNumbers="15 +"
                                ambassadors="Community Ambassadors"
                                ambassadorsNum="35 +"/> 
                            </div>
                            <div className={styles.containerSwiper}>
                                <JoinComunidadSwiper/>  
                            </div>        
                        </div>
                    </div>
                </div>
                

                <div className={styles.iconosFoot}>
                    <Icono
                        icono={<FaTwitter />}
                        href="https://twitter.com/pancakeswap"
                        estiloAdicional={true}
                    />
                    <Icono
                        icono={<FaTelegram />}
                        href="https://t.me/pancakeswap"
                        estiloAdicional={true}
                    />
                    <Icono 
                        icono={<FaDiscord />}
                        href="https://discord.gg/pancakeswap/"
                        estiloAdicional={true}
                    />
                    <Icono
                        icono={<FaInstagram />}
                        href="https://www.instagram.com/pancakeswap_official"
                        estiloAdicional={true}
                    />
                    <Icono
                        icono={<FaReddit />}
                        href="https://www.reddit.com/r/pancakeswap"
                        estiloAdicional={true}
                    />
                    <Icono
                        icono={<FaYoutube />}
                        href="https://www.youtube.com/@pancakeswap_official"
                        estiloAdicional={true}
                    />
                </div>
            </div>
    )   
}