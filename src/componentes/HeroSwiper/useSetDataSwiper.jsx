import React, { useEffect, useState } from "react";
import images from "../../../Assets/Images/SwiperImages/HeroSwiperImages";
import { ArrowLink } from "../../../Assets/Icons/ArrowLink";
import { ArrowRight } from "../../../Assets/Icons/ArrowRight";
import { useTranslation } from "react-i18next";
import "./HeroSwiper.scss";
import Boton from "../Boton/Boton";
import classNames from "classnames/bind";
import styles from "../HeroSwiperCard/SwiperAnimations.module.scss";

const cx = classNames.bind();
const useSetDataSwiper = () => {
  const { t, i18n } = useTranslation();
  const className = cx({
    es: i18n.language === "es",
    en: i18n.language === "en",
  });

  console.log("Const Classname:", className);

  const heroSwiperCardData = [
    {
      backgroundImg: images.background1,
      colorBackground: "transparent",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancake}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            color: "var(--colors-yellow)",
            lineHeight: 1.3,
          }}
        >
          {t("YouCAKEYourVoice")}
        </h4>
      ),
      secondText: (
        <div
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              color: "var(--colors-secondary)",
              marginRight: "var(--space-4px)",
            }}
          >
            {t("Introducing")}
          </div>
          <div
            style={{
              color: "#280d5f",
              marginRight: "var(--space-4px)",
            }}
          >
            {t("GaugesVoting")}
          </div>
          <div
            style={{
              color: "var(--colors-secondary)",
            }}
          >
            {t("andveCAKE")}
          </div>
        </div>
      ),
      botonPrimary: (
        <Boton
          texto={t("GetStarted")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isTextWhite
        />
      ),
      botonSecondary: <Boton texto={t("LearnMore")} isWhite isLearnWhite />,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "14%",
            bottom: 0,
            height: "247px",
            width: "225px",
          }}
          src={images.desktopBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationToken}
          style={{
            position: "absolute",
            right: "35%",
            top: -29,
            height: "77px",
            width: "72px",
          }}
          src={images.cakeToken}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: images.background2,
      colorBackground: "rgb(32, 40, 61)",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancakeWhite}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            color: "var(--colors-gold)",
          }}
        >
          {t("PancakeGamingMarketplace")}
        </h4>
      ),
      secondText: (
        <div
          style={{
            fontWeight: 900,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              color: "#34fba6",
              marginLeft: "var(--space-6px)",
              marginRight: "var(--space-4px)",
              fontSize: "22px",
            }}
          >
            {t("ExploreYour")}
          </div>
          <div
            style={{
              height: "19px",
              width: "177px",
              margin: "0x 4px",
            }}
          >
            <img
              src={images.gametext}
              style={{ width: "100%", height: "100%" }}
              alt="GameFi Spirit"
            />
          </div>
          <div
            style={{
              color: "#34fba6",
              marginLeft: "var(--space-6px)",
              fontSize: "22px",
              background:
                "-webkit-linear-gradient(0deg,rgb(136, 255, 92) 10.97%,rgb(244, 226, 59) 27.39%,rgb(255, 223, 56) 99.79%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("MonthlyPlayers")}
          </div>
        </div>
      ),
      botonPrimary: (
        <div>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontWeight: 900,
              margin: "var(--space-6px)",
              color: "#34fba6",
              fontSize: "var(--fontSizes-16px)",
              display: "flex",
              gap: "10px",
            }}
          >
            {t("TryNow")}
            <ArrowLink color={"#34fba6"} />
          </a>
        </div>
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "5%",
            bottom: 0,
            height: "100%",
            width: "235px",
          }}
          src={images.gameBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationCube}
          style={{
            position: "absolute",
            right: "29%",
            top: -22,
            height: "59px",
            width: "59px",
          }}
          src={images.gameCube}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: null,
      colorBackground: "rgb(73, 34, 134)",
      topLogo: null,
      titleText: (
        <h6
          style={{
            fontWeight: 900,
            fontSize: "var(--fontSizes-20px)",
            margin: "-10px 0px 6px 6px",
            color: "var(--colors-gold)",
          }}
        >
          {t("PerpetualFutures")}
        </h6>
      ),
      secondText: (
        <div
          style={{
            color: "var(--colors-white)",
            marginLeft: "var(--space-6px)",
            marginRight: "var(--space-4px)",
            fontSize: "38px",
          }}
        >
          {t("UPTO1001×LEVERAGE")}
        </div>
      ),
      botonPrimary: (
        <Boton
          texto={t("TradeNow")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isTextWhite
        />
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "var(--space-8px)",
            bottom: 0,
            height: "247px",
            width: "392px",
          }}
          src={images.perpetualBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: null,
      showCard: true,
    },
  ];

  const heroSwiperCardDataTablet = [
    {
      backgroundImg: images.background1,
      colorBackground: "transparent",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancake}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            color: "var(--colors-yellow)",
            lineHeight: 1.1,
            fontSize: "24px",
          }}
        >
          {t("YouCAKEYourVoice")}
        </h4>
      ),
      secondText: null,
      botonPrimary: (
        <Boton
          texto={t("GetStarted")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isSmall
          isTextWhite
        />
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "18%",
            bottom: 0,
            height: "220px",
            width: "200px",
          }}
          src={images.mobileBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationToken}
          style={{
            position: "absolute",
            right: "44%",
            top: -29,
            height: "77px",
            width: "72px",
          }}
          src={images.cakeToken}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: null,
      colorBackground: "rgb(32, 40, 61)",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancakeWhite}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            color: "var(--colors-gold)",
            fontSize: "24px",
            lineHeight: 1.1,
          }}
        >
          {t("PancakeGamingMarketplace")}
        </h4>
      ),
      secondText: null,
      botonPrimary: (
        <div>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontWeight: 900,
              marginLeft: "8px",
              color: "#34fba6",
              fontSize: "var(--fontSizes-16px)",
              display: "flex",
              gap: "10px",
            }}
          >
            {t("Try Now")}
            <ArrowLink color={"#34fba6"} />
          </a>
        </div>
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "150px",
          }}
          src={images.gameMobileBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationCube}
          style={{
            position: "absolute",
            right: "29%",
            top: -22,
            height: "59px",
            width: "59px",
          }}
          src={images.gameCube}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: null,
      colorBackground: "rgb(73, 34, 134)",
      topLogo: null,
      titleText: (
        <h6
          style={{
            fontWeight: 900,
            fontSize: "var(--fontSizes-20px)",
            margin: "-20px 0px 6px 6px",
            color: "var(--colors-gold)",
          }}
        >
          {t("PerpetualFutures")}
        </h6>
      ),
      secondText: (
        <div
          style={{
            color: "var(--colors-white)",
            marginLeft: "var(--space-6px)",
            marginRight: "var(--space-4px)",
            fontSize: "24px",
            lineHeight: 1.1,
          }}
        >
          {t("UPTO1001×LEVERAGE")}
        </div>
      ),
      botonPrimary: (
        <Boton
          texto={t("TradeNow")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isSmall
          isTextWhite
        />
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "0",
            bottom: "-6.7px",
            height: "215.5px",
            width: "392px",
          }}
          src={images.perpetualMobile}
          alt="Bunny"
        ></img>
      ),
      decorationPng: null,
      showCard: true,
    },
  ];

  const heroSwiperCardDataMobile = [
    {
      backgroundImg: images.background1mobile,
      colorBackground: "transparent",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancake}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "var(--space-6px)",
            color: "var(--colors-yellow)",
            lineHeight: 1.3,
            fontSize: "18px",
          }}
        >
          {t("YouCAKEYourVoice")}
        </h4>
      ),
      secondText: null,
      botonPrimary: (
        <Boton
          texto={t("GetStarted")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isSmall
          isTextWhite
        />
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "7px",
            bottom: "30px",
            height: "180px",
          }}
          src={images.mobileBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationToken}
          style={{
            position: "absolute",
            right: "35%",
            top: -29,
            height: "58px",
            width: "54px",
          }}
          src={images.cakeToken}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: null,
      colorBackground: "rgb(32, 40, 61)",
      topLogo: (
        <img
          style={{
            marginLeft: "var(--space-8px)",
          }}
          src={images.logoPancakeWhite}
          alt="Logo Pancake"
        />
      ),
      titleText: (
        <h4
          style={{
            fontWeight: 900,
            margin: "4px",
            color: "var(--colors-gold)",
            fontSize: "20px",
          }}
        >
          {t("GamingMarketplace")}
        </h4>
      ),
      secondText: null,
      botonPrimary: (
        <div>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontWeight: 900,
              marginLeft: "4px",
              color: "#34fba6",
              fontSize: "var(--fontSizes-16px)",
              display: "flex",
              gap: "10px",
            }}
          >
            {t("TryNow")}
            <ArrowLink color={"#34fba6"} />
          </a>
        </div>
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "0",
            bottom: "0",
            height: "100%",
            width: "150px",
          }}
          src={images.gameMobileBunny}
          alt="Bunny"
        ></img>
      ),
      decorationPng: (
        <img
          className={styles.animationCube}
          style={{
            position: "absolute",
            right: "19%",
            top: -22,
            height: "59px",
            width: "59px",
          }}
          src={images.gameCube}
          alt="Bunny"
        ></img>
      ),
      showCard: true,
    },
    {
      backgroundImg: null,
      colorBackground: "rgb(73, 34, 134)",
      topLogo: null,
      titleText: (
        <h6
          style={{
            fontWeight: 900,
            fontSize: "19px",
            margin: "-29px 0px 6px 6px",
            color: "var(--colors-gold)",
          }}
        >
          {t("PerpetualFutures")}
        </h6>
      ),
      secondText: (
        <div
          style={{
            color: "var(--colors-white)",
            marginLeft: "var(--space-6px)",
            marginRight: "var(--space-4px)",
            fontSize: "18px",
          }}
        >
          {t("UPTO1001×LEVERAGE")}
        </div>
      ),
      botonPrimary: (
        <Boton
          texto={t("TradeNow")}
          icon={<ArrowRight color={"white"} />}
          isBlue
          isSmall
          isTextWhite
        />
      ),
      botonSecondary: null,
      bunnyPng: (
        <img
          style={{
            position: "absolute",
            right: "0.2px",
            bottom: "-6.80px",
            height: "216px",
            width: "392px",
          }}
          src={images.perpetualMobile}
          alt="Bunny"
        ></img>
      ),
      decorationPng: null,
      showCard: true,
    },
  ];

  const [dataSwiper, setDataSwiper] = useState(
    window.innerWidth >= 1084
      ? heroSwiperCardData
      : window.innerWidth >= 590
      ? heroSwiperCardDataTablet
      : heroSwiperCardDataMobile
  );

  useEffect(() => {
    const handleResize = () => {
      console.log("Se ejecuta handleResize");

      setDataSwiper(
        window.innerWidth >= 1084
          ? heroSwiperCardData
          : window.innerWidth >= 590
          ? heroSwiperCardDataTablet
          : heroSwiperCardDataMobile
      );
    };
    console.log("Se ejecuta el use effect");
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [t]);

  return {
    dataSwiper,
  };
};

export default useSetDataSwiper;
