import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage/Main";
import OurCoffee from "../pages/OurCoffeePage/OurCoffee";
import CoffeePage from "../pages/CoffeePage/CoffeePage";
import Goods from "../pages/GoodsPage/Goods.js";
import Footer from "../footer/Footer.js";
import Navigation from "../navigation/Navigation.js";
import logo from "../../icons/Group.svg";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Navigation logo={logo} />
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/OurCoffee" element={<OurCoffee />} />
          <Route path="/CoffeePage" element={<CoffeePage />} />
          <Route path="/Goods" element={<Goods />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
