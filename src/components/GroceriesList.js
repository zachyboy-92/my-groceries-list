import React, { Component } from "react";
import "./GroceriesList.css";

class GroceriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        {
          item: "Milk",
          units: "2 gallons",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "Bread",
          units: "1",
          quantity: 1,
          isPurchased: false,
        },
        {
          item: "Eggs",
          units: "dozen",
          quantity: 1,
          isPurchased: false,
        },
      ],
      item: "",
      units: "",
      quantity: 0,
      isPurchased: false,
    };
  }

  inputItemHandler(event) {
    this.setState({ item: event.target.value });
  }

  inputUnitsHandler(event) {
    this.setState({ units: event.target.value });
  }

  inputQuantityHandler(event) {
    this.setState({ quantity: event.target.value });
  }

  sumbitHandler(event) {
    event.preventDefault();
    const groceriesItems = {
      item: this.state.item,
      units: this.state.units,
      quantity: this.state.quantity,
    };

    if (
      this.state.item === "" ||
      this.state.units === "" ||
      this.state.quantity === ""
    ) {
      return;
    } else {
      this.setState({
        groceries: this.state.groceries.concat(groceriesItems),
      });

      this.setState({ item: "" });
      this.setState({ units: "" });
      this.setState({ quantity: "" });
    }
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.sumbitHandler.bind(this)}>
          <label htmlFor="item">Item</label>
          <input
            id="item"
            type="text"
            placeholder="Enter Item"
            onChange={this.inputItemHandler.bind(this)}
            value={this.state.item}
          />
          <label htmlFor="units">Units</label>
          <input
            id="units"
            type="text"
            placeholder="Enter Units"
            onChange={this.inputUnitsHandler.bind(this)}
            value={this.state.units}
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="text"
            placeholder="Enter Quantity"
            onChange={this.inputQuantityHandler.bind(this)}
            value={this.state.quantity}
          />
          <button type="submit">Add Item</button>
        </form>
        {this.state.groceries.map((element) => {
          return (
            <div className="groceries-container">
              <ul className="groceries-items">
                <li>Item: {element.item}</li>
                <li>Units: {element.units}</li>
                <li>Quantity: {element.quantity}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GroceriesList;
