import Tipografia from "../Tipografia/Tipografia";
import { CakeFiguresCard } from "./CakeFiguresCard";
import classes from "./CakeFigures.module.scss";
import useCoinPrice from "../CustomHooks/useCoinPrice";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export function CakeFigures() {
  const { t } = useTranslation();
  const { market, circulating, total } = useCoinPrice();
  const formatCirculatingSupply = new Intl.NumberFormat("en-US", {
    //Formatea el numero
    maximumFractionDigits: 0,
  }).format(circulating);

  const formatTotalSupply = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(total);

  const formatMarketCap = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(market);

  return (
    <div className={classes.seccionClass}>
      <div className={classes.cakeFiguresTitulo}>
        <Tipografia color={"--colors-text"} texto={t("CAKE")} isSubtitle />{" "}
        <Tipografia color={"--colors-secondary"} texto={t("Figures")} isSubtitle />
      </div>
      <div className={classes.containerOfCards}>
        <CakeFiguresCard
          titulo={t("CirculatingSupply")}
          numero={formatCirculatingSupply}
        />
        <CakeFiguresCard titulo={t("TotalSupply")} numero={formatTotalSupply} />
        <CakeFiguresCard titulo={t("MarketCap")} numero={`$${formatMarketCap}`} />
        <CakeFiguresCard titulo={t("TokenBurn")} numero={`1,126,580,112`} />
        <CakeFiguresCard titulo={t("CurrentEmissions")} numero={`1,36/block`} />
      </div>
    </div>
  );
}
