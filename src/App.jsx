import Boton from "./componentes/Boton/Boton";
import styles from "./styles/pages/home.module.scss";
import FavoriteDex from "./componentes/FavoriteDex/FavoriteDex";
function App() {
  return (
    <div className={styles.container}>
        <FavoriteDex/>
    </div>
  );
}

export default App;
