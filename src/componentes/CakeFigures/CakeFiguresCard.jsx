import Tipografia from '../Tipografia/Tipografia'
import classes from './CakeFigures.module.scss'

export function CakeFiguresCard({ titulo, numero }){
    return (
        <div className={classes.containerCard}>
            <Tipografia color={'--colors-text'} texto={titulo} isBodyLarge/>
            <Tipografia color={'--colors-secondary'} texto={numero} isSubtitle/>
        </div>
    )
}