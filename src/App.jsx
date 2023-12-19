import Boton from "./componentes/Boton/Boton";
import Tipografia from "./componentes/Tipografia/Tipografia";
import styles from "./styles/pages/home.module.scss";
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

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Icono icono={<FaTwitter />} href="https://twitter.com/pancakeswap" />
        <Icono icono={<FaTelegram />} href="https://t.me/pancakeswap" />
        <Icono
          icono={<FaReddit />}
          href="https://www.reddit.com/r/pancakeswap"
        />
        <Icono
          icono={<FaInstagram />}
          href="https://www.instagram.com/pancakeswap_official"
        />
        <Icono icono={<FaGithub />} href="https://github.com/pancakeswap/" />
        <Icono icono={<FaDiscord />} href="https://discord.gg/pancakeswap/" />
        <Icono
          icono={<FaYoutube />}
          href="https://www.youtube.com/@pancakeswap_official"
        />
        <Icono
          icono={<FaTwitter />}
          href="https://twitter.com/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaTelegram />}
          href="https://t.me/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaDiscord />}
          href="https://discord.gg/pancakeswap/"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaInstagram />}
          href="https://www.instagram.com/pancakeswap_official"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaReddit />}
          href="https://www.reddit.com/r/pancakeswap"
          estiloAdicional={true}
        />
        <Icono
          icono={<FaYoutube />}
          href="https://www.youtube.com/@pancakeswap_official"
          estiloAdicional={true}
        />
      </div>
      <div className={styles.container}>
        <div>
          <Boton texto={"Transparent"} isTransparent={true} />
          <Boton texto={"Blue"} isBlue={true} />
          <Boton texto={"White"} isWhite={true} />
        </div>
        <div>
          <Tipografia
            color={"--colors-warning"}
            texto={"Title Large"}
            isTitleLarge
          />
          <Tipografia color={"--colors-background"} texto={"Title"} isTitle />
          <Tipografia
            color={"--colors-textSubtle"}
            texto={"Subtitle large"}
            isSubtitleLarge
          />
          <Tipografia
            color={"--colors-textDisabled"}
            texto={"Subtitle"}
            isSubtitle
          />
          <Tipografia
            color={"--colors-failure"}
            texto={"Body Large"}
            isBodyLarge
          />
          <Tipografia color={"--colors-primary"} texto={"Body"} isBody />

          <div className={styles.textContainer}>
            <Tipografia
              color={"--colors-white"}
              texto={"Everyone's"}
              isTitleLarge
            />
            <div className={styles.subtext}>
              <Tipografia
                color={"--colors-secondary"}
                texto={"Favorite"}
                isTitleLarge
              />
              <Tipografia color={"--colors-white"} texto={"DEX"} isTitleLarge />
            </div>
            <div>
              <LanguageDropdown />
            </div>
            <div>
            <Footer 
            title={"ECOSYSTEM"} 
            item={[
              "Trade",
              "Earn",
              "Game",
              "NFT",
              "Tokenomics",
              "Litepaper",
              "CAKE Emission Projection",
              "Merchandise",
            ]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
