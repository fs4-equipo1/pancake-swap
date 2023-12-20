import styles from "./DexNow.module.scss";

const DexNow = ({ titleLarge }) => {
  return (
    <div>
      <div className={styles.dexTitle}>{titleLarge}</div>
    </div>
  );
};

export default DexNow;
