import Boton from "./componentes/Boton/Boton";
import background from "./assets/background.png"
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
import DexNow from "./componentes/DexNow/DexNow";

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
          </div>
        </div>
      </div>
      <div>
      <section style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff'
      }}>
        {/* <h1>Join Everyone's Favorite DEX Now!</h1> */}
        <div>
      <DexNow titleLarge={"Join Everyone's Favorite DEX Now!"}/> 
      </div>
        <div>
              <Boton texto={"Connect Wallet"} isBlue={true} />
            </div>
      </section>
      
      </div>
      <div style={{background: "#27262c", display: "flex", justifyContent:"center", padding: "56px 40px 32px"}}>
        <div style={{display: "flex", flexDirection:"column",width: "80%"}}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "32px", padding: "0px", }}>
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
        src={"https://cdn.discordapp.com/attachments/1146380288776220734/1186038041333207050/vecake-title.de07d9b9.png?ex=6591cb00&is=657f5600&hm=28843fe8c1fb35f0112536f74a1ae45023861dff72317cf761797d8e043cb597&"}
        alt="Description of the image"
        style={{ width: "160px", height: "25px"}}></img>
      </div>
      <div style={{display: "flex",flexDirection: "row", gap: "30px", marginBottom:"32px"}}>
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
      </div>
      <hr></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <LanguageDropdown reverse={true} />
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
                style={{marginRight: "10px"}}
              />
              
              <p style={{ marginRight: "20px", color: "#B8ADD2" }}>2.245$ </p>
          
            <div>
              <Boton texto={"Buy CAKE"} isBlue={true}/>
            </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;
