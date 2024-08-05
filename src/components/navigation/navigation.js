import styles from "./navigation.module.scss";
import {NavLink} from "react-router-dom"

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
          <NavLink to='/'>Coffee house</NavLink>
        </li>
        <li>
          <NavLink to='/OurCoffee'>Our coffee</NavLink>
        </li>
        <li>
          <NavLink to='/Goods'>For your pleasure</NavLink>
        </li>
      </ul>
    </div>
  );
}
