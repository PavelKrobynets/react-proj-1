import styles from "./introduce.module.scss";
import logo from "../../icons/Beans_logo.svg"

export default function Introduce() {
  return (
    <div className={styles.introduce}>
      <div className={styles.introduce__wrapper}>
        <div className={styles.introduce__title}>
          Everything You Love About Coffee
        </div>
        <img src={logo} alt="" />
        <div className={styles.introduce__text}>
          We makes every day full of energy and taste
          <br /> Want to try our beans?
        </div>
        <button className={styles.introduce__btn}>More</button>
      </div>
    </div>
  );
}
