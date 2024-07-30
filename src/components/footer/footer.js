import styles from "./footer.module.scss";
import Navigation from "../navigation/Navigation";
import logo from "./coffee-beans.svg"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Navigation logo={logo} />
        <img
          className={styles.footer__img}
          src="/icons/Beans_logo_dark.svg"
          alt="beans_logo"
        />
      </div>
    </div>
  );
}
