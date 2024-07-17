import styles from "./card.module.scss";

export default function Card({ coffeCard }) {
  const { name, price, img } = coffeCard;
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <img src={img} alt="" />
        <div className={styles.card__info}>{name}</div>
        <div className={styles.card__price}>{price}</div>
      </div>
    </div>
  );
}
