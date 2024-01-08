import styles from "./FooterIcons.module.scss";
import { Icono } from "../Icono/Icono";
import {
  FaTwitter,
  FaTelegram,
  FaReddit,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
export function FooterIcons() {
  return (
    <div className={styles.iconContainer}>
      <Icono icono={<FaTwitter />} href="https://twitter.com/pancakeswap" />
      <Icono icono={<FaTelegram />} href="https://t.me/pancakeswap" />
      <Icono icono={<FaReddit />} href="https://www.reddit.com/r/pancakeswap" />
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
  );
}

export default FooterIcons;
