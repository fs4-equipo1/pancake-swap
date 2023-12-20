import styles from "./EcosystemCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Card({
  imageSrc,
  imageSrcColor,
  titleText,
  contentText,
  commandText,
}) {

  return (
    <div className={styles.card}>
      <img className={styles.cardImgPurple} src={imageSrc} alt="" />
      <img className={styles.cardImgColor} src={imageSrcColor} alt="" />
      <div className={styles.cardTextTitle}>{titleText}</div>
      <div className={styles.cardText}>{contentText}</div>
      <div className={styles.cardlink}>{commandText}</div>
    </div>
  );
}

export function EcosystemCardsContainer({
  path,
  titulo,
  cardData,
  objectId,
  isReverse,
}) {
  const filteredData = cardData.filter((obj) => obj.id === objectId);

  return (
    <div
      className={styles.discoverEcosystem}
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <img className={styles.ecosystemImg} src={path} />
      <div className={styles.ecosystemSegment}>
        <div className={styles.ecosystemTitle}>{titulo}</div>
        <div className={styles.cardcontainer}>
          {filteredData.map((data, index) => {
            return (
              <Card
                key={index}
                imageSrc={data.imgsrc}
                imageSrcColor={data.imgsrcColor}
                titleText={data.title}
                contentText={data.content}
                commandText={data.button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
