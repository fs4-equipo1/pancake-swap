import Tipografia from "../Tipografia/Tipografia"
import styles from "./CardComunidad.module.scss"

export function CardComunidad({comunidades, numeros, multi, multiNumbers, ambassadors, ambassadorsNum}){
    return (
        <div className={styles.cardComunidad}>
            <div className={styles.cardComunidadContent}>
                <div>
                    <Tipografia texto={comunidades} isBodyLarge/>
                    <Tipografia color={"--colors-warning"} texto={numeros} isTitle/>
                </div>
                <div>
                    <Tipografia texto={multi} isBodyLarge/>
                    <Tipografia color={"--colors-warning"} texto={multiNumbers} isTitle/>

                </div>
                <div>
                    <Tipografia texto={ambassadors} isBodyLarge/>
                    <Tipografia color={"--colors-warning"} texto={ambassadorsNum} isTitle/>
                
                </div>
            </div>
        </div>
    )
}