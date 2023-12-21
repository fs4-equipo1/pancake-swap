import imagenes from "../../public/assets/imagenes";
import Boton from "../componentes/Boton/Boton";
import { ArrowLink } from "../../Assets/Icons/ArrowLink";
import { ArrowRight } from "../../Assets/Icons/ArrowRight";

export const heroSwiperCardData = [
  {
    backgroundImg: imagenes.background1,
    colorBackground: "transparent",
    topLogo: (
      <img
        style={{
          marginLeft: "var(--space-8px)",
        }}
        src={imagenes.logoPancake}
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
          Introducing
        </div>
        <div
          style={{
            color: "#280d5f",
            marginRight: "var(--space-4px)",
          }}
        >
          Gauges Voting
        </div>
        <div
          style={{
            color: "var(--colors-secondary)",
          }}
        >
          and veCAKE
        </div>
      </div>
    ),
    botonPrimary: <Boton texto="Get Started" icon={<ArrowRight />} isBlue />,
    botonSecondary: <Boton texto="Learn More" isWhite />,
    bunnyPng: (
      <img
        style={{
          position: "absolute",
          right: "13%",
          bottom: 0,
          height: "257px",
          width: "235px",
        }}
        src={imagenes.desktopBunny}
        alt="Bunny"
      ></img>
    ),
    decorationPng: (
      <img
        style={{
          position: "absolute",
          right: "35%",
          top: -29,
          height: "77px",
          width: "72px",
        }}
        src={imagenes.cakeToken}
        alt="Bunny"
      ></img>
    ),
  },
  {
    backgroundImg: imagenes.background2,
    colorBackground: "rgb(32, 40, 61)",
    topLogo: (
      <img
        style={{
          marginLeft: "var(--space-8px)",
        }}
        src={imagenes.logoPancakeWhite}
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
        PancakeSwap Gaming Marketplace
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
          Explore Your
        </div>
        <div
          style={{
            height: "19px",
            width: "177px",
            margin: "0x 4px",
          }}
        >
          <img
            src={imagenes.gametext}
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
            webkitBackgroundClip: "text",
            webkitTextFillColor: "transparent",
          }}
        >
          1.5M Monthly Players Await!
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
          Try Now
          <ArrowLink />
        </a>
      </div>
    ),
    botonSecondary: null,
    bunnyPng: (
      <img
        style={{
          position: "absolute",
          right: "8%",
          bottom: 0,
          height: "100%",
          width: "235px",
        }}
        src={imagenes.gameBunny}
        alt="Bunny"
      ></img>
    ),
    decorationPng: (
      <img
        style={{
          position: "absolute",
          right: "29%",
          top: -22,
          height: "59px",
          width: "59px",
        }}
        src={imagenes.gameCube}
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
        Perpetual Futures
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
        UP TO 1001× LEVERAGE
      </div>
    ),
    botonPrimary: <Boton texto="Trade Now" icon={<ArrowRight />} isBlue />,
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
        src={imagenes.perpetualBunny}
        alt="Bunny"
      ></img>
    ),
    decorationPng: null,
  },
];
