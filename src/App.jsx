import Boton from "./componentes/Boton/Boton";
import { Iconos } from "./componentes/Iconos/Iconos";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div>
      <Boton texto={"Transparent"} isTransparent={true} />
      <Boton texto={"Blue"} isBlue={true} />
      <Boton texto={"White"} isWhite={true} />
      <Iconos icono={<FaTwitter  />} href="https://twitter.com/pancakeswap" />
      <Iconos icono={<FaTelegram />} href="https://t.me/pancakeswap" />
      <Iconos icono={<FaReddit />} href="https://www.reddit.com/r/pancakeswap" />
      <Iconos icono={<FaInstagram />} href="https://www.instagram.com/pancakeswap_official" />
      <Iconos icono={<FaGithub />} href="https://github.com/pancakeswap/" />
      <Iconos icono={<FaDiscord />} href="https://discord.gg/pancakeswap/" />
      <Iconos icono={<FaYoutube />} href="https://www.youtube.com/@pancakeswap_official"/>
      <Iconos icono={<FaTwitter />} href="https://twitter.com/pancakeswap" estiloAdicional={true} />
      <Iconos icono={<FaTelegram />} href="https://t.me/pancakeswap" estiloAdicional={true} />
      <Iconos icono={<FaDiscord />} href="https://discord.gg/pancakeswap/" estiloAdicional={true} />
      <Iconos icono={<FaInstagram />} href="https://www.instagram.com/pancakeswap_official" estiloAdicional={true} />
      <Iconos icono={<FaReddit />} href="https://www.reddit.com/r/pancakeswap" estiloAdicional={true} />
      <Iconos icono={<FaYoutube />} href="https://www.youtube.com/@pancakeswap_official" estiloAdicional={true} />
      </div>
  );
}

export default App;
