import styles from "./EcosystemCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function Card({imageSrc, titleText, contentText, commandText}){
    return (
        <div>
            <img src={imageSrc} alt="" />
            <h3>{titleText}</h3>
            <p>{contentText}</p>
            <h4>{commandText}</h4>
        </div>
    )
}