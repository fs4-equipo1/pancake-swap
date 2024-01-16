import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCards } from "./componentes/EcosystemCard/EcosystemCard";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import NewsSwiper from "./componentes/NewsSwiper/NewsSwiper";
import { VerticalSliderSection } from "./componentes/VerticalSliderSection/VerticalSliderSection";
import { useState } from "react";
import DexNowSection from "./componentes/DexNow/DexNow";
import { CakeFigures } from "./componentes/CakeFigures/CakeFigures";
import { BaseSection } from "./componentes/MainBaseComponents/BaseSection";
import BotonArriba from "./componentes/BotonArriba/BotonArriba";
import { JoinComunidadSection } from "./componentes/JoinComunidad/JoinComunidad";

export function App() {
  // funciones para Theme Toggle
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  //fin funciones para Theme Toggle

  return (
    <BaseSection>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>

      <HeroSwiper theme={theme} />

      <FavoriteDex theme={theme} />

      <InfiniteSlider theme={theme} />

      <EcosystemCards theme={theme} />

      <CakePotencial theme={theme} />

      <VerticalSliderSection theme={theme} />

      <CakeFigures theme={theme} /> 

      <JoinComunidadSection theme={theme}/>

      <NewsSwiper theme={theme} />

      <DexNowSection theme={theme} />

      <Footer theme={theme} toggleTheme={toggleTheme}/>

      <BotonArriba />

    </BaseSection>
  );
}

export default App;
