import Boton from "./componentes/Boton/Boton";
import { Icono } from "./componentes/Icono/Icono";
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
      <Icono icono={<FaTwitter  />} href="https://twitter.com/pancakeswap" />
      <Icono icono={<FaTelegram />} href="https://t.me/pancakeswap" />
      <Icono icono={<FaReddit />} href="https://www.reddit.com/r/pancakeswap" />
      <Icono icono={<FaInstagram />} href="https://www.instagram.com/pancakeswap_official" />
      <Icono icono={<FaGithub />} href="https://github.com/pancakeswap/" />
      <Icono icono={<FaDiscord />} href="https://discord.gg/pancakeswap/" />
      <Icono icono={<FaYoutube />} href="https://www.youtube.com/@pancakeswap_official"/>
      <Icono icono={<FaTwitter />} href="https://twitter.com/pancakeswap" estiloAdicional={true} />
      <Icono icono={<FaTelegram />} href="https://t.me/pancakeswap" estiloAdicional={true} />
      <Icono icono={<FaDiscord />} href="https://discord.gg/pancakeswap/" estiloAdicional={true} />
      <Icono icono={<FaInstagram />} href="https://www.instagram.com/pancakeswap_official" estiloAdicional={true} />
      <Icono icono={<FaReddit />} href="https://www.reddit.com/r/pancakeswap" estiloAdicional={true} />
      <Icono icono={<FaYoutube />} href="https://www.youtube.com/@pancakeswap_official" estiloAdicional={true} />
      </div>
  );
}

export default App;
