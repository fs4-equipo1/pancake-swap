import imagenes from "../../public/assets/imagenes";
import Boton from "../componentes/Boton/Boton";

export const heroSwiperCardData = [
  {
    background: imagenes.background1,
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
            color: "var(--colors-text)",
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
    botonPrimary: <Boton texto="Get Started" isBlue />,
    botonSecondary: <Boton texto="Learn More" isWhite />,
    bunnyPng: (
      <img
        style={{
          position: "absolute",
          right: "15%",
          bottom: 0,
          height: "257px",
          width: "235px",
        }}
        src={imagenes.desktopBunny}
        alt="Bunny"
      ></img>
    ),
  },
  {
    background: imagenes.background2,
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
          <img src={imagenes.gametext} alt="GameFi Spirit" />
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
          }}
        >
          Try Now
        </a>
      </div>
    ),
    botonSecondary: null,
    bunnyPng: (
      <img
        style={{
          position: "absolute",
          right: "10%",
          bottom: 0,
          height: "100%",
          width: "235px",
        }}
        src={imagenes.gameBunny}
        alt="Bunny"
      ></img>
    ),
  },
];
