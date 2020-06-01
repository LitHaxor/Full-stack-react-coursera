import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Nav from './components/Nav'
import Menu from './components/Menu';
import {DISHES} from './shared/dishes';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
  return (
        <div>
          <Nav/>
          <Menu dishes={this.state.dishes}/>
        </div>
    );
  }
}

export default App;
