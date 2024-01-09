import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { NewsSwiperCardData } from "../../mocks/NewsSwiperCard";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";
import SwiperPrev from "../../../Assets/Icons/SwiperPrev";
import SwiperNext from "../../../Assets/Icons/SwiperNext";

export default () => {
  return (
    <div className="featured-news-container">
      <div className="title-container">
        <div className="first-title">Featured</div>
        <div className="second-title">News</div>
      </div>
      <div className="swiper-container">
        <div className="prev">
          <SwiperPrev color={'var(--colors-primary)'} />
        </div>
        <Swiper
          className="news-swiper"
          modules={[Navigation]}
          slidesPerView={4}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          {NewsSwiperCardData.map((card, index) => (
            <SwiperSlide className="news-swiper-slide" key={index}>
              <NewsSwiperCard
                image={card.image}
                from={card.from}
                date={card.date}
                cardTitle={card.cardTitle}
                cardText={card.cardText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next">
          <SwiperNext color={'var(--colors-primary)'} />
        </div>
      </div>
    </div>
  );
};
