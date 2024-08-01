import "./App.scss"
// import Main from "../pages/Main"
// import OurCoffee from "../pages/OurCoffee"
// import CoffeePage from "../pages/CoffeePage"
import Goods from "../pages/Goods.js";
import Footer from "../footer/Footer.js"
import Navigation from "../navigation/Navigation.js";
import logo from "../../icons/Group.svg"

export default function App() { 
	return (
		<div className="App">
			<div className="header">
				<Navigation logo={logo}/>
				</div>
			<Goods />
			<Footer />
		</div>
	);
}