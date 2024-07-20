import styles from "./best.module.scss";
import Card from "../card/Card";

export default function Best({coffeInfo}) {
  const elements = coffeInfo.map((coffeCard) => {
		const {id, ...props} = coffeCard;
    return <Card key={id} coffeCard={props} />;
  });
  return (
    <div className={styles.best}>
      <div className={styles.best__title}>Our best</div>
      <div className={styles.best__wrapper}>{elements}</div>
    </div>
  );
}
