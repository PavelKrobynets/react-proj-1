import styles from "./footer.module.scss";
import Navigation from "../navigation/Navigation";

export default function Footer({ logo }) {
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
