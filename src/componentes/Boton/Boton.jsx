import styles from "./Boton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Boton = ({ texto, isLearn, isTransparent, isBlue, isWhite, icon }) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    white: isWhite,
    learn: isLearn,
  });
  return <button className={className}>{texto}{icon}</button>;
};

export default Boton;
