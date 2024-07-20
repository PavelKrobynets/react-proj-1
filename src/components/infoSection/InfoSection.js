import styles from "./infoSection.module.scss"


export default function InfoSection({img, title, descr}) { 
	return (
		<div className={styles.info}>
			<div className={styles.info__img}><img src={img} alt="coffeeSunset" /></div>
			<div className={styles.info__wrapper}>
				<h1 className={styles.info__title}>{title}</h1>
				<img src="/icons/Beans_logo_dark.svg" alt="" />
				<p className={styles.info__text}>{descr}</p>
			</div>
		</div>
	);
}