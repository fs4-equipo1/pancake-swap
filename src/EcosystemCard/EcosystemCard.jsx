import styles from "./EcosystemCard.scss"

export function EcosystemCardsContainer({path, titulo, cardcomponents}) {
    
    return (
    <div className={styles.discoverEcosystem}>
        <div className={styles.ecosystemContainer-trade}>
            <img className={styles.ecosystemImg} src={path}/>
                <div className={styles.ecosystemTrade}>
                    <div className={styles.ecosystemTitle}>{titulo}</div>
                    <div className={styles.card-container}>
                        {/*{cardcomponents.map((component) => {
                            <div> {component} </div>})}*/}
                    </div>
                </div>
        </div>
  </div>)
}