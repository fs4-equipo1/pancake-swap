import styles from "./NewsSwiperCard.module.scss";

export const NewsSwiperCard = ({ image, from, date, cardTitle, cardText }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imagen}>{image}</div>
      <div className={styles.textContainer}>
        <div className={styles.sinceDate}>
          <div className={styles.textSince}>{from}</div>
          <div className={styles.dateRi}>{date}</div>
        </div>
        <div className={styles.title}>{cardTitle}</div>
        <div className={styles.textC}>{cardText}</div>
      </div>
    </div>
  );
};

export default NewsSwiperCard;