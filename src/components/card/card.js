import styles from "./card.module.scss"

export default function Card() { 
	return (
		<div className={styles.card}>
			<img src="" alt="" />
			<div className={styles.card__info}></div>
			<div className={styles.card__price}></div>
		</div>
	);
}