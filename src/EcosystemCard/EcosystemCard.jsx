import { useState } from "react";
import styles from "./EcosystemCard.module.scss";
import classNames from "classnames/bind";

import { EcosystemCardsData } from "./EcosystemCardsData";
import Tipografia from "../componentes/Tipografia/Tipografia";

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

function EcosystemImgAndTitle(){
  return (
    <div className={styles.headerContainer}>
      <svg viewBox="0 0 48 48" height="48px" width="48px" mb="24px"><path fill='var(--colors-secondary)' d="M14.9024 0C10.8947 0 7.87179 3.60289 8.60749 7.50271L10.3484 16.7306C4.45101 19.3061 0 23.7533 0 29.3333V32.7273C0 37.3405 3.08306 41.2029 7.39317 43.8102C11.7369 46.4379 17.6132 48 24 48C30.3868 48 36.2631 46.4379 40.6068 43.8102C44.9169 41.2029 48 37.3405 48 32.7273V29.3333C48 23.7236 43.5028 19.2593 37.5552 16.6889L39.2882 7.50271C40.0239 3.6029 37.001 0 32.9933 0C29.4567 0 26.5896 2.83809 26.5896 6.33904V14.147C25.7386 14.0899 24.8746 14.0606 24 14.0606C23.0897 14.0606 22.1908 14.0923 21.3061 14.1541V6.33904C21.3061 2.83809 18.4391 0 14.9024 0ZM17.8776 28.3637C17.8776 30.372 16.7811 32 15.4286 32C14.0761 32 12.9796 30.372 12.9796 28.3637C12.9796 26.3554 14.0761 24.7273 15.4286 24.7273C16.7811 24.7273 17.8776 26.3554 17.8776 28.3637ZM34.7757 28.3637C34.7757 30.372 33.6792 32 32.3267 32C30.9742 32 29.8777 30.372 29.8777 28.3637C29.8777 26.3554 30.9742 24.7273 32.3267 24.7273C33.6792 24.7273 34.7757 26.3554 34.7757 28.3637Z"></path></svg>
      <div className={styles.ecosystemTitle}>
        <Tipografia 
          color={"--colors-text"}
          texto={"Discover the"}
          isTitle
        />
        <Tipografia
          color={"--colors-secondary"}
          texto={"Ecosystem"}
          isTitle
        />
      </div>
    </div>
  )
}

export function EcosystemCard({
  path,
  titulo,
  cardData,
  objectId,
  isReverse,
  theme
}) {
  const filteredData = cardData.filter((obj) => obj.id === objectId);

  return (
    <div
      className={theme === 'light' ? styles.discoverEcosystemDark : styles.discoverEcosystemLight}
      style={{ flexDirection: isReverse ? "row-reverse" : "row" }}
    >
      <img className={isReverse ? styles.ecosystemImgReversed : styles.ecosystemImg} src={path}/>
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

export function EcosystemCards({ theme }){
  return(
    <div>
      <EcosystemImgAndTitle />
      <EcosystemCard
          theme={theme}
          path={"../../Assets/Images/trade-bunny.png"}
          titulo={"Trade"}
          cardData={EcosystemCardsData}
          objectId={1}
        />
        <EcosystemCard
          theme={theme}
          path={"../../Assets/Images/asset36.png"}
          titulo={"Earn"}
          cardData={EcosystemCardsData}
          objectId={2}
          isReverse
        />
        <EcosystemCard
          theme={theme}
          path={"../../Assets/Images/asset8.png"}
          titulo={"Game & NFT"}
          cardData={EcosystemCardsData}
          objectId={3}
        />
    </div>
  )
}
