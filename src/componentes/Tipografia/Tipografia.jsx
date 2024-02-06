import React from "react";
import styles from "./Tipografia.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

/**
 *
 * @param {string} color - Color del Texto
 * @param {string} texto
 * @returns
 */

const Tipografia = ({
  color,
  texto,
  isTitleLarge,
  isTitle,
  isSubtitleLarge,
  isSubtitle,
  isBodyLarge,
  isBody,
}) => {
  const classNames = cx({
    titleLarge: isTitleLarge,
    title: isTitle,
    subtitleLarge: isSubtitleLarge,
    subtitle: isSubtitle,
    bodyLarge: isBodyLarge,
    body: isBody,
  });
  return (
    <div className={classNames} style={{ color: `var(${color})` }}>
      {texto}
    </div>
  );
};

export default Tipografia;

