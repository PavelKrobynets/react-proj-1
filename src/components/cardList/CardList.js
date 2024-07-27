import "./cardList.scss";
import Card from "../card/Card";

export default function CardList({ coffeeCards }) {
  const cards = coffeeCards.map((item) => {
    const { id, ...props } = item;
    return (
      <div className="cardList__wrapper" key={id}>
        <Card {...props} />
      </div>
    );
  });
  return <div className="cardList">{cards}</div>;
}
