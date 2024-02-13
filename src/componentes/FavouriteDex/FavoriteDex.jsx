import Boton from "../Boton/Boton";
import styles from "./FavoriteDex.module.scss";
import classNames from "classnames/bind";
import Texto from "./Texto";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

export function FavoriteDex() {

  const { t } = useTranslation()

  return (
    <div className={styles.favoriteDex}>
      <div className={styles.vidContainer}>
        {/* <img className={styles.img} src="./Assets/Images/space-bunny.webp" /> */}
        <video
          className={styles.vid}
          loop
          autoPlay
          muted
          playsInline
          width="1080"
        >
          <source
            src="./Assets/Gifs/bunnyv2.webm"
            type="video/webm"
          />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source
            src="./Assets/Gifs/star.webm"
            type="video/webm"
          />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source
            src="./Assets/Gifs/hero-cake.webm"
            type="video/webm"
          />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source
            src="./Assets/Gifs/rock01.webm"
            type="video/webm"
          />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source
            src="./Assets/Gifs/rock02.webm"
            type="video/webm"
          />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source
            src="./Assets/Gifs/rock03.webm"
            type="video/webm"
          />
        </video>
      </div>
      <div className={styles.container}>
        <Texto />
        <div className={styles.buttons}>
          <Boton texto={t("ConnectWallet")} isBlue style='padding: 12px 24px'></Boton>
          <Boton texto={t("TradeNow")} isTransparent></Boton>
        </div>
      </div>
    </div>
  );
}
export default FavoriteDex;
