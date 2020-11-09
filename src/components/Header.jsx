import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem ,Jumbotron
    , Button, Modal, ModalHeader, ModalBody, Form, FormGroup,Input,Label} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isNavOpen: false
         }
        const { isNavOpen }= this.state
    }
    
     
    toggleNav=()=>{
         this.setState({isNavOpen:!this.state.isNavOpen})
     }
    render() { 
        return ( 
            <React.Fragment>
            <Navbar  expand='md'>
                <div className='container'>
                    <NavbarToggler  onClick={this.toggleNav}/>
                    <NavbarBrand className='mr-auto' href='/home'>
                        <img src='assets/images/app-logo.jpg' height='60' width='60'  alt='Apex News'/>
                        APEX
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/world'>
                                    <span >World</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/politics'>
                                    <span >Politics</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <span >Business</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <span >Health</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/entertainment'>
                                    <span >Entertainment</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/sports'>
                                    <span >Sports</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <span >Tech</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span >Login</span>
                                </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>APEX NEWS</h1>
                            <i>... your news, our priority</i>
                            <hr></hr>
                            <p>Apex News is focused on providing the public with relevant, up-to-date news</p>

                        </div>
                    </div>
                </div>
            </Jumbotron>
            
        </React.Fragment>    
         );
    }
}
 
export default NavBar;

