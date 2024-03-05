import styles from "./HeroSwiperCard.module.scss";
export const HeroSwiperCard = ({
  backgroundImg,
  colorBackground,
  topLogo,
  titleText,
  secondText,
  botonPrimary,
  botonSecondary,
  bunnyPng,
  decorationPng,
}) => {
  return (
    <div
      className={styles.container}
      style={{ background: `${colorBackground} url(${backgroundImg})`}}
    >
      <div className={styles.logo}>{topLogo}</div>
      <div className={styles.title}>{titleText}</div>
      <div className={styles.text}>{secondText}</div>
      <div className={styles.buttonCont}>
        {botonPrimary}
        {botonSecondary}
      </div>
      <div className={styles.bunny}>{bunnyPng}</div>
      <div className={styles.decoration}>{decorationPng}</div>
    </div>
  );
};
export default HeroSwiperCard;
