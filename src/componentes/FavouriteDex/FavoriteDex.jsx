import Boton from "../Boton/Boton";
import styles from "./FavoriteDex.module.scss";
import classNames from "classnames/bind";
import Texto from "./Texto";
import { useTranslation } from "react-i18next";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useState } from "react";
import bunnyVideo from "../../../Assets/Gifs/bunnyv2.webm";
import starVideo from "../../../Assets/Gifs/star.webm";
import heroCakeVideo from "../../../Assets/Gifs/hero-cake.webm";
import rock01Video from "../../../Assets/Gifs/rock01.webm";
import rock02Video from "../../../Assets/Gifs/rock02.webm";
import rock03Video from "../../../Assets/Gifs/rock03.webm";

const cx = classNames.bind(styles);

export function FavoriteDex() {
  const { t } = useTranslation();
  const { open, selectedNetworkId } = useWeb3Modal();
  const { address, isDisconnected } = useAccount();
  const [buttonText, setButtonText] = useState(
    window.innerWidth <= 800 ? t("Connect") : t("ConnectWallet")
  );

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
          <source src={bunnyVideo} type="video/webm" />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source src={starVideo} type="video/webm" />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source src={heroCakeVideo} type="video/webm" />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source src={rock01Video} type="video/webm" />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source src={rock02Video} type="video/webm" />
        </video>
        <video
          loop
          autoPlay
          playsInline
          muted
          width="1080"
          className={styles.vid}
        >
          <source src={rock03Video} type="video/webm" />
        </video>
      </div>
      <div className={styles.container}>
        <Texto />
        <div className={styles.buttons}>
          {isDisconnected && (
            <Boton
              onClick={() => open({ view: "Connect" })}
              texto={buttonText}
              isBlue={true}
            />
          )}
          <Boton texto={t("TradeNow")} isTransparent></Boton>
        </div>
      </div>
    </div>
  );
}
export default FavoriteDex;
