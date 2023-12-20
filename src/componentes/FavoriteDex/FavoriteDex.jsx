import Boton from "./componentes/Boton/Boton";
import Tipografia from "./componentes/Tipografia/Tipografia";
import styles from "./componentes/FavoriteDex/FavoriteDex.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function FavoriteDex() {
  return (
    <div>
      <div className={styles.textContainer}>
        <Tipografia
          color={"--colors-text"}
          texto={"Everyone's"}
          isTitleLarge
        ></Tipografia>
      </div>
      <div className={styles.subtext}>
        <Tipografia
          color={"--colors-secondary"}
          texto={"Favorite"}
          isTitleLarge
        />
        <Tipografia color={"--colors-text"} texto={"DEX"} isTitleLarge />
      </div>
      <div>
        <Boton texto={"Connect wallet"} isBlue></Boton>
        <Boton texto={"Trade now"} isTransparent></Boton>
        <img></img>
      </div>
    </div>
  );
}