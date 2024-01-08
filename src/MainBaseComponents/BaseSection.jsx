import styles from "./BaseSection.module.scss";

export function BaseSection({flexDirection, backgroundColor, children}) {
  let givenFlexDirection = flexDirection;
  let givenBackgroundColor = backgroundColor;
  return (
    <section
      className={styles.leSection}
      style={{ flexDirection: givenFlexDirection, background: givenBackgroundColor}}
    >
        {children}
    </section>
  );
}
