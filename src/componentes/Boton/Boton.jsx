import styles from "./Boton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Boton = ({
  texto,
  isLearn,
  isTransparent,
  isBlue,
  isWhite,
  isSmall,
  isTextWhite,
  icon,
  onClick,
}) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    white: isWhite,
    learn: isLearn,
    small: isSmall,
    textWhite: isTextWhite,
  });

  return (
    <button onClick={onClick} className={className}>
      {texto}
      {icon}
    </button>
  );
};

export default Boton;
