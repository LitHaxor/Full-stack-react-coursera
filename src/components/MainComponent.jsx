import React from 'react';
import Menu from './Menu';
import Header from  './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactUS';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions : PROMOTIONS,
        leaders: LEADERS
        
    };
  }

  

  render() {

    const HomePage = () =>{
      return (
        <Home 
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
    />
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
            <Route exact="/contactus" component={Contact}/>
            <Redirect to='home' />

          </Switch>

        <Footer/>
      </div>
    );
  }
}

export default Main;