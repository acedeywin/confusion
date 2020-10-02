import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
// import Dishdetail from "./Components/DishdetailComponent";
import { DISHES } from "../shared/dishes";
// import "./App.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onSelectedDish(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onSelectedDish(dishId)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id == this.state.selectedDish
            )[0]
          }
        ></Dishdetail>
      </div>
    );
  }
}

export default Main;
