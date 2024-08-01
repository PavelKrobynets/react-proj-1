import "./Goods.scss";
import { useState, useEffect } from "react";
import Header from "../header/HeaderSection.js";
import InfoSection from "../infoSection/InfoSection.js";
import headerImg from "../../img/Goods.png";
import cupImg from "../../img/Cup.png";
import CardList from "../cardList/CardList.js";
import { coffeeCards } from "../../helpers/coffeeList.js";

const info = {
  img: cupImg,
  title: "About our goods",
  descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.`,
};

export default function Goods() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    setCardList(coffeeCards);
  }, []);

  return (
    <div className="goods">
      <Header title={"For your pleasure"} img={headerImg} />
      <InfoSection {...info} />
      <hr />
      <CardList coffeeCards={ cardList } />
    </div>
  );
}
