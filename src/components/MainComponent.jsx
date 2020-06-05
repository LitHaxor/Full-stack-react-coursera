import React from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import Nav from './Nav';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div >
        <Nav/>
      <div className="container">

      
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
      </div>
    );
  }
}

export default Main;