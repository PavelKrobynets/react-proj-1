import "./Main.css";
import Introduce from "../introduce/introduce";
import Navigation from "../navigation/navigation";
import About from "../about/about";
import Best from "../best/best";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <Navigation />
      </header>
      <Introduce />
      <About />
      <Best />
    </div>
  );
}
