import { useState } from "react";
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

  const [opacity, setOpacity] = useState(1);

  function handleMouseEnter() {
    setOpacity(0);
  }

  function handleMouseLeave() {
    setOpacity(1);
  }

  return (
      <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className={styles.cardImgPurple} src={imageSrc} alt="" style={{opacity: opacity}} />
      <img className={styles.cardImgColor} src={imageSrcColor} alt="" style={{ opacity: 1 - opacity}} />
      <div className={styles.cardTextTitle} >{titleText}</div>
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
