import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl, Col } from 'react-bootstrap';
import logo from './assets/logo.png';
import form from './searchBar.css';

class SearchBar extends Component {
    render() {
        return(

            <div>
                <Navbar inverse>
                    <Navbar.Header>
                    <Navbar.Brand>
                        <a className='navbar-brand' href="#">
                             <img src={logo} alt="instagramLogo"/> 
                        </a>
                    </Navbar.Brand>
                     <Navbar.Toggle /> 
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <input type="text" placeholder="Search" className="form form-control"></input>
                        </FormGroup>
                    </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        )
    }
}

export default SearchBar;