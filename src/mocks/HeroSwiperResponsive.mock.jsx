import images from "../../Assets/SwiperImages/HeroSwiperImages";
import Boton from "../componentes/Boton/Boton";
import { ArrowLink } from "../../Assets/Icons/ArrowLink";
import { ArrowRight } from "../../Assets/Icons/ArrowRight";
import styles from "../componentes/HeroSwiperCard/SwiperAnimations.module.scss";

export const heroSwiperCardDataTablet = [
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
        Your CAKE, Your Voice
      </h4>
    ),
    secondText: null,
    botonPrimary: (
      <Boton
        texto="Get Started"
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
        Pancake Gaming Marketplace
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
          Try Now
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
        Perpetual Futures
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
        UP TO 1001× LEVERAGE
      </div>
    ),
    botonPrimary: (
      <Boton
        texto="Trade Now"
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
  },
];

export const heroSwiperCardDataMobile = [
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
        Your CAKE, Your Voice
      </h4>
    ),
    secondText: null,
    botonPrimary: (
      <Boton
        texto="Get Started"
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
        Gaming Marketplace
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
          Try Now
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
        Perpetual Futures
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
        UP TO 1001× LEVERAGE
      </div>
    ),
    botonPrimary: (
      <Boton
        texto="Trade Now"
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
  },
];
