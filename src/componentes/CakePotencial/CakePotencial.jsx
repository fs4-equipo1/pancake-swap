import { t } from "i18next";
import { ArrowLink } from "../../../Assets/Icons/ArrowLink";
import Boton from "../Boton/Boton";
import styles from "./CakePotencial.module.scss";
export function CakePotencial() {
  return (
    <div className={styles.containerText}>
      <div className={styles.titleCake}>
        <p>
          {t("titleCP")}{" "}
          <span className={styles.cake}>CAKE</span>
        </p>
      </div>
      <div className={styles.experienceP}>
        <p>
          {t("textCP")}
        </p>
      </div>

      <div className={styles.buyCake}>
        <Boton texto={t("BUYCAKE")} isBlue={true} />
        <Boton
          texto={t("Learn")}
          isLearn={true}
          icon={<ArrowLink color={"var(--colors-primary)"} />}
        />
      </div>
    </div>
  );
}

export default CakePotencial;
