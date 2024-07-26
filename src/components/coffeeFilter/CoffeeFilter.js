import "./coffeeFilter.scss";

export default function CoffeeFilter() {
  const tabs = [
    { name: "Brazil", label: "Brazil" },
    { name: "Colombia", label: "Colombia" },
    { name: "Kenya", label: "Kenya" },
  ];

  const tabList =  tabs.map(({ name, label }) => {
        return (
					<li key={label} className="coffeeFilter__tabs-item">
          {name}
        </li>
				)
    });

  return (
    <div className="coffeeFilter">
      <div className="coffeeFilter__wrapper">
        <div>Looking for</div>
        <input type="text" placeholder="start typing here..." className="search-field" />
      </div>
      <div className="coffeeFilter__wrapper">
        <div>Or filter</div>
        <ul className="coffeeFilter__tabs-list">{tabList}</ul>
      </div>
    </div>
  );
}
