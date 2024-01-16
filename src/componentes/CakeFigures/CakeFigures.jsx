import Tipografia from "../Tipografia/Tipografia";
import { CakeFiguresCard } from "./CakeFiguresCard";
import classes from './CakeFigures.module.scss'


export function CakeFigures() {   
  return (
  <div className={classes.seccionClass}>
    <div className={classes.cakeFiguresTitulo}>
    <Tipografia color={'--colors-text'} texto={'CAKE'} isSubtitle/> <Tipografia color={'--colors-secondary'} texto={'Figures'} isSubtitle/>
    </div>
    <div className={classes.containerOfCards}>
        <CakeFiguresCard titulo={"Circulating Supply"} numero={270775321}/>
        <CakeFiguresCard titulo={"Total Supply"} numero={385846479}/>
        <CakeFiguresCard titulo={"Market Cap"} numero={`$ ${840} million`}/>
        <CakeFiguresCard titulo={"Token Burn"} numero={1.126580112}/>
        <CakeFiguresCard titulo={"Current Emissions"} numero={`${1.36}/block`}/>
    </div>

  </div>);
}
