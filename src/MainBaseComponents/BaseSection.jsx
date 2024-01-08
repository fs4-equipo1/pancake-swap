import styles from "./BaseSection.module.scss";

export function BaseSection({flexDirection, children}) {
  let givenFlexDirection = flexDirection;
  return (
    <section
      className={styles.leSection}
      style={{ flexDirection: givenFlexDirection }}
    >
        {children}
    </section>
  );
}
