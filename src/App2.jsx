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
