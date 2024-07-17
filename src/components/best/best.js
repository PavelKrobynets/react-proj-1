import styles from "./best.module.scss"
import Card from "../card/card"

export default function Best() { 
	return (
		<div className={styles.best}>
			<div className={styles.best__title}>Our best</div>
			<Card/>
			<Card/>
			<Card/>
		</div>
	);
}