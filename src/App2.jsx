import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCardContainersContainer } from "./EcosystemCard/EcosystemCard";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import Navbar from "./componentes/Navbar/Navbar";
import Footer, { FooterSection } from "./componentes/Footer/Footer";
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
import DexNowSection from "./componentes/DexNow/DexNow";
import { CakeFigures } from "./componentes/CakeFigures/CakeFigures";
import BotonArriba from "./componentes/BotonArriba/BotonArriba";

function App2() {
  return (
    <div className={styles.leSection}>
        <Navbar />

        <HeroSwiper />

        <FavoriteDex />

        <InfiniteSlider />

        <EcosystemCardContainersContainer />

        <CakePotencial />

        <VerticalSliderSection/>

        <CakeFigures />

        <JoinComunidad />

        <NewsSwiper />

        <DexNowSection />

        <BotonArriba />

        <FooterSection />
    </div>
  );
}

export default App2;
