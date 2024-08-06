import styles from "./card.module.scss";
import {Link} from "react-router-dom"

export default function Card({id, title , price, country, img = "../../img/best_img/aromistico.jpg" }) {
  return (
    <div className={styles.card}>
      <Link to={`/CoffeePage/${id}`} className={styles.card__wrapper}>
        <img src={img} alt="" />
        <div className={styles.card__info}>{title}</div>
				<div className={styles.card__country}>{country}</div>
        <div className={styles.card__price}>{`${price}$`}</div>
      </Link>
    </div>
  );
}
