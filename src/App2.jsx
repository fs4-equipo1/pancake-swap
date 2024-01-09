import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCardContainersContainer } from "./EcosystemCard/EcosystemCard";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";
import VerticalRightSlider from "./componentes/VerticalSlider/VerticalRightSlider";
import VerticalLeftSlider from "./componentes/VerticalLogoSlider/VerticalLeftSlider";
import SliderSeparator from "./componentes/SliderSeparator/SliderSeparator";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import { BaseSection } from "./MainBaseComponents/BaseSection";
import NewsSwiper from "./componentes/NewsSwiper/NewsSwiper";
import { VerticalSliderSection } from "./componentes/VerticalSliderSection/VerticalSliderSection";
import styles from "./MainBaseComponents/BaseSection.module.scss"

function App2() {
  return (
    <div className={styles.leSection}>
      {/* <BaseSection> */}
        <Navbar />
      {/* </BaseSection> */}      {/* si dejamos elemento basesection, no funciona style sticky con respecto a la pagina */}

      {/* <BaseSection> */}
        <HeroSwiper />
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <FavoriteDex />
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <InfiniteSlider />
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <EcosystemCardContainersContainer />
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <CakePotencial />
      {/* </BaseSection> */}

      {/* <BaseSection flexDirection={"row"}> */}
        <VerticalSliderSection/>
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <JoinComunidad />
      {/* </BaseSection> */}

      {/* <BaseSection> */}
        <NewsSwiper />
      {/* </BaseSection> */}

      {/* <BaseSection backgroundColor={"#27262c"}> */}
        <Footer />
      {/* </BaseSection> */}
    </div>
  );
}

export default App2;
