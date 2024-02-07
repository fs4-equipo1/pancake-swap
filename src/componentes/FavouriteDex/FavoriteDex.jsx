import Boton from "../Boton/Boton";
import styles from "./FavoriteDex.module.scss";
import classNames from "classnames/bind";
import Texto from "./Texto";

const cx = classNames.bind(styles);

export function FavoriteDex() {
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
            src="https://assets.pancakeswap.finance/web/landing/bunnyv2.webm"
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
            src="https://assets.pancakeswap.finance/web/landing/star.webm"
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
            src="https://assets.pancakeswap.finance/web/landing/hero-cake.webm"
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
            src="https://assets.pancakeswap.finance/web/landing/rock01.webm"
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
            src="https://assets.pancakeswap.finance/web/landing/rock02.webm"
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
            src="https://assets.pancakeswap.finance/web/landing/rock03.webm"
            type="video/webm"
          />
        </video>
      </div>
      <div className={styles.container}>
        <Texto />
        <div className={styles.buttons}>
          <Boton texto={"Connect wallet"} isBlue></Boton>
          <Boton texto={"Trade now"} isTransparent></Boton>
        </div>
      </div>
    </div>
  );
}
export default FavoriteDex;
