import styles from "./Boton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Boton = ({
  texto,
  isLearn,
  isTransparent,
  isBlue,
  isWhite,
  isLearnWhite,
  isSmall,
  isTextWhite,
  isConnectWallet,
  icon,
  onClick,
}) => {
  const className = cx({
    button: true,
    transparent: isTransparent,
    blue: isBlue,
    white: isWhite,
    learnWhite: isLearnWhite,
    learn: isLearn,
    small: isSmall,
    textWhite: isTextWhite,
    connectWallet: isConnectWallet,
  });
  return (
    <button className={className} onClick={onClick}>
      {texto}
      {icon}
    </button>
  );
};

export default Boton;
