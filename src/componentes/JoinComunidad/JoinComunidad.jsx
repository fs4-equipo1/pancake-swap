import { Icono } from "../Icono/Icono";
import { CardComunidad } from "./CardComunidad";
import styles from "./JoinComunidad.module.scss";

import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import JoinComunidadSwiper from "./JoinComunidadSwiper";
import { useTheme } from "../../context/ThemeContext";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { ComunidadSection } from "../BackgroundSections/ComunidadSection";

export function JoinComunidad() {
  const { t } = useTranslation();
  return (
    <ComunidadSection>
    <div className={styles.allcontainer}>
      <div className={styles.cardsContainer}>
        <div className={styles.tittleComunity}>
          <h2 className={styles.join}>{t("Joinour")} </h2>
          <h2 className={styles.joinComunidad}> {t("Community")}</h2>
        </div>
        <div className={styles.phraseComunity}>
         {t("textJC")}
        </div>
        <div className={styles.soloCards}>
          <div className={styles.cards}>
              <CardComunidad
                comunidades={t("CommunityMembers")}
                numeros="2.0M +"
                multi={t("MultilingualCommunities")}
                multiNumbers="15 +"
                ambassadors={t("CommunityAmbassadors")}
                ambassadorsNum="35 +"
              />
            <div className={styles.containerSwiper}>
              <JoinComunidadSwiper />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.iconosFoot}>
        <Icono
          icono={<FaTwitter />}
          href="https://twitter.com/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaTelegram />}
          href="https://t.me/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaDiscord />}
          href="https://discord.gg/pancakeswap/"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaInstagram />}
          href="https://www.instagram.com/pancakeswap_official"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaReddit />}
          href="https://www.reddit.com/r/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaYoutube />}
          href="https://www.youtube.com/@pancakeswap_official"
          estiloAdicional={true}
        />
      </div>
    </div>
    </ComunidadSection>
  );
}
