import styles from "./card.module.scss";

export default function Card({ title , price, country, img = "../../img/best_img/aromistico.jpg" }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <img src={img} alt="" />
        <div className={styles.card__info}>{title}</div>
				<div className={styles.card__country}>{country}</div>
        <div className={styles.card__price}>{`${price}$`}</div>
      </div>
    </div>
  );
}
