import FooterColumn from "./FooterColumn";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import styles from "./Footer.module.scss";
import FooterIcons from "./FooterIcons";
import { FooterBuyCake } from "./FooterBuyCake";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Logo } from "../Logo/Logo";

export function Footer() {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <img
            src="../public/assets/logoPancakeBlanco.png"
            className={styles.pancakeImage}
          />
          <div className={styles.line}></div>
          <div className={styles.buyCakeNone}>
            {" "}
            <FooterBuyCake />
            <div className={styles.footerEndLangAndTheme}>
              <ThemeToggle />
              <LanguageDropdown reverse={true} />
            </div>
            <div className={styles.lineEnd}></div>
          </div>

          <FooterColumn
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
          <FooterColumn
            title={"BUSINESS"}
            items={["Farms And Syrup Pools", "IFO", "NFT Marketplace"]}
          />
          <FooterColumn
            title={"DEVELOPERS"}
            items={["Contributing", "Github", "Bug Bounty"]}
          />
          <FooterColumn
            title={"SUPPORT"}
            items={["Contact", "Troubleshooting", "Documentation"]}
          />
          <FooterColumn
            title={"ABOUT"}
            items={["Terms Of Service", "Blog", "Brand Assets", "Careers"]}
          />
          <div className={styles.logo}>
            <Logo isInverted />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <FooterIcons />

          <div className={styles.footerEnd}>
            <hr />
            <div className={styles.footerEndLangAndTheme}>
              <ThemeToggle />
              <LanguageDropdown reverse={true} />
            </div>
            <FooterBuyCake />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
