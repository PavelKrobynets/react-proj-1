import styles from "./header.module.scss";

export default function Header({ title, img }) {
  return (
    <div className={styles.header}
		style = {{"background": `url(${img}) center/cover no-repeat`}}
		>
			<div className={styles.header_container}>
				<div className={styles.header__title}>{title}</div>
			</div>
    </div>
  );
}
