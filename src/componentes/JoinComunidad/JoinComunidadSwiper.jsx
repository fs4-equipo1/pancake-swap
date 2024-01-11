import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { joinComunidadCardData } from "../../mocks/JoinComunidadCardData.mock";
import  JoinComunidadCard  from "./JoinComunidadCard";
import "./JoinComunidad.module.scss"
import "./SwiperComunidad.scss"

export default () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect={"fade"}
            fadeEffect={{ crossFade: true}}
            pagination ={{ clickable: true}}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
        >
            { joinComunidadCardData.map((card, index) => (
                <SwiperSlide key={index}>
                    <JoinComunidadCard
                        title= {card.title}
                        logo= {card.logo}
                        subtitle= {card.subtitle}
                        verificado={card.verificado}
                        nombreCuenta = {card.nombreCuenta}
                        fecha= {card.fecha}
                        likes= {card.likes}
                        numlikes= {card.numlikes}
                        estadisticas = {card.estadisticas}
                        numEstadisticas = {card.numEstadisticas}
                        texto = {card.texto}
                        enlace = {card.enlace}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}