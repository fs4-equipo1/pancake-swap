import styles from "./FavoriteDex.module.scss";
import Tipografia from "../Tipografia/Tipografia";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Texto() {
  const windoWidth = window.outerWidth;
  const [isLaptop, setIsLaptop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
const { t } = useTranslation();
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
              texto={t("Everyones")}
              isSubtitleLarge
            ></Tipografia>
            <div className={styles.separador}> {/*  descomente esta linea */}
              <Tipografia
                color={"--colors-secondary"}
                texto={t("Favorite")}
                isSubtitleLarge
              />
              <Tipografia
                color={"--colors-text"}
                texto={t("DEX")}
                isSubtitleLarge
              />
            </div>               {/*    //Comentado ya que al probar, no tiene efecto.
            */}
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD1")}
              isBodyLarge
            ></Tipografia>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD2")}      //Comentado e incluido en un unico elemento tipografia
              isBodyLarge
            ></Tipografia>
          </div>
        </div>
      )}
      {isTablet && (
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={t("Everyones")}
              isTitle
            ></Tipografia>
            <div className={styles.separador}>  {/*linea descomenntada */}
              <Tipografia
                color={"--colors-secondary"}
                texto={t("Favorite")}
                isTitle
              />
              <Tipografia color={"--colors-text"} texto={t("DEX")} isTitle />
            </div> {/**/}
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD1")}
              isSubtitle
            ></Tipografia>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD2")}
              isSubtitle
            ></Tipografia>
          </div>
        </div>
      )}
      {isLaptop && (
        <div className={styles.textContainer}>
          <div className={styles.title}>
            <Tipografia
              color={"--colors-text"}
              texto={t("Everyones")}
              isTitleLarge
            ></Tipografia>
            <div className={styles.separador}>
              <Tipografia
                color={"--colors-secondary"}
                texto={t("Favorite")}
                isTitleLarge
              />
              <Tipografia color={"--colors-text"} texto={t("DEX")} isTitleLarge />
            </div>
          </div>
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD1")}
              isSubtitle
            ></Tipografia>
            <Tipografia
              color={"--colors-textSubtle"}
              texto={t("textoFD2")}
              isSubtitle
            ></Tipografia>
          </div>
        </div>
      )}
    </div>
  );
}
export default Texto;
