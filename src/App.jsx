import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
// import imagenes from "../public/assets/imagenes";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import styles from "./styles/pages/home.module.scss";
import { EcosystemCardsData } from "./EcosystemCard/EcosystemCardsData";
import { EcosystemCardsContainer } from "./EcosystemCard/EcosystemCard";
import Boton from "./componentes/Boton/Boton";
import background from "./assets/background.png";
// import Tipografia from "./componentes/Tipografia/Tipografia";

import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import DexNow from "./componentes/DexNow/DexNow";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";

import VerticalSlider from "./componentes/VerticalSlider/VerticalSlider";
import VerticalLogoSlider from "./componentes/VerticalLogoSlider/VerticalLogoSlider";
import SliderSeparator from "./componentes/SliderSeparator/SliderSeparator";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";

// App
function App() {
  return (
    <div>
      <Navbar />
      <HeroSwiper />
      <div className={styles.container}>
        <FavoriteDex />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InfiniteSlider />
      </div>
      <section
        className="Ecosistema"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
       
        <EcosystemCardsContainer
          path={"./Assets/Images/trade-bunny.png"}
          titulo={"Trade"}
          cardData={EcosystemCardsData}
          objectId={1}
        />
        <EcosystemCardsContainer
          path={"./Assets/Images/asset36.png"}
          titulo={"Earn"}
          cardData={EcosystemCardsData}
          objectId={2}
          isReverse
        />
        <EcosystemCardsContainer
          path={"./Assets/Images/asset8.png"}
          titulo={"Game & NFT"}
          cardData={EcosystemCardsData}
          objectId={3}
        />
      </section>
      <div>
        <CakePotencial />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexGrow: "1",
              flexShrink: "0",
              flexDirection: "column",
              zIindex: "1",
              maxWidth: "100%",
              padding: "16px 24px",
            }}
          >
            
            <VerticalLogoSlider />
          </div>
          <SliderSeparator />
          <VerticalSlider />
          <div style={{ display: "flex", justifyContent: "center" }}></div>
        </div>
      </div>
      
      
      

      <div className={styles.container}>
        <JoinComunidad />
      </div>

      <div>
        <section
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          {/* <h1>Join Everyone's Favorite DEX Now!</h1> */}
          <div>
            <DexNow titleLarge={"Join Everyone's Favorite DEX Now!"} />
          </div>
          <div>
            <Boton texto={"Connect Wallet"} isBlue={true} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
