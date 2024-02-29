import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
//import { heroSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";
import "./HeroSwiper.scss";

//import { heroSwiperCardDataTablet } from "../../mocks/HeroSwiperResponsive.mock";
//import { heroSwiperCardDataMobile } from "../../mocks/HeroSwiperResponsive.mock";
import useSetDataSwiper from "./useSetDataSwiper";
import { useActiveNetwork } from "../../context/ActiveNetworkContext";
import { useAccount } from "wagmi";
import HeroSwiperCardUser from "../HeroSwiperCard/HeroSwiperCardUser";
import { IconUser } from "../../../Assets/Icons/IconUser";
import useAddress from "../WalletConnect/useAddress";
import { ArrowIconUser } from "../../../Assets/Icons/ArrowIconUser";

export function HeroSwiper() {
  const { dataSwiper } = useSetDataSwiper();
  const { activeNetwork } = useActiveNetwork();
  const { isConnected } = useAccount();
  const { address, formatAddressUser } = useAddress();
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      className="hero-swiper"
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {dataSwiper.map((card, index) => {
        if (card.showCard) {
          return (
            <SwiperSlide key={index}>
              <HeroSwiperCard
                backgroundImg={card.backgroundImg}
                colorBackground={card.colorBackground}
                topLogo={card.topLogo}
                titleText={card.titleText}
                secondText={card.secondText}
                botonPrimary={card.botonPrimary}
                botonSecondary={card.botonSecondary}
                bunnyPng={card.bunnyPng}
                decorationPng={card.decorationPng}
              />
            </SwiperSlide>
          );
        } 
      })}
      {activeNetwork.chainId == "0x38" && isConnected && (
        <SwiperSlide>
        <HeroSwiperCardUser
          iconUser={<IconUser/>}
          textUser={`Connected with ${formatAddressUser(address)}`}
          moneyUser="0$"
          phraseUser="to collect" 
        />
      </SwiperSlide>
      )}
    </Swiper>
  );
}

export default HeroSwiper;
