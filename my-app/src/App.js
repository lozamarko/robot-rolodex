import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: "",
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  searchMonsters = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchValue)
    );
    return (
      <div className="App">
        <h1>Robot Rolodex</h1>
        <Search
          searchValue={searchValue}
          searchMonsters={this.searchMonsters}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
