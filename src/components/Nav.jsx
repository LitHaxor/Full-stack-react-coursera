import React,{ Component } from 'react';

import {Navbar, NavbarBrand} from 'reactstrap';


class Nav extends Component{
    render(){
        return(
            <Navbar dark color="primary" >
                <div className="container">
                    <NavbarBrand href="/">Restorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
        );
    }
}


export default Nav;