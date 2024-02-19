import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCards } from "./componentes/EcosystemCard/EcosystemCard";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import NewsSwiper from "./componentes/NewsSwiper/NewsSwiper";
import { VerticalSliderSection } from "./componentes/VerticalSliderSection/VerticalSliderSection";
import styles from "./componentes/MainBaseComponents/BaseSection.module.scss";
import { useState } from "react";
import DexNowSection from "./componentes/DexNow/DexNow";
import { CakeFigures } from "./componentes/CakeFigures/CakeFigures";
import { BaseSection } from "./componentes/MainBaseComponents/BaseSection";
import BotonArriba from "./componentes/BotonArriba/BotonArriba";
import { WalletConnect } from "./componentes/WalletConnect/WalletConnect"
import DropdownSticky from "./componentes/DropdownFoooter/DropdownSticky";
import { HeroSection } from "./componentes/BackgroundSections/HeroSection";

export function App() {
  return (

    <BaseSection>
      <Navbar />
      
      <HeroSection>
        <HeroSwiper />
        <FavoriteDex />
      </HeroSection>

      <InfiniteSlider />

      <EcosystemCards />

      <CakePotencial />

      <VerticalSliderSection />

      <CakeFigures />

      <JoinComunidad />

      <NewsSwiper />

      <DexNowSection />

      <Footer />

      {/* <BotonArriba/> */}
      
      <DropdownSticky />

      <BotonArriba />

    </BaseSection>
    
  );
}

export default App;
