import styles from "./Logo.module.scss";
import logoBlanco from "../../../public/assets/logoPancakeBlanco.png"
import logoResponsive from "../../../public/assets/conejoResponsive.png"
export function LogoWhite() {
  return (
    <div>
        <>
          <img src={logoBlanco}  className={styles.logoImage} />
        </>
      <img
        src={logoResponsive}
        alt=""
        className={styles.iconResponsive}
      />
    </div>
  );
}
