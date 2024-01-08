import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import imagenes from "../public/assets/imagenes";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import styles from "./styles/pages/home.module.scss";
import { EcosystemCardsData } from "./EcosystemCard/EcosystemCardsData";
import { EcosystemCardContainersContainer, EcosystemCardsContainer } from "./EcosystemCard/EcosystemCard";
import Boton from "./componentes/Boton/Boton";
import background from "./assets/background.png";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import LanguageDropdown from "./componentes/LanguageDropdown/LanguageDropdown";
import { Icono } from "./componentes/Icono/Icono";
import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import DexNow from "./componentes/DexNow/DexNow";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";
import ThemeToggle from "./componentes/ThemeToggle/ThemeToggle";
import VerticalRightSlider from "./componentes/VerticalSlider/VerticalRightSlider";
import VerticalLeftSlider from "./componentes/VerticalLogoSlider/VerticalLeftSlider";
import SliderSeparator from "./componentes/SliderSeparator/SliderSeparator";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import { BaseSection } from "./MainBaseComponents/BaseSection";

function App2() {
  return (
    <div>
      <BaseSection>
        <Navbar />
      </BaseSection>

      <BaseSection>
        <HeroSwiper />
      </BaseSection>

      <BaseSection>
        <FavoriteDex />
      </BaseSection>

      <BaseSection>
        <InfiniteSlider />
      </BaseSection>

      <BaseSection>
        <EcosystemCardContainersContainer />
      </BaseSection>

      <BaseSection>
        <CakePotencial/>
      </BaseSection>

      <BaseSection flexDirection={'row'}>
        <VerticalLeftSlider/>
        <SliderSeparator/>
        <VerticalRightSlider/>
      </BaseSection>

      <BaseSection>
        <JoinComunidad/>
      </BaseSection>

      <BaseSection>
        <Footer />
      </BaseSection>

    </div>
  );
}

export default App2;
