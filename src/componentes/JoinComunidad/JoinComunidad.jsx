import { Icono } from "../Icono/Icono";
import { CardComunidad } from "./CardComunidad";
import styles from "./JoinComunidad.module.scss"

import {
    FaTwitter,
    FaTelegram,
    FaReddit,
    FaInstagram,
    FaGithub,
    FaDiscord,
    FaYoutube,
  } from "react-icons/fa";

export function JoinComunidad(){
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.tittleComunity}>
                    <h2 className={styles.join}>Join our </h2>
                    <h2 className={styles.joinComunidad}> Comunidad</h2>
                </div>
                <div className={styles.phraseComunity}>Juntos podremos hacer que la comunidad de PancakeSwap sea aun mas fuerte</div>
                <div className={styles.cards}>
                    <div>
                        <CardComunidad 
                        comunidades="Community members" 
                        numeros="1.8M +" 
                        multi="Multilingual Communities" 
                        multiNumbers="15 +"
                        ambassadors="Community Ambassadors"
                        ambassadorsNum="35 +"/> 
                    </div>
                    <div>
                        <CardComunidad 
                            comunidades="Community members" 
                            numeros="1.8M +" 
                            multi="Multilingual Communities" 
                            multiNumbers="15 +"
                            ambassadors="Community Ambassadors"
                            ambassadorsNum="35 +"/> 
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
        </div>
    )   
}