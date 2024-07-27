import "./OurCoffee.scss";
import { Component } from "react";
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
export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffeeCards: [
        {
          name: "Aromistico Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
          id: 1,
        },
        {
          name: "Comfoods Coffee 1 kg",
          country: "Kenya",
          price: 7.1,
          id: 2,
        },
        {
          name: "Tchibo Coffee 1 kg",
          country: "Columbia",
          price: 8,
          id: 3,
        },
        {
          name: "Vinacafe Coffee 1 kg",
          country: "Columbia",
          price: 8,
          id: 4,
        },
        {
          name: "Paulig Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
          id: 5,
        },
        {
          name: "Franck Coffee 1 kg",
          country: "Brazil",
          price: 6.99,
          id: 6,
        },
      ],
      term: "",
      tab: "All",
    };
  }

  searchCoffee = (coffeeCards, term) => {
    if (term === "") {
      return coffeeCards;
    } else {
      return coffeeCards.filter((coffee) =>
        coffee.name.toLowerCase().includes(term.toLowerCase())
      );
    }
  };

  onUpdateCoffee = (term) => {
    this.setState({ term });
  };

  filterCoffee = (coffeeCards, tab) => {
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

	onFilterSelect = (tab) => {
		this.setState ({tab})
	}


  render() {
    const { coffeeCards, term } = this.state;
    const visibleData = this.filterCoffee(this.searchCoffee(coffeeCards, term), this.state.tab);
    return (
      <div className="ourCoffee">
        <Header logo={"/icons/Group.svg"} title={"Our Coffee"} />
        <InfoSection {...info} />
        <hr />
        <CoffeeFilter
          onUpdateCoffee={this.onUpdateCoffee}
          onFilterSelect={this.onFilterSelect}
        />
        <CardList coffeeCards={visibleData} />
        <Footer logo={"/icons/coffee-beans.svg"} />
      </div>
    );
  }
}
