import FooterColumn from "./FooterColumn";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import styles from "./Footer.module.scss";
import FooterIcons from "./FooterIcons";
import { FooterBuyCake } from "./FooterBuyCake";

export function Footer() {
  return (
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
        <img
          src={
            "https://cdn.discordapp.com/attachments/1146380288776220734/1186038041333207050/vecake-title.de07d9b9.png?ex=6591cb00&is=657f5600&hm=28843fe8c1fb35f0112536f74a1ae45023861dff72317cf761797d8e043cb597&"
          }
          alt="Description of the image"
          style={{ width: "160px", height: "25px" }}
        ></img>
      </div>
      <div className={styles.footerBottom}>
        <FooterIcons />
        <hr></hr>
        <div className={styles.footerEnd}>
          <LanguageDropdown reverse={true} />
          <FooterBuyCake />
        </div>
      </div>
    </div>
  );
}

export default Footer;
