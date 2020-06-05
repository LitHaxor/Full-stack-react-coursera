import React from 'react';
import Nav from './Nav';
import { Jumbotron } from 'reactstrap';
class Header extends React.Component{
    render(){
        return(
            <>
            <Nav/>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the world's best cusines and created unique out lipsmacking creations</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        )
    }
}
 
export default Header;