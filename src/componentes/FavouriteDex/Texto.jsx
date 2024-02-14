import styles from "./FavoriteDex.module.scss";
import Tipografia from "../Tipografia/Tipografia";
import { useEffect, useState } from "react";

export function Texto() {
  const windoWidth = window.outerWidth;
  const [isLaptop, setIsLaptop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(windoWidth >= 1024 ? true : false);
      setIsTablet(windoWidth <= 768 && windoWidth >= 426 ? true : false);
      setIsMobile(windoWidth <= 425 ? true : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windoWidth]);
  return (
    <div>
      {isMobile && (
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={"Everyone's"}
              isSubtitleLarge
            ></Tipografia>
            {/* <div className={styles.separador}> */}
              <Tipografia
                color={"--colors-secondary"}
                texto={"Favorite"}
                isSubtitleLarge
              />
              <Tipografia
                color={"--colors-text"}
                texto={"DEX"}
                isSubtitleLarge
              />
            {/* </div>                 //Comentado ya que al probar, no tiene efecto.
            */}
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={"Trade, earn, and own crypto on the all-in-one multichain DEX"}
              isBodyLarge
            ></Tipografia>
            {/* <Tipografia
              color={"--colors-textSubtle"}
              texto={"one multichain DEX"}      //Comentado e incluido en un unico elemento tipografia
              isBodyLarge
            ></Tipografia> */}
          </div>
        </div>
      )}
      {isTablet && (
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={"Everyone's"}
              isTitle
            ></Tipografia>
            {/* <div className={styles.separador}> */}
              <Tipografia
                color={"--colors-secondary"}
                texto={"Favorite"}
                isTitle
              />
              <Tipografia color={"--colors-text"} texto={"DEX"} isTitle />
            {/* </div> */}
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={"Trade, earn, and own crypto on the all-in-one multichain DEX"}
              isSubtitle
            ></Tipografia>
            {/* <Tipografia
              color={"--colors-textSubtle"}
              texto={"multichain DEX"}
              isSubtitle
            ></Tipografia> */}
          </div>
        </div>
      )}
      {isLaptop && (
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={"Everyone's"}
              isTitleLarge
            ></Tipografia>
            <div className={styles.separador}>
              <Tipografia
                color={"--colors-secondary"}
                texto={"Favorite"}
                isTitleLarge
              />
              <Tipografia color={"--colors-text"} texto={"DEX"} isTitleLarge />
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
      )}
    </div>
  );
}
export default Texto;
