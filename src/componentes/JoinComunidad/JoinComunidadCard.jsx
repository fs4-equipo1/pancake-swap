import styles from "./JoinComunidad.module.scss"

export const  JoinComunidadCard = ({
    title,
    logo,
    image,
    subtitle,
    socialMedia,
    texto, 
    enlace,
    fecha
}) => {
    return (
        <div className={styles.containerSwiper}>
            <div className={styles.containerOrder}>
                <div className={styles.titleSwiper}>{title}</div>
                <div>{logo}</div>
                <div>{image}</div>
                <div>{subtitle}</div>
                <div>{socialMedia}</div>
                <div>{fecha}</div>
                <div>{texto}</div>
                <div className={styles.enlaceComunidad}>{enlace}</div>
            </div>
        </div>
    )

}
export default JoinComunidadCard