import Tipografia from "../Tipografia/Tipografia"
import styles from "./CardComunidad.module.scss"

export function CardComunidad({comunidades, numeros, multi, multiNumbers, ambassadors, ambassadorsNum}){
    return (
        <div className={styles.cardComunidad}>
            <div className={styles.cardComunidadContent}>
                <div>
                    <Tipografia texto={comunidades} isSubtitleLarge/>
                    <Tipografia color={"--colors-warning"} texto={numeros} isTitleLarge/>
                </div>
                <div>
                    <Tipografia texto={multi} isSubtitleLarge/>
                    <Tipografia color={"--colors-warning"} texto={multiNumbers} isTitleLarge/>

                </div>
                <div>
                    <Tipografia texto={ambassadors} isSubtitleLarge/>
                    <Tipografia color={"--colors-warning"} texto={ambassadorsNum} isTitleLarge/>
                
                </div>
            </div>
        </div>
    )
}