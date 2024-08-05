import "./Main.scss";
import Introduce from "../../introduce/Introduce";
import About from "../../about/About";
import Best from "../../best/Best";
import aromicoImg from '../../../img/best_img/solimo.jpg'
import aromisticoImg from "../../../img/best_img/aromistico.jpg"
import prestoImg from "../../../img/best_img/presto.jpg"

export default function Main() {
  const coffeeInfo = [
    {
      title: "Solimo Coffee Beans 2 kg",
      price: 10.73,
      img: aromicoImg,
      id: 1,
    },
    {
      title: "Presto Coffee Beans 1 kg",
      price: 15.99,
      img: prestoImg,
      id: 2,
    },
    {
      title: "AROMISTICO Coffee 1 kg",
      price: 6.99,
      img: aromisticoImg,
      id: 3,
    },
  ];
  return (
    <div className="main">
      <Introduce />
      <About />
      <Best coffeeInfo={coffeeInfo} />
    </div>
  );
}
