import styles from "./Boton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Boton = ({ texto, isTransparent, isBlue, isWhite }) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    white: isWhite,
  });
  return <button className={className}>{texto}</button>;
};

export default Boton;
