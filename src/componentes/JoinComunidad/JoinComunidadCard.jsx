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
            <div>{title}</div>
            <div>{logo}</div>
            <div>{subtitle}</div>
            <div>{verificado}</div>
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
    )

}