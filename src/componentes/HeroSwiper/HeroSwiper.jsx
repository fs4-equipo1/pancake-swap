import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { heroSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";
import "./HeroSwiper.scss";
import { useContext } from "react";

export default () => {

  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
    >
      {heroSwiperCardData.map((card, index) => (
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
      ))}
    </Swiper>
  );
};
