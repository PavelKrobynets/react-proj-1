import "./Main.scss";
import Introduce from "../introduce/Introduce";
import Navigation from "../navigation/Navigation";
import About from "../about/About";
import Best from "../best/Best";

export default function Main() {
  const coffeeInfo = [
    {
      name: "Solimo Coffee Beans 2 kg",
      price: 10.73,
      img: "/img/best_img/solimo.jpg",
      id: 1,
    },
    {
      name: "Presto Coffee Beans 1 kg",
      price: 15.99,
      img: "/img/best_img//presto.jpg",
      id: 2,
    },
    {
      name: "AROMISTICO Coffee 1 kg",
      price: 6.99,
      img: "/img/best_img/aromistico.jpg",
      id: 3,
    },
  ];
  return (
    <div className="main">
      <Navigation logo={"/icons/Group.svg"} />
      <Introduce />
      <About />
      <Best coffeeInfo={coffeeInfo} />
    </div>
  );
}
