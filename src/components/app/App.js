import "./App.css";
import Introduce from "../introduce/introduce";
import Navigation from "../navigation/navigation"

export default function App() {
  return (
		<div className="App">
			<header className="header">
			<Navigation/>
			</header>
			<Introduce/>
	</div>
	)
}
