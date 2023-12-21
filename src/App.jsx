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
import { JoinComunidad } from "./componentes/JoinComunidad/JoinComunidad";
import { CardComunidad } from "./componentes/JoinComunidad/CardComunidad";

function App() {
  return (
    <div>
      <JoinComunidad />
    </div>
  );
}

export default App;
