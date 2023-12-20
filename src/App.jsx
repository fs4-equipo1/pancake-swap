import { EcosystemCardsContainer } from "./EcosystemCard/EcosystemCard";
import BaseSwiper from "./componentes/BaseSwiper/BaseSwiper";
import Boton from "./componentes/Boton/Boton";
import { HeroSwiperCard } from "./componentes/HeroSwiperCard/HeroSwiperCard";
// import NewsSwiperCard from "./componentes/NewsSwiperCard/NewsSwiperCard";
import { heroSwiperCardData } from "./mocks/HeroSwiperCard.mock";
import styles from "./styles/pages/home.module.scss";
import {EcosystemCardsData} from "./EcosystemCard/EcosystemCardsData.ts";
function App() {
  return (
    <div className={styles.container}>
      <div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>
      <div>
        <Boton texto={"Transparent"} isTransparent={true} />
        <Boton texto={"Blue"} isBlue={true} />
        <Boton texto={"White"} isWhite={true} />
      </div>

      <BaseSwiper>
        {heroSwiperCardData.map((card, index) => (
          <HeroSwiperCard
            text={card.texto}
            botonPrimary={card.botonPrimary}
            botonSecondary={card.botonSecondary}
            link={card.link}
            key={index}
          />
        ))}
      </BaseSwiper>
      {/* <BaseSwiper>
        {data.map((card, index) => (
          <NewsSwiperCard text={card} key={index} />
        ))}
      </BaseSwiper> */}
      <EcosystemCardsContainer path={"./Assets/Images/trade-bunny.png"} titulo={"Trade"} cardData={EcosystemCardsData} objectId={1}/>
    </div>
  );
}

export default App;
