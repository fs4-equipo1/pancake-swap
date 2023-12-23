import Boton from "./componentes/Boton/Boton";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import styles from "./styles/pages/home.module.scss";
function App() {
  return (
    <div className={styles.container}>
      {/*<div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>
      <div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>*/}
      <FavoriteDex />
    </div>
  );
}

export default App;
