import styles from "../Navbar/Navbar.module.scss"

export function Logo({isInverted}){
    return(
        <div>
        <img src="../public/assets/conejoResponsive.png" alt="" className={styles.iconResponsive}/> 
        
        <img src="../public/assets/logoPancake.png" alt="" className={styles.logoPancake} />
      </div>
     
    )
}