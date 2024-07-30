import styles from "./header.module.scss";

export default function Header({ title }) {
  return (
    <div className={styles.header}>
			<div className={styles.header_container}>
				<div className={styles.header__title}>{title}</div>
			</div>
    </div>
  );
}
