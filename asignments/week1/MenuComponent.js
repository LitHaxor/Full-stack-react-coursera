import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from './DishDetail'
import { DISHES } from '../shared/dishes';

class Menu extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            selectedDish: null
        }
    }

    onSelectedDish(dish)
    {
        this.setState({
            selectedDish: dish
        })
    }
    

    render(){
        
           
        const menu = this.props.dishes.map(dish => {
            return (
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.onSelectedDish(dish)} >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle >{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
           return(
               <div className="container">
                   <div className="row">
                       {menu}
                   </div>
                   <Dishdetail dish={this.state.selectedDish}></Dishdetail>
               </div>
           )
        
    }
}

export default Menu; 