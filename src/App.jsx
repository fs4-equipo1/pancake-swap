import HeroSwiper from "./componentes/HeroSwiper/HeroSwiper";
import imagenes from "../public/assets/imagenes";
import FavoriteDex from "./componentes/FavouriteDex/FavoriteDex";
import styles from "./styles/pages/home.module.scss";
import { EcosystemCardsData } from "./EcosystemCard/EcosystemCardsData";
import { EcosystemCardsContainer } from "./EcosystemCard/EcosystemCard";
import Boton from "./componentes/Boton/Boton";
import background from "./assets/background.png";
// import Tipografia from "./componentes/Tipografia/Tipografia";
import LanguageDropdown from "./componentes/LanguageDropdown/LanguageDropdown";
import { Icono } from "./componentes/Icono/Icono";
import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import Navbar from "./componentes/Navbar/Navbar";
import Footer from "./componentes/Footer/Footer";
import DexNow from "./componentes/DexNow/DexNow";
import InfiniteSlider from "./componentes/InfiniteSlider/InfiniteSlider";
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
// import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";
import ThemeToggle from "./componentes/ThemeToggle/ThemeToggle";
import VerticalRightSlider from "./componentes/VerticalSlider/VerticalRightSlider";
import VerticalLeftSlider from "./componentes/VerticalLogoSlider/VerticalLeftSlider";
import SliderSeparator from "./componentes/SliderSeparator/SliderSeparator";
import CakePotencial from "./componentes/CakePotencial/CakePotencial";
import { BaseSection } from "./MainBaseComponents/BaseSection";
// App
function App() {
  return (
    <div>
      {/* PRUEBA DE BASE-SECTION */}
      
      <BaseSection flexDirection={'column'}>
        <div><h1>el componente base-section funciona adecuadamente</h1></div>
        <div>Ademas coloca las cosas bien</div>
      </BaseSection>

      {/* PRUEBA DE BASE-SECTION */}

      <Navbar />
      <HeroSwiper />
      <div className={styles.container}>
        <FavoriteDex />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <InfiniteSlider />
      </div>
      <section
        className="Ecosistema"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
       
        <EcosystemCardsContainer
          path={"./Assets/Images/trade-bunny.png"}
          titulo={"Trade"}
          cardData={EcosystemCardsData}
          objectId={1}
        />
        <EcosystemCardsContainer
          path={"./Assets/Images/asset36.png"}
          titulo={"Earn"}
          cardData={EcosystemCardsData}
          objectId={2}
          isReverse
        />
        <EcosystemCardsContainer
          path={"./Assets/Images/asset8.png"}
          titulo={"Game & NFT"}
          cardData={EcosystemCardsData}
          objectId={3}
        />
      </section>
      <div>
        <CakePotencial />
      
        <div style={{display: 'flex', flexDirection: 'row', alignItems:"center", justifyContent: "center", height:"auto", margin: "var(--space-48px)"}}>
          <VerticalLeftSlider/>
          <SliderSeparator/>
          <VerticalRightSlider/>
        </div>

      </div>


      <div className={styles.container}>
        <JoinComunidad />
      </div>

      <div>
        <section
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "550px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          {/* <h1>Join Everyone's Favorite DEX Now!</h1> */}
          <div>
            <DexNow titleLarge={"Join Everyone's Favorite DEX Now!"} />
          </div>
          <div>
            <Boton texto={"Connect Wallet"} isBlue={true} />
          </div>
        </section>
      </div>
      <div
        style={{
          background: "#27262c",
          display: "flex",
          justifyContent: "center",
          padding: "56px 40px 32px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: "32px",
              padding: "0px",
            }}
          >
            <Footer
              title={"ECOSYSTEM"}
              items={[
                "Trade",
                "Earn",
                "Game",
                "NFT",
                "Tokenomics",
                "Litepaper",
                "CAKE Emission Projection",
                "Merchandise",
              ]}
            />
            <div></div>
            <Footer
              title={"BUSINESS"}
              items={["Farms And Syrup Pools", "IFO", "NFT Marketplace"]}
            />
            <Footer
              title={"DEVELOPERS"}
              items={["Contributing", "Github", "Bug Bounty"]}
            />
            <Footer
              title={"SUPPORT"}
              items={["Contact", "Troubleshooting", "Documentation"]}
            />
            <Footer
              title={"ABOUT"}
              items={["Terms Of Service", "Blog", "Brand Assets", "Careers"]}
            />
            <img
              src={imagenes.logoPancakeWhite}
              alt="Pancake"
              style={{ width: "160px", height: "25px" }}
            ></img>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "30px",
              marginBottom: "32px",
            }}
          >
            <Icono
              icono={<FaTwitter />}
              href="https://twitter.com/pancakeswap"
            />
            <Icono icono={<FaTelegram />} href="https://t.me/pancakeswap" />
            <Icono
              icono={<FaReddit />}
              href="https://www.reddit.com/r/pancakeswap"
            />
            <Icono
              icono={<FaInstagram />}
              href="https://www.instagram.com/pancakeswap_official"
            />
            <Icono
              icono={<FaGithub />}
              href="https://github.com/pancakeswap/"
            />
            <Icono
              icono={<FaDiscord />}
              href="https://discord.gg/pancakeswap/"
            />
            <Icono
              icono={<FaYoutube />}
              href="https://www.youtube.com/@pancakeswap_official"
            />
          </div>
          <hr></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <ThemeToggle />
              <LanguageDropdown reverse={true} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1185220628794593330/1186043627458277518/bluecircleicon.ico?ex=6591d034&is=657f5b34&hm=2286b225c46783a62484255d51c01670db25ee68e9ee9210e5ce883a89f81835&"
                alt="Blue Circle Icon"
                className={styles.bluecircleImage}
                width="28"
                height="28"
                style={{ marginRight: "10px" }}
              />

              <p style={{ marginRight: "20px", color: "#B8ADD2" }}>2.245$ </p>

              <div>
                <Boton texto={"Buy CAKE"} isBlue={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
