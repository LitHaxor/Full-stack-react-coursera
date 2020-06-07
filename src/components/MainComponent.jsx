import React from 'react';
import Menu from './Menu';
import DishDetail from './DishDetail';
import { DISHES } from '../shared/dishes';
import Header from  './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
    };
  }

 

  render() {

    const HomePage = () =>{
      return (
        <Home />
      );
    }
    const MenuPage = () =>{
      return (
        <Menu dishes={this.state.dishes}/>
      )
    }

    return (
      <div >
        <Header/>

          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>} />
            <Redirect to='home' />
          </Switch>

        <Footer/>
      </div>
    );
  }
}

export default Main;