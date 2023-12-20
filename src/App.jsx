import Boton from "./componentes/Boton/Boton";
import styles from "./styles/pages/home.module.scss";
function App() {
  return (
    <div className={styles.container}>
      <div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>
      <div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>
      <div>
        <favoriteDex></favoriteDex>
      </div>
    </div>
  );
}

export default App;
