import styles from "./EcosystemCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Card({imageSrc, titleText, contentText, commandText}){
    return (
        <div>
            <img src={imageSrc} alt="" />
            <h3>{titleText}</h3>
            <p>{contentText}</p>
            <h4>{commandText}</h4>
        </div>
    )
}
import styles from "./EcosystemCard.scss"

export function EcosystemCardsContainer({path, titulo, cardData}) {
    
    return (
    <div className={styles.discoverEcosystem}>
        <div className={styles.ecosystemContainer-trade}>
            <img className={styles.ecosystemImg} src={path}/>
                <div className={styles.ecosystemTrade}>
                    <div className={styles.ecosystemTitle}>{titulo}</div>
                    <div className={styles.card-container}>
                        {cardData.forEach(data => {
                            <Card imageSrc={data.imgsrc} titleText={data.title} contentText={data.content} commandText={data.button} />
                        })}
                    </div>
                </div>
        </div>
  </div>)
}