import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import World from './components/World'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Headlines from './components/Headlines';
import Politics from './components/Politics';
import Sports from './components/Sports'
import Entertainment from './components/Entertainment';
import Footer from './components/Footer';
import RenderHeadLinesComponent from './components/RenderHomePage/RenderHeadLinesComponent';
import RenderWorldComponent from './components/RenderHomePage/RenderWorldComponent';
import { connect } from 'react-redux'

// const mapStateToProps =(state)=>{
//   return({
//     headLines : state.headLines,
//     isLoading: state.isLoading,
//     error: state.error
//   })
//  }
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      homePage: [
        {id: 'homeHeadLines',
        headLines:[],
        isLoading: true,
        error: null
        },
        {
          id: 'homeWorld',
          world:[],
          isLoading: true,
          error: null
        }
    ]
    }
    console.log(this.state.homePage)
  }
   fetchHeadlines=()=>{
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
      
      const homePage= this.state.homePage.map(
        key => key.id === 'homeHeadLines' ? {
          ...key, 
          headLines : data.articles,
          isLoading: false
        }: 
        {...key}
      );
        this.setState({
            homePage },
            () => {
              console.log(this.state.homePage)
            }
        );
      })
     
    .catch(error => {
      const errrorHandler= this.state.homePage.map(
        key=> key.id === 'homeHeadLines'? {
          ...key,
          error ,
          isLoading: false
        }: {...key}
      );
      
      this.setState({
        homePage: errrorHandler
    }) ;
  })   

   }
  

  fetchWorld= () =>{
   fetch("https://newsapi.org/v2/everything?q=world&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
    
      const homePage= this.state.homePage.map(
        key => key.id === 'homeWorld' ? {
          ...key, 
          world : data.articles,
          isLoading: false
        }: 
        {...key}
      );
        this.setState({
            homePage },
            () => {
              console.log(this.state.homePage)
            }
        );
      })
     
    .catch(error => {
      const errrorHandler= this.state.homePage.map(
        key=> key.id === 'homeWorld'? {
          ...key,
          error ,
          isLoading: false
        }: {...key}
      );
      
      this.setState({
        homePage: errrorHandler
    }) ;
  })   

    }
    
  componentDidMount(){
    console.log('rendered');
   this.fetchHeadlines();
   this.fetchWorld();
}
 


 
  render() { 
    const RenderHeadLines=({ match })=>{
      return(
      <RenderHeadLinesComponent 
          info={this.state.homePage.filter(key =>
            key.id === 'homeHeadLines'
          )}
          match= {match}  
            />  
      );
      }
      const RenderWorld=({ match })=>{
        return(
        <RenderWorldComponent 
            info={this.state.homePage.filter(key =>
              key.id === 'homeWorld'
            )}
            match= {match}  
              />  
        );
        }
    return ( 
      <React.Fragment>
         <Header/>
         <Switch>
           <Route path='/home' component={() =><Main homePageHeadLines={this.state.homePage.filter(headLine=> headLine.id === 'homeHeadLines')[0]}
                                            homePageWorld={this.state.homePage.filter(headLine=> headLine.id === 'homeWorld')[0]}
                                                />}/>
           <Route path='/world/:title' component={RenderWorld}/>
           <Route exact path='/world' component={World}/>
           <Route path='/headlines/:title' component={RenderHeadLines}/>
           <Route exact path='/headlines' component={Headlines}/>
           <Route exact path='/politics' component={Politics}/>
           <Route exact path='/sports' component={Sports}/>
           <Route exact path='/entertainment' component={Entertainment}/>
           <Redirect to='/home'/>
         </Switch>
         {/* <Footer/>  */}
        
      </React.Fragment>
     
    );
  }
}
 
export default (App);

