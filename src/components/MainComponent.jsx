import React from 'react';
import Menu from './Menu';
import Header from  './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import Contact from './ContactUS';
import DishDetail from './DishDetail';
import About from './AboutComponent';
import { addComment, fetchDishes } from '../redux/ActionCreator';



 const mapStateToProps = state =>
{
  return{
    dishes:state.dishes,
    comments:state.comments,
    promotions:state.promotions,
    leaders:state.leaders
  }
}
const mapDispatchToProps = ( dispatch ) =>({
      addComment: (dishId, rating, author, comment)=> dispatch(addComment((dishId, rating, author, comment))),
      fetchDishes: () =>{dispatch(fetchDishes())}
})



class Main extends React.Component {
  constructor(props){
    super(props);
  }

 componentDidMount(){
      this.props.fetchDishes();
 }
  render() {

    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.dishes.filter(c=>c.featured)[0]}
        dishesLoading= {this.props.dishes.isLoading}
        dishesErrMess ={this.props.dishes.errMess}
        promotion={this.props.promotions.filter(c=>c.featured)[0]}
        leader={this.props.leaders.filter(c=>c.featured)[0]}
        />
      )
    }

    const DishWithId=({match})=>
    {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter(c=>c.id===parseInt(match.params.dishId,10))[0]}
        isLoading= {this.props.dishes.isLoading}
        errMess ={this.props.dishes.errMess}
        comments ={this.props.comments.filter(c=>c.dishId===parseInt(match.params.dishId,10))}
        addComment ={this.props.addComment}
        />
      )
    }

    return (
    <div>
    <Header /> 
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route exact path='/about' component={()=><About leaders={this.props.leaders}/>} />
      <Route exact path='/menu' component={()=><Menu dishes={this.props.dishes}/>} />
      <Route path='/menu/:dishId' component={DishWithId}/>
      <Route exact path='/contactus' component={Contact} />
      <Redirect to="/home" />
    </Switch>
    <Footer />
    </div>
    );
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));