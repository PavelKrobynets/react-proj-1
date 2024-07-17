import styles from "./header.module.scss"
import Navigation from "../navigation/navigation";

export default function Header({logo}) { 
	return (
		<div className={styles.header}>
			<Navigation logo={logo}/>
		</div>
	);
}