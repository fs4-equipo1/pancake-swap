import FooterColumn from "./FooterColumn";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import styles from "./Footer.module.scss";
import FooterIcons from "./FooterIcons";
import { FooterBuyCake } from "./FooterBuyCake";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { LogoWhite } from "../Logo/LogoWhite";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function Footer() {
  const {t} = useTranslation();
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
            title={t("ECOSYSTEM")}
            items={[
              t("Trade"),
              t("Earn"),
              t("Game"),
              "NFT",
              t("Tokenomics"),
              t("Litepaper"),
              t("CAKEEmissionProjection"),
              "Merchandise",
            ]}
          />
          <FooterColumn
            title={t("BUSINESS")}
            items={[t("FarmsAndSyrupPools"), "IFO", t("NFTMarketplace")]}
          />
          <FooterColumn
            title={t("DEVELOPERS")}
            items={[t("Contributing"), "Github", t("BugBounty")]}
          />
          <FooterColumn
            title={t("SUPPORT")}
            items={[t("Contact"), t("Troubleshooting"), t("Documentation")]}
          />
          <FooterColumn
            title={t("ABOUT")}
            items={[t("TermsOfService"), "Blog", t("BrandAssets"), t("Careers")]}
          />
          <div className={styles.logo}>
            <LogoWhite />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <FooterIcons />

          <div className={styles.footerEnd}>
            {/* <hr /> */}
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
