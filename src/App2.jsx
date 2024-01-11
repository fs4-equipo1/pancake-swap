import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import { EcosystemCardContainersContainer } from "./EcosystemCard/EcosystemCard";
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

function App2() {
  // funciones para Theme Toggle
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  //fin funciones para Theme Toggle

  //Las funciones ThemeToggle estaban en ThemeToggle.jsx y usaban un useState. En vez de eso, se ha cambiado a un useEffect.
  //El UseEffect establece que ha de cambiar y como (el theme, que en ThemeToggle.jsx es una variable, y la
  //arrowfunction que setea el tema general de la pagina) y las dependencias, que esencialmente, es el objeto [Theme].
  //El objeto [theme] ha de ser fabricado mediante un useState aqui, en app.jsx, y pasado como prop hasta donde haga falta (en
  //donde este usado el themetoggle, es decir, en navbar y en el footer) y de ahi ser pasado de nuevo como prop al ThemeToggle de cada uno.

  //El codigo no ha cambiado, unicamente se ha movido el sestate y el objeto Theme al app, de forma global. Los elementos capaces de variar
  //son pasados como props a los elementos padres de los dos themtoggles. De este modo, ambos tienen acceso simultaneo al tema de la pagina,
  //sin interferir uno con otro


  return (
    <div className={styles.leSection}>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>

      <HeroSwiper theme={theme} />

      <FavoriteDex theme={theme} />

      <InfiniteSlider theme={theme} />

      <EcosystemCardContainersContainer theme={theme} />

      <CakePotencial theme={theme} />

      <VerticalSliderSection theme={theme} />

      <JoinComunidad theme={theme} />

      <NewsSwiper theme={theme} />

      <DexNowSection theme={theme} />

      <Footer theme={theme} toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App2;
