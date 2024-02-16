import styles from "./Logo.module.scss";
export function LogoWhite() {
  return (
    <div>
        <>
          <img src="../public/assets/logoPancakeBlanco.png"  className={styles.logoImage} />
        </>
      <img
        src="../public/assets/conejoResponsive.png"
        alt=""
        className={styles.iconResponsive}
      />
    </div>
  );
}
