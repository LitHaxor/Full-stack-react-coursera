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
import DishDetai from './DishDetail';
import About from './AboutComponent';
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

    const DishWithID=({match}) =>{
      return(
        <DishDetai dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments= {this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))[0]}></DishDetai>
      );
    }

    const AboutPage=() =>{
      return(
      <About leaders={this.state.leaders}/>
      )
    }
    return (
      <div >
        <Header/>

          <Switch>
            <Route path='/home' component={HomePage}/>
            <Route exact path='/menu' component={MenuPage} />
            <Route exact path="/contactus" component={Contact}/>
            <Route path='/about' component={AboutPage}/>
            <Redirect to='home' />
            <Route path='/menu/:dishId' component={DishWithID}/>
          </Switch>

        <Footer/>
      </div>
    );
  }
}

export default Main;