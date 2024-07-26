import styles from "./best.module.scss";
import Card from "../card/Card";

export default function Best({coffeeInfo}) {
  const elements = coffeeInfo.map((coffeeCard) => {
		console.log(coffeeCard);
		const {id, ...props} = coffeeCard;
    return <Card key={id} {...props} />;
  });
  return (
    <div className={styles.best}>
      <div className={styles.best__title}>Our best</div>
      <div className={styles.best__wrapper}>{elements}</div>
    </div>
  );
}
