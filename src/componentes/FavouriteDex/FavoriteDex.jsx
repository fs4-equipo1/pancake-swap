import { useEffect, useState } from "react";
import Boton from "../Boton/Boton";
import Tipografia from "../Tipografia/Tipografia";
import styles from "./FavoriteDex.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function FavoriteDex() {
  const windoWidth = window.outerWidth;
  const [isTitle, setIsTitle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTitle(windoWidth <= 768 ? true : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windoWidth]);
  return (
    <div className={styles.favoriteDex}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src="./Assets/Images/space-bunny.webp" />
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={"Everyone's"}
              isTitleLarge={!isTitle}
              isTitle={isTitle}
            ></Tipografia>
            <div className={styles.separador}>
              <Tipografia
                color={"--colors-secondary"}
                texto={"Favorite"}
                isTitleLarge={!isTitle}
                isTitle={isTitle}
              />
              <Tipografia
                color={"--colors-text"}
                texto={"DEX"}
                isTitleLarge={!isTitle}
                isTitle={isTitle}
              />
            </div>
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={"Trade, earn, and own crypto on the all-in-one"}
              isSubtitle
            ></Tipografia>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={"multichain DEX"}
              isSubtitle
            ></Tipografia>
          </div>
        </div>
        <div className={styles.buttons}>
          <Boton texto={"Connect wallet"} isBlue></Boton>
          <Boton texto={"Trade now"} isTransparent></Boton>
        </div>
      </div>
    </div>
  );
}
export default FavoriteDex;
