import styles from "./JoinComunidad.module.scss"

export const  JoinComunidadCard = ({
    title,
    logo,
    subtitle,
    verificado,
    nombreCuenta,
    fecha,
    likes,
    numlikes,
    estadisticas,
    numEstadisticas,
    texto, 
    enlace
}) => {
    return (
        <div className={styles.containerSwiper}>
            <div className={styles.containerOrder}>
                <div className={styles.titleSwiper}>{title}</div>
                <div className={styles.logoSwiper}>{logo}</div>
                <div className={styles.verifiContainer}>
                    <div className={styles.subtitleSwiper}>{subtitle}</div>
                    <div className={styles.verificadoSwiper}>{verificado}</div>
                </div>
                
                <div>
                    <div>{nombreCuenta}</div>
                    <div>{fecha}</div>
                    <div>{likes}</div>
                    <div>{numlikes}</div>
                    <div>{estadisticas}</div>
                    <div>{numEstadisticas}</div>
                </div>
                <div>{texto}</div>
                <div>{enlace}</div>
            </div>
        </div>
    )

}
export default JoinComunidadCard