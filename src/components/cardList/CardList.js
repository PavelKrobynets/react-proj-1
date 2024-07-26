import "./cardList.scss";
import Card from "../card/Card";

export default function CardList({ coffeeCards }) {
  const cards = coffeeCards.map((item) => {
    const { id, ...props } = item;
		console.log(item.country);
    return (
			<div className="cardList__wrapper">
				<Card key={id} {...props} />
			</div>
		)
  });
  return <div className="cardList">
		{cards}
	</div>;
}
