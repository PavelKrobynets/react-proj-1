import "./Main.css";
import Introduce from "../introduce/introduce";
import Header from "../header/header";
import About from "../about/about";
import Best from "../best/best";
import Footer from "../footer/footer";

export default function App() {
  const coffeInfo = [
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
    <div className="App">
      <Header logo={'/icons/Group.svg'}/>
      <Introduce />
      <About />
      <Best coffeInfo={coffeInfo} />
      <Footer logo={'/icons/coffee-beans.svg'}/>
    </div>
  );
}
