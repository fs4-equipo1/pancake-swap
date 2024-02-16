import images from "../../Assets/SwiperImages/HeroSwiperImages";
import { ArrowLink } from "../../Assets/Icons/ArrowLink";
import { ArrowRight } from "../../Assets/Icons/ArrowRight";
import Boton from "../componentes/Boton/Boton";
import styles from "../componentes/HeroSwiperCard/SwiperAnimations.module.scss"
import { t } from "i18next";

export const heroSwiperCardData = [
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
        Your CAKE, Your Voice
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
        texto="Get Started"
        icon={<ArrowRight color={"white"} />}
        isBlue
        isTextWhite
      />
    ),
    botonSecondary: <Boton texto="Learn More" isLearnWhite />,
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
          <ArrowLink color={"#34fba6"}/>
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
        texto="Trade Now"
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
  },
];
