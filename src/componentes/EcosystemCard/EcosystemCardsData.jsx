import { t } from "i18next";
import { useTranslation } from "react-i18next";

function EcosystemCardsData(){
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      imgsrc: "./Assets/Images/trade-swap-purple.png",
      imgsrcColor: "./Assets/Images/trade-swap.png",
      title: t("Trade"),
      content: t("cardContent1"),
      button: t("TradeNow"),
    },
    {
      id: 1,
      imgsrc: "./Assets/Images/trade-liquidity-purple.png",
      imgsrcColor: "./Assets/Images/trade-liquidity.png",
      title: t("Liquidity"),
      content: t("cardContent2"),
      button: t("AddNow"),
    },
    {
      id: 1,
      imgsrc: "./Assets/Images/trade-bridge-purple.png",
      imgsrcColor: "./Assets/Images/trade-bridge.png",
      title: t("Bridge"),
      content: t("cardContent3"),
      button: "Bridge Now",
    },
    {
      id: 1,
      imgsrc: "./Assets/Images/trade-perpetual-purple.png",
      imgsrcColor: "./Assets/Images/trade-perpetual.png",
      title: t("Perpetual"),
      content: t("cardContent4"),
      button: t("TradeNow"),
    },
    {
      id: 1,
      imgsrc: "./Assets/Images/trade-buy-crypto-purple.png",
      imgsrcColor: "./Assets/Images/trade-buy-crypto.png",
      title: t("BuyCrypto"),
      content: t("cardContainer5"),
      button: t("BuyNow"),
    },
    {
      id: 2,
      imgsrc: "./Assets/Images/earn-farm-purple.png",
      imgsrcColor: "./Assets/Images/earn-farm.png",
      title: t("Farm"),
      content: t("cardContainer6"),
      button: t("StakeNow"),
    },
    {
      id: 2,
      imgsrc: "./Assets/Images/earn-pools-purple.png",
      imgsrcColor: "./Assets/Images/earn-pools.png",
      title: t("Pools"),
      content: t("cardContainer7"),
      button: t("StakeNow"),
    },
    {
      id: 2,
      imgsrc: "./Assets/Images/earn-liquidstaking-purple.png",
      imgsrcColor: "./Assets/Images/earn-liquistaking.png",
      title: t("LiquidStaking"),
      content: t("cardContainer8"),
      button: t("AddNow"),
    },
    {
      id: 2,
      imgsrc: "./Assets/Images/earn-simplestaking-purple.png",
      imgsrcColor: "./Assets/Images/earn-simplestaking.png",
      title: t("SimpleStaking"),
      content: t("cardContainer8"),
      button: t("StakeNow"),
    },
    {
      id: 3,
      imgsrc: "./Assets/Images/gamenft-prediction-purple.png",
      imgsrcColor: "./Assets/Images/gamenft-prediction.png",
      title: t("Prediction"),
      content: t("cardContainer9"),
      button: t("TryNow"),
    },
    {
      id: 3,
      imgsrc: "./Assets/Images/gamenft-pancakeprotector-purple.png",
      imgsrcColor: "./Assets/Images/gamenft-pancakeprotector.png",
      title: t("PancakeProtectors"),
      content: t("cardContainer10"),
      button: t("PlayNow"),
    },
    {
      id: 3,
      imgsrc: "./Assets/Images/gamenft-lottery-purple.png",
      imgsrcColor: "./Assets/Images/gamenft-lottery.png",
      title: t("Lottery"),
      content: t("cardContainer11"),
      button: t("TryNow"),
    },
    {
      id: 3,
      imgsrc: "./Assets/Images/gamenft-pottery-purple.png",
      imgsrcColor: "./Assets/Images/gamenft-pottery.png",
      title: t("Pottery"),
      content: t("cardContainer12"),
      button: t("TryNow"),
    },
    {
      id: 3,
      imgsrc: "./Assets/Images/gamenft-nftmarketplace-purple.png",
      imgsrcColor: "./Assets/Images/gamenft-nftmarketplace.png",
      title: t("NFTMarketplace"),
      content: t("cardContainer13"),
      button: t("TradeNow"),
    },
  ]
  
  return data;
}

export default EcosystemCardsData();