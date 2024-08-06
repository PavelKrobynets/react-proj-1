import Header from "../../header/HeaderSection";
import InfoSection from "../../infoSection/InfoSection";
import headerImg from "../../../img/headerImg.jpg";
import useCardList from "../../../helpers/coffeeList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CoffeePage.scss";

export default function CoffeePage() {
  const [coffeeCard, setCoffeeCard] = useState(null);

  const { getSingleCard } = useCardList();
  const { coffeeId } = useParams();

useEffect(() => {
	updateCoffee();
}, [])


	const updateCoffee = () => {
				setCoffeeCard(getSingleCard(+coffeeId))
	}
  return (
    <div className="coffeePage">
      <Header title={"Our Coffee"} img={headerImg} />
      <InfoSection {...coffeeCard} />
    </div>
  );
}
