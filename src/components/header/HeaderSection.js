import styles from "./header.module.scss";
import Navigation from "../navigation/Navigation";

export default function Header({ logo, title }) {
  return (
    <div className={styles.header}>
      <Navigation logo={logo} />
			<div className={styles.header_container}>
				<div className={styles.header__title}>{title}</div>
			</div>
    </div>
  );
}
