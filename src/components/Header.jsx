import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler,Collapse,NavItem ,Jumbotron
    , Button, Modal, ModalHeader, ModalBody, Form, FormGroup,Input,Label, ModalFooter} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            isNavOpen: false,
            isModalOpen: false,
            email: null
         }

    }
    
     
    toggleNav=()=>{
         this.setState({isNavOpen:!this.state.isNavOpen})
     }
    toggleModal =()=>{
        this.setState({isModalOpen: !this.state.isModalOpen})
    } 
    handleInput=(evt)=>{
        this.setState({email: evt.target.value})
    }
    handleClick=(event)=>{
        alert('Your email address is '+ this.state.email);
        document.getElementsByClassName('modal')[0].style.display= 'none';
        document.getElementsByClassName('modal-backdrop')[0].style.display= 'none';
        event.preventDefault();
    }
    componentDidMount=()=>{
        setTimeout( ()=>{
            this.toggleModal();
           }, 20000, {once: true}) 
    }
    render() { 
        return ( 
            <React.Fragment>
            <Navbar color="light" light  expand='md' >
                <div className='container'>
                    <NavbarToggler  onClick={this.toggleNav} id='navbar-toggler'/>
                    <NavbarBrand className='mr-auto ml-auto' href='/home'>
                        <img src='assets/images/app-logo.jpg' height='60' width='60'  alt='Apex News'/>
                        APEX
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className= 'ml-5'>
                            <NavItem>
                                <NavLink className='nav-link' to='/world' onClick={this.toogleNav}>
                                    <span onClick={this.toggleNav}>World</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/politics'>
                                    <span  onClick={this.toggleNav}>Politics</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/sports'>
                                    <span  onClick={this.toggleNav}>Sports</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/entertainment'>
                                    <span  onClick={this.toggleNav}>Entertainment</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/business'>
                                    <span  onClick={this.toggleNav}>Business</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/health'>
                                    <span  onClick={this.toggleNav}>Health</span>
                                </NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink className='nav-link' to='/tech'>
                                    <span  onClick={this.toggleNav}>Tech</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span  onClick={this.toggleNav}>Subscribe</span>
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
            <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen} id='subscribeModal'>
                <ModalHeader >
                   Subscribe to receive notifications from us 
                  <span className='ml-5' onClick={this.toggleModal}> &times;</span> 
                </ModalHeader>
                <ModalBody >
                    <Form onSubmit={()=>{alert('Your email address is '+ this.state.email);}} >
                        {/* <FormGroup>
                            <Label htmlFor= 'firstName'>
                                FirstName:<Input type='text' name='firstName' />  
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor= 'lastName'>
                                LastName:<Input type='text' name='lastName' />  
                            </Label>
                        </FormGroup> */}
                        <FormGroup>
                            <Label htmlFor= 'email'>
                                Email:<Input type='email'  name='email' onInput={(event)=>this.handleInput(event)}/>  
                            </Label>
                        </FormGroup>
                        {/* <FormGroup check>
                            <Label htmlFor= 'checkbox'>
                                <Input type='checkbox'  name='checkbox'/>  agree
                            </Label>
                        </FormGroup> */}
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button  className='mr-auto ml-auto' onClick={(event)=>this.handleClick(event)}>
                        Subscribe
                    </Button>
                </ModalFooter>

            </Modal>
        </React.Fragment>    
         );
    }
}
 
export default NavBar;

