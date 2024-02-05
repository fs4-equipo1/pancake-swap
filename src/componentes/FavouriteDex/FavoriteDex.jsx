import Boton from "../Boton/Boton";
import styles from "./FavoriteDex.module.scss";
import classNames from "classnames/bind";
import Texto from "./Texto";

const cx = classNames.bind(styles);

export function FavoriteDex() {
  return (
    <div className={styles.favoriteDex}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src="./Assets/Images/space-bunny.webp" />
      </div>
      <div className={styles.container}>
        <Texto/>
        <div className={styles.buttons}>
          <Boton texto={"Connect wallet"} isBlue></Boton>
          <Boton texto={"Trade now"} isTransparent></Boton>
        </div>
      </div>
    </div>
  );
}
export default FavoriteDex;
