import Tipografia from "../Tipografia/Tipografia";
import { CakeFiguresCard } from "./CakeFiguresCard";
import classes from './CakeFigures.module.scss'
import CoinPrice from "../CustomHooks/CoinPrice";

export function CakeFigures() {  
  
  const circulatingSup = CoinPrice()[2];
   const formatCirculatingSupply = new Intl.NumberFormat("en-US", {  //Formatea el numero
    maximumFractionDigits: 0,
  }).format(circulatingSup)

  const totalSup = CoinPrice()[3];
  const formatTotalSupply = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(totalSup)

  const marketCap = CoinPrice()[1];
  const formatMarketCap = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(marketCap)

  return (
  <div className={classes.seccionClass}>
    <div className={classes.cakeFiguresTitulo}>
    <Tipografia color={'--colors-text'} texto={'CAKE'} isSubtitle/> <Tipografia color={'--colors-secondary'} texto={'Figures'} isSubtitle/>
    </div>
    <div className={classes.containerOfCards}>
        <CakeFiguresCard titulo={"Circulating Supply"} numero={formatCirculatingSupply}/>
        <CakeFiguresCard titulo={"Total Supply"} numero={formatTotalSupply}/>
        <CakeFiguresCard titulo={"Market Cap"} numero={`$ ${formatMarketCap}`}/>
        <CakeFiguresCard titulo={"Token Burn"} numero={`1,126,580,112`}/>
        <CakeFiguresCard titulo={"Current Emissions"} numero={`1,36/block`}/>
    </div>

  </div>);
}
