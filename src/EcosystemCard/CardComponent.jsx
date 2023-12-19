import styles from "./EcosystemCard.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function EcosystemCard ({ident}){
    return(
        <div>
            <img className="imagenGrande" src="" alt="" />
            <div className="upperContainer">
                <h2>{ident}</h2>
                <div className="cardContainer" >
                    <Card imageSrc={"./Assets/Images/asset3.png"} titleText={"Swap"} contentText={'Trade crypto instantly across multiple chains'} commandText={"Trade now"}/>
                    <Card imageSrc={"./Assets/Images/asset3.png"} titleText={"Swap"} contentText={'Trade crypto instantly across multiple chains'} commandText={"Trade now"}/>
                    <Card imageSrc={"./Assets/Images/asset3.png"} titleText={"Swap"} contentText={'Trade crypto instantly across multiple chains'} commandText={"Trade now"}/>
                    <Card imageSrc={"./Assets/Images/asset3.png"} titleText={"Swap"} contentText={'Trade crypto instantly across multiple chains'} commandText={"Trade now"}/>
                    <Card imageSrc={"./Assets/Images/asset3.png"} titleText={"Swap"} contentText={'Trade crypto instantly across multiple chains'} commandText={"Trade now"}/>
                </div>
            </div>
        </div>
    )
}

export function Card({ imageSrc, titleText, contentText, commandText }) {
  return (
    <div>
      <img src={imageSrc} />
      <h3>{titleText}</h3>
      <p>{contentText}</p>
      <h4>{commandText}</h4>
    </div>
  );
}

