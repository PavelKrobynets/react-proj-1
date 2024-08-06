import "./OurCoffee.scss";
import { useState, useEffect } from "react";
import Header from "../../header/HeaderSection.js";
import InfoSection from "../../infoSection/InfoSection.js";
import CoffeeFilter from "../../coffeeFilter/CoffeeFilter.js";
import CardList from "../../cardList/CardList.js";
import useCardList from "../../../helpers/coffeeList.js";
import headerImg from "../../../img/headerImg.jpg";
import coffeeImg from "../../../img/aboutOurBeans.png";

const info = {
  img: coffeeImg,
  title: "About Our Beans",
  descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
	Afraid at highly months do things on at. Situation recommend objection do intentionso questions.
	As greatly removed calling pleased improve an. Last ask him cold feel\n met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.`,
};

export default function OurCoffee() {
  const [coffeeCards, setCofeeCards] = useState([]);
  const [term, setTerm] = useState("");
  const [tab, setTab] = useState("All");

  const { getAllCards} = useCardList();

  useEffect(() => {
    setCofeeCards(getAllCards);
  }, []);

  const searchCoffee = (coffeeCards, term) => {
    if (term === "") {
      return coffeeCards;
    } else {
      return coffeeCards.filter((coffee) =>
        coffee.title.toLowerCase().includes(term.toLowerCase())
      );
    }
  };

  const onUpdateCoffee = (term) => {
    setTerm(term);
  };

  const filterCoffee = (coffeeCards, tab) => {
    switch (tab) {
      case "Columbia":
        return coffeeCards.filter((coffee) => coffee.country === "Columbia");
      case "Brazil":
        return coffeeCards.filter((coffee) => coffee.country === "Brazil");
      case "Kenya":
        return coffeeCards.filter((coffee) => coffee.country === "Kenya");
      default:
        return coffeeCards;
    }
  };

  const onFilterSelect = (tab) => {
    setTab(tab);
  };

  const visibleData = filterCoffee(
    searchCoffee(coffeeCards, term),
    tab
  );
  return (
    <div className="ourCoffee">
      <Header title={"Our Coffee"} img={headerImg} />
      <InfoSection {...info} />
      <hr />
      <CoffeeFilter
        onUpdateCoffee={onUpdateCoffee}
        onFilterSelect={onFilterSelect}
      />
      <CardList coffeeCards={visibleData} />
    </div>
  );
}
