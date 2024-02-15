import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { joinComunidadCardData } from "../../mocks/JoinComunidadCardData.mock";
import JoinComunidadCard from "./JoinComunidadCard";
import "./JoinComunidad.module.scss";
import "./SwiperComunidad.scss";


export default () => {
  return (
    <Swiper
      style={{ width: "100%", height: '100%', padding: '0px'}}
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true}}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
    >
      {joinComunidadCardData.map((card, index) => (
        <SwiperSlide key={index}>
          <JoinComunidadCard
            title={card.title}
            logo={card.logo}
            image={card.image}
            fecha={card.fecha}
            subtitle={card.subtitle}
            socialMedia={card.socialMedia}
            texto={card.texto}
            enlace={card.enlace}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
