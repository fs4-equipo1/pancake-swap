import Boton from "./componentes/Boton/Boton";
import styles from "./Favorite-Dex/Favorite-Dex.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function favoriteDex(){
    return(
        <div>
            <Tipografia></Tipografia>
            <Boton></Boton>
            <img></img>
        </div>
    );
}