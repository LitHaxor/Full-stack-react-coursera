import React from 'react';
import Menu from './Menu';
import Header from  './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Contact from './ContactUS';
import DishDetai from './DishDetail';
import About from './AboutComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends React.Component {


  render() {

    const HomePage = () =>{
      return (
        <Home 
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
    />
      );
    }
   

    const MenuPage = () =>{
      return (
        <Menu dishes={this.props.dishes}/>
      )
    }

    const DishWithID=({match}) =>{
      return(
        <DishDetai dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        comments= {this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))[0]}></DishDetai>
      );
    }

    const AboutPage=() =>{
      return(
      <About leaders={this.props.leaders}/>
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
export default withRouter(connect(mapStateToProps)(Main));