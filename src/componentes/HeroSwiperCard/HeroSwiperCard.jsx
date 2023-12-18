import Boton from "../Boton/Boton";
import styles from "./HeroSwiperCard.module.scss";
export const HeroSwiperCard = ({
  background,
  topLogo,
  titleText,
  secondText,
  botonPrimary,
  botonSecondary,
  bunnyPng,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.logo}>
        <img src={topLogo} alt="logo-pancake" />
      </div>
      <div className={styles.title}>{titleText}</div>
      <div className={styles.text}>{secondText}</div>
      <div className={styles.buttonCont}>
        {botonPrimary && <Boton texto={botonPrimary} isBlue />}
        {botonSecondary && <Boton texto={botonSecondary} isWhite />}
      </div>
      <div className={styles.bunny}>
        <img src={bunnyPng} alt="bunny" />
      </div>
    </div>
  );
};
export default HeroSwiperCard;