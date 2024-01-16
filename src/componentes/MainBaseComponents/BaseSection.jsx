import styles from "./BaseSection.module.scss";

export function BaseSection({flexDirection, backgroundColor, children}) {
  let givenFlexDirection = flexDirection;
  let givenBackgroundColor = backgroundColor;
  return (
    <section
      className={styles.baseSection}
      style={{ flexDirection: givenFlexDirection, background: givenBackgroundColor}}
    >
        {children}
    </section>
  );
}
