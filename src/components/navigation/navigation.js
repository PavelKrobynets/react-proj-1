import styles from "./navigation.module.scss";

export default function Navigation({logo}) {
  return (
    <div className={styles.navigation}>
      <img
        className={styles.navigation__logo}
        src={logo}
        alt="logo"
      />
      <ul className={styles.navigation__list}>
        <li>
          <a href="youtube.com">Coffee house</a>
        </li>
        <li>
          <a href="youtube.com">Our coffee</a>
        </li>
        <li>
          <a href="youtube.com">For your pleasure</a>
        </li>
      </ul>
    </div>
  );
}
