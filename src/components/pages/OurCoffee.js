import "./OurCoffee.scss";
import Header from "../header/HeaderSection.js";
import InfoSection from "../infoSection/InfoSection.js";
import CoffeeFilter from "../coffeeFilter/CoffeeFilter.js";
import CardList from "../cardList/CardList.js";
import Footer from "../footer/Footer.js";

const info = {
  img: "/img/aboutOurBeans.png",
  title: "About Our Beans",
  descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
	Afraid at highly months do things on at. Situation recommend objection do intentionso questions.
	As greatly removed calling pleased improve an. Last ask him cold feel\n met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.`,
};
export default function OurCoffee() {
	const coffeeCards = [
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 6.99,
			id: 1
		},
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Kenya",
			price: 7.10,
			id: 2
		},
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Columbia",
			price: 8,
			id: 3
		},
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Columbia",
			price: 8,
			id: 4
		},
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 6.99,
			id: 5
		},
		{
			name: "AROMISTICO Coffee 1 kg",
			country: "Brazil",
			price: 6.99,
			id: 6
		}

	]
  return (
    <div className="ourCoffee">
      <Header logo={"/icons/Group.svg"} title={"Our Coffee"} />
      <InfoSection {...info} />
			<hr/>
			<CoffeeFilter/>
			<CardList coffeeCards={coffeeCards}/>
			<Footer logo={"/icons/coffee-beans.svg"}/>
    </div>
  );
}
