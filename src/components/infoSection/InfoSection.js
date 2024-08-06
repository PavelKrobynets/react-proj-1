import styles from "./infoSection.module.scss"
import logoDark from "../../icons/Beans_logo_dark.svg"


export default function InfoSection({img, title, descr, ...props}) { 
	return (
		<div className={styles.info}>
			<div className={styles.info__img}><img src={img} alt="coffeeSunset" /></div>
			<div className={styles.info__wrapper}
			style={props.country ? {"textAlign": "start"} : {"alignItems": "center"}}
			>
				<div className={styles.info__top}>
				<h1 className={styles.info__title}>{title}</h1>
				<img src={logoDark} alt="" />
				</div>
				<div className={styles.info__country}
				style={!props.country ? {"display": "none" }: null}
				>{props.country}</div>
				<p className={styles.info__text}>{descr}</p>
				<div className={styles.info__price}
				style={!props.price ? {"display": "none" }: null}
				>{`Price: ${props.price}`}</div>
			</div>
		</div>
	);
}