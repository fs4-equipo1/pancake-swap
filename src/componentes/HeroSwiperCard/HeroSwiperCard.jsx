import Boton from "../Boton/Boton";
import styles from "./HeroSwiperCard.module.scss";
export const HeroSwiperCard = ({
  text,
  botonPrimary,
  botonSecondary,
  link,
}) => {
  return (
    <div className={styles.container}>
      <h2 style={{ color: "white" }}>{text}</h2>
      {botonPrimary && <Boton texto={botonPrimary} isBlue />}
      {botonSecondary && <Boton texto={botonSecondary} isWhite />}
      {link && <Boton texto={link} isTransparent />}
    </div>
  );
};
export default HeroSwiperCard;
