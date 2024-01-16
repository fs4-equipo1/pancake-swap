import FooterColumn from "./FooterColumn";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import styles from "./Footer.module.scss";
import FooterIcons from "./FooterIcons";
import { FooterBuyCake } from "./FooterBuyCake";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Logo } from "../Logo/Logo";

export function Footer({ theme, toggleTheme }) {
  return (
    <div className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
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
          <div>
            <Logo isInverted/>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <FooterIcons />
          {/* <hr style={{opacity:'30%'}}></hr> */}
          <div className={styles.footerEnd}>
            <div className={styles.footerEndLangAndTheme}>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
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
