import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NewsSwiperCard from "../NewsSwiperCard/NewsSwiperCard";
import "./NewsSwiper.scss";
import SwiperPrev from "../../../Assets/Icons/SwiperPrev";
import SwiperNext from "../../../Assets/Icons/SwiperNext";
import Tipografia from "../Tipografia/Tipografia";
import { useTranslation } from "react-i18next";
import NewsSwiperImages from "../../../Assets/Images/SwiperImages/NewsSwiperImages";


export default () => {
  const { t } = useTranslation();

  const NewsSwiperCardData = [
    {
        image: <img src= {NewsSwiperImages.image1} alt="Imagen-1" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Dec 28, 2023",
        cardTitle: t("NewsTitle1"),
        cardText: t("NewsText1")
    },
    {
        image: <img src= {NewsSwiperImages.image2} alt="Imagen-2" className="featured-new-img"></img>,
        from: t("From") + "[CoinDesk]",
        date: "Dec 28, 2023",
        cardTitle: t("NewsTitle2"),
        cardText: t("NewsText2")
    },
    {
        image: <img src= {NewsSwiperImages.image3} alt="Imagen-3" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Nov 23, 2023",
        cardTitle: t("NewsTitle3"),
        cardText: t("NewsText3")
    },
    {
        image: <img src= {NewsSwiperImages.image4} alt="Imagen-4" className="featured-new-img"></img>,
        from: t("From") + "[The Block]",
        date: "Nov 15, 2023",
        cardTitle: t("NewsTitle4"),
        cardText: t("NewsText4")
    },
    {
        image: <img src= {NewsSwiperImages.image5} alt="Imagen-5" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Oct 30, 2023",
        cardTitle: t("NewsTitle5"),
        cardText: t("NewsText5")
    },
    {
        image: <img src= {NewsSwiperImages.image6} alt="Imagen-6" className="featured-new-img"></img>,
        from: t("From") + "[Decrypt]",
        date: "Aug 31, 2023",
        cardTitle: t("NewsTitle6"),
        cardText: t("NewsText6")
    },
    {
        image: <img src= {NewsSwiperImages.image7} alt="Imagen-7" className="featured-new-img"></img>,
        from: t("From") + "[CoinDesk]",
        date: "Aug 10, 2023",
        cardTitle: t("NewsTitle7"),
        cardText: t("NewsText7")
    },
    {
        image: <img src= {NewsSwiperImages.image8} alt="Imagen-8" className="featured-new-img"></img>,
        from: t("From") + "[Blockworks]",
        date: "Jul 28, 2023",
        cardTitle: t("NewsTitle8"),
        cardText: t("NewsText8")
    },
    {
        image: <img src= {NewsSwiperImages.image9} alt="Imagen-9" className="featured-new-img"></img>,
        from: t("From") + "[Google Cloud]",
        date: "Jul 11, 2023",
        cardTitle: t("NewsTitle9"),
        cardText: t("NewsText9")
    },

]

  return (
    <div className="featured-news-container">
      <div className="title-container">
        <div className="first-title">
        <Tipografia
            color={"--colors-text"}
            texto={t("Featured")}
            isTitle
          ></Tipografia></div>
        <div className="second-title">
        <Tipografia
            color={"--colors-secondary"}
            texto={t("News")}
            isTitle
          ></Tipografia>
        </div>
      </div>
      <div className="swiper-container">
        <div className="prev">
          <SwiperPrev color={'var(--colors-primary)'} />
        </div>
        <Swiper
          className="news-swiper"
          modules={[Navigation]}
          slidesPerView="auto"
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
