import React, { Component } from "react";
import "./App.css";
import GroceriesList from "./components/GroceriesList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Groceries List</h1>
        <GroceriesList />
      </div>
    );
  }
}

export default App;
