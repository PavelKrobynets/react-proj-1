import "./coffeeFilter.scss"

export default function CoffeeFilter() { 
	// const tabs = [
	// 	{name: "Brazil", label: "Brazil"},
	// 	{name: "Colombia", label: "Colombia"},
	// 	{name: "Kenya", label: "Kenya"},
	// ]
	return (
		<div className="coffeFilter">
			<div className="coffeeFilter__search">
				<div>Looking for</div>
				<input type="text" placeholder="Search" className="search-field"/>
			</div>
			<div className="coffeeFilter__tabs">
				<div>Or filter</div>
				<div className="coffeeFilter__tabs__tab"></div>
			</div>
		</div>
	);
}