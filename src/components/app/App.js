import "./App.scss"
// import Main from "../pages/Main"
import OurCoffee from "../pages/OurCoffee"
// import CoffeePage from "../pages/CoffeePage"
import Footer from "../footer/Footer.js"
import Navigation from "../navigation/Navigation.js";

export default function App() { 
	return (
		<div className="App">
			<div className="header">
				<Navigation logo={"/icons/Group.svg"}/>
				</div>
			<OurCoffee />
			<Footer />
		</div>
	);
}