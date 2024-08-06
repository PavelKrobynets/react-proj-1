import "./Main.scss";
import { useState, useEffect } from "react";
import useCardList from "../../../helpers/coffeeList";
import Introduce from "../../introduce/Introduce";
import About from "../../about/About";
import Best from "../../best/Best";

export default function Main() {
  const [cardList, setCardList] = useState([]);

  const { getAllCards } = useCardList();

  useEffect(() => {
    setCardList(getAllCards);
  });
  return (
    <div className="main">
      <Introduce />
      <About />
      <Best coffeeInfo={cardList.slice(0, 3)} />
    </div>
  );
}
