import { t } from "i18next";
import images from "../../Assets/SwiperImages/NewsSwiperImages";


export const NewsSwiperCardData = [
    {
        image: <img src= {images.image1} alt="Imagen-1" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Dec 28, 2023",
        cardTitle: t("NewsTitle1"),
        cardText: t("NewsText1")
    },
    {
        image: <img src= {images.image2} alt="Imagen-2" className="featured-new-img"></img>,
        from: t("From") + "[CoinDesk]",
        date: "Dec 28, 2023",
        cardTitle: t("NewsTitle2"),
        cardText: t("NewsText2")
    },
    {
        image: <img src= {images.image3} alt="Imagen-3" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Nov 23, 2023",
        cardTitle: t("NewsTitle3"),
        cardText: t("NewsText3")
    },
    {
        image: <img src= {images.image4} alt="Imagen-4" className="featured-new-img"></img>,
        from: t("From") + "[The Block]",
        date: "Nov 15, 2023",
        cardTitle: t("NewsTitle4"),
        cardText: t("NewsText4")
    },
    {
        image: <img src= {images.image5} alt="Imagen-5" className="featured-new-img"></img>,
        from: t("From") + "[Cointelegraph]",
        date: "Oct 30, 2023",
        cardTitle: t("NewsTitle5"),
        cardText: t("NewsText5")
    },
    {
        image: <img src= {images.image6} alt="Imagen-6" className="featured-new-img"></img>,
        from: t("From") + "[Decrypt]",
        date: "Aug 31, 2023",
        cardTitle: t("NewsTitle6"),
        cardText: t("NewsText6")
    },
    {
        image: <img src= {images.image7} alt="Imagen-7" className="featured-new-img"></img>,
        from: t("From") + "[CoinDesk]",
        date: "Aug 10, 2023",
        cardTitle: t("NewsTitle7"),
        cardText: t("NewsText7")
    },
    {
        image: <img src= {images.image8} alt="Imagen-8" className="featured-new-img"></img>,
        from: t("From") + "[Blockworks]",
        date: "Jul 28, 2023",
        cardTitle: t("NewsTitle8"),
        cardText: t("NewsText8")
    },
    {
        image: <img src= {images.image9} alt="Imagen-9" className="featured-new-img"></img>,
        from: t("From") + "[Google Cloud]",
        date: "Jul 11, 2023",
        cardTitle: t("NewsTitle9"),
        cardText: t("NewsText9")
    },

]