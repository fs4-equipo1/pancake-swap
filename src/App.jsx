import Boton from "./componentes/Boton/Boton";
import Tipografia from "./componentes/Tipografia/Tipografia";
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
        <Tipografia
          color={"--colors-text"}
          texto={"Title Large"}
          isTitleLarge
        />
        <Tipografia color={"--colors-background"} texto={"Title"} isTitle />
        <Tipografia
          color={"--colors-textSubtle"}
          texto={"Subtitle large"}
          isSubtitleLarge
        />
        <Tipografia
          color={"--colors-textSubtle"}
          texto={"Subtitle"}
          isSubtitle
        />
        <Tipografia
          color={"--colors-text"}
          texto={"Body Large"}
          isBodyLarge
        />
        <Tipografia color={"--colors-text99"} texto={"Body"} isBody />

        <div className={styles.textContainer}>
          <Tipografia
            color={"--colors-white"}
            texto={"Everyone's"}
            isTitleLarge
          />
          <div className={styles.subtext}>
            <Tipografia
              color={"--colors-secondary"}
              texto={"Favorite"}
              isTitleLarge
            />
            <Tipografia color={"--colors-white"} texto={"DEX"} isTitleLarge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
