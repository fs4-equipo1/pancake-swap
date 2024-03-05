import styles from "./HeroSwiperCardUser.module.scss"

export const HeroSwiperCardUser = ({
    iconUser,
    textUser,
    moneyUser,
    phraseUser,
    buttonUser,
}) => {
    return (
        <div className={styles.containerUser}>
            <div className={styles.containerIconText}>
                <div className={styles.iconUser}>{iconUser}</div>
                <div className={styles.textUser}>{textUser}</div>
            </div>
            <div className={styles.containerMoneyButton}>
                <div className={styles.containerTrue}>
                    <div className={styles.containerPhrase}>
                        <div className={styles.moneyUser}>{moneyUser}</div>
                        <div className={styles.phraseUser}>{phraseUser}</div>
                    </div>
                    <div className={styles.buttonUser}>{buttonUser}</div>
                </div>
            </div>
        </div>
    )
};

export default HeroSwiperCardUser;