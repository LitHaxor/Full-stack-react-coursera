import React from  'react';
import {Card, CardImg, CardBody, CardTitle,CardText} from 'reactstrap';

class DishDetail extends React.Component{

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
            





    renderComment(comments){
        if(comments == null){
            return (
                <div>

                </div>
            )
        }
        const com = comments.map(comment =>{
            return(
                <li key= {comment.id}> 
                    <p> 
                        {comment.id}
                    </p>
                    <p>
                        {comment.author} &n 
                        date: {comment.date}
                    </p>

                </li>
            )
        })
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {com}
                </ul>
            </div>
        )
    }
    




    render()
    {
        const dish = this.props.dish;

        if(dish == null)
         return(
             <div>

             </div>
         )
         const dishItem= this.renderDish(dish);
         const comment = this.renderComment(dish.comments);
         return(
             <div className="row">
                 {dishItem}
                 {comment}
             </div>
         )
    }

}

export default DishDetail;