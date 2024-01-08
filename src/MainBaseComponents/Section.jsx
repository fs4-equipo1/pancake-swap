import { Children } from "react";
import styles from "./Section.module.scss";

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

export function BaseSection2({Children}) {
    return (
        <section className={style.leSection}>
            {Children}
        </section>
    )
}