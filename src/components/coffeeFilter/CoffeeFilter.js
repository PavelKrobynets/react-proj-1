import "./coffeeFilter.scss";
import { Component } from "react";

export default class CoffeeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [{name: "All"}, { name: "Brazil" }, { name: "Columbia" }, { name: "Kenya" }],
      term: "",
    };
  }

  onUpdateCoffee = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateCoffee(term);
  };
	

  render() {
    return (
      <div className="coffeeFilter">
        <div className="coffeeFilter__wrapper">
          <div>Looking for</div>
          <input
            type="text"
            placeholder="start typing here..."
            className="search-field"
            value={this.state.term}
            onChange={this.onUpdateCoffee}
          />
        </div>
        <div className="coffeeFilter__wrapper">
          <div>Or filter</div>
          <View tabs={this.state.tabs}  onFilterSelect={this.props.onFilterSelect}/>
        </div>
      </div>
    );
  }
}

const View = ({tabs , onFilterSelect}) => {
  const tabList = tabs.map(({ name }) => {
    return (
      <li key={name} 
			className="coffeeFilter__tabs-item"
			onClick={() => onFilterSelect(name)}
			>
        {name}
      </li>
    );
  });
  return <ul className="coffeeFilter__tabs-list">{tabList}</ul>;
};
