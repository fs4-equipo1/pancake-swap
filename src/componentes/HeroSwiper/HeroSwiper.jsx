import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
//import { heroSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";
import "./HeroSwiper.scss";
import { useEffect, useState } from "react";
//import { heroSwiperCardDataTablet } from "../../mocks/HeroSwiperResponsive.mock";
//import { heroSwiperCardDataMobile } from "../../mocks/HeroSwiperResponsive.mock";
import { heroSwiperCardData } from "../../mocks/HeroSwiperCard.mock";
import useSetDataSwiper from "./useSetDataSwiper";

export default () => {
  
  const { dataSwiper } = useSetDataSwiper();

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
      {dataSwiper.map((card, index) => (
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
