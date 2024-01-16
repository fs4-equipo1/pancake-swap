import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCards } from "./EcosystemCard/EcosystemCard";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import NewsSwiper from "./componentes/NewsSwiper/NewsSwiper";
import { VerticalSliderSection } from "./componentes/VerticalSliderSection/VerticalSliderSection";
import styles from "./MainBaseComponents/BaseSection.module.scss";
import { useState } from "react";
import DexNowSection from "./componentes/DexNow/DexNow";
import { CakeFigures } from "./componentes/CakeFigures/CakeFigures";
import BotonArriba from "./componentes/BotonArriba/BotonArriba";

export function App() {
  // funciones para Theme Toggle
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  //fin funciones para Theme Toggle

  return (
    <div className={styles.leSection}>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>

      <HeroSwiper theme={theme} />

      <FavoriteDex theme={theme} />

      <InfiniteSlider theme={theme} />

      <EcosystemCards theme={theme} />

      <CakePotencial theme={theme} />

      <VerticalSliderSection theme={theme} />

      <CakeFigures theme={theme} /> 

      <JoinComunidad theme={theme} />

      <NewsSwiper theme={theme} />

      <DexNowSection theme={theme} />

      <Footer theme={theme} toggleTheme={toggleTheme}/>

    </div>
  );
}

export default App;
