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
import RenderPoliticsComponent from './components/RenderHomePage/RenderPoliticsComponent';
import RenderSportsComponent from './components/RenderHomePage/RenderSportsComponent';
import RenderEntertainmentComponent from './components/RenderHomePage/RenderEntertainmentComponent';
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
        isLoading1: true,
        error1: null
        },
        {
          id: 'homeWorld',
          world:[],
          isLoading2: true,
          error2: null
        },
        {
          id: 'homePolitics',
          politics:[],
          isLoading3: true,
          error3: null
        },
        {
          id: 'homeSports',
          sports:[],
          isLoading4: true,
          error4: null
        },
        {
          id: 'homeEntertainment',
          entertainment:[],
          isLoading5: true,
          error5: null
        }],
        pageComponents:[
        {
          id: 'WorldPage',
          world:[],
          isLoading: true,
          error: null
        },
        {
          id: 'PoliticsPage',
          politics:[],
          isLoading: true,
          error: null
        },
        {
          id: 'SportsPage',
          sports:[],
          isLoading: true,
          error: null
        },
        {
          id: 'EntertainmentPage',
          entertainment:[],
          isLoading: true,
          error: null
        }
    ]
    }
    console.log(this.state.homePage)
  }
   fetchHeadlines=()=>{
    fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=popularity&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
      
      const homePage= this.state.homePage.map(
        key => key.id === 'homeHeadLines' ? {
          ...key, 
          headLines : data.articles.slice(0,5),
          isLoading1: false
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
          isLoading1: false
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
          world : data.articles.slice(0,5),
          isLoading2: false
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
          isLoading2: false
        }: {...key}
      );
      
      this.setState({
        homePage: errrorHandler
    }) ;
  })   

    }


    fetchPolitics= () =>{
      fetch("https://newsapi.org/v2/everything?q=politics&apiKey=25d513e86f054bd0b1c06fc615071ef5")
       .then(response=> response.json())
       .then((data)=>{
       
         const homePage= this.state.homePage.map(
           key => key.id === 'homePolitics' ? {
             ...key, 
             politics : data.articles.slice(0,5),
             isLoading3: false
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
           key=> key.id === 'homePolitics'? {
             ...key,
             error ,
             isLoading3: false
           }: {...key}
         );
         
         this.setState({
           homePage: errrorHandler
       }) ;
     })   
   
       }  

    fetchSports= () =>{
    fetch("https://newsapi.org/v2/everything?q=sports&apiKey=25d513e86f054bd0b1c06fc615071ef5")
      .then(response=> response.json())
      .then((data)=>{
      
        const homePage= this.state.homePage.map(
          key => key.id === 'homeSports' ? {
            ...key, 
            sports : data.articles.slice(0,5),
            isLoading4: false
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
          key=> key.id === 'homeSports'? {
            ...key,
            error ,
            isLoading4: false
          }: {...key}
        );
        
        this.setState({
          homePage: errrorHandler
      }) ;
    })   
  
      }       


fetchEntertainment= () =>{
  fetch("https://newsapi.org/v2/everything?q=entertainment&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
    
      const homePage= this.state.homePage.map(
        key => key.id === 'homeEntertainment' ? {
          ...key, 
          entertainment : data.articles.slice(0,5),
          isLoading5: false
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
        key=> key.id === 'homeEntertainment'? {
          ...key,
          error ,
          isLoading5: false
        }: {...key}
      );
      
      this.setState({
        homePage: errrorHandler
    }) ;
  })   

    }  
    
    
    fetchWorldPage= () =>{
      fetch("https://newsapi.org/v2/everything?q=world&apiKey=25d513e86f054bd0b1c06fc615071ef5")
       .then(response=> response.json())
       .then((data)=>{
       
         const pageComponents= this.state.pageComponents.map(
           key => key.id === 'WorldPage' ? {
             ...key, 
             world : data.articles,
             isLoading: false
           }: 
           {...key}
         );
           this.setState({
               pageComponents },
               () => {
                 console.log(this.state.pageComponents)
               }
           );
         })
        
       .catch(error => {
         const errrorHandler= this.state.pageComponents.map(
           key=> key.id === 'WorldPage'? {
             ...key,
             error ,
             isLoading: false
           }: {...key}
         );
         
         this.setState({
           pageComponents: errrorHandler
       }) ;
     })   
   
       }    

  componentDidMount(){
    console.log('rendered');
   this.fetchHeadlines();
   this.fetchWorld();
   this.fetchPolitics();
   this.fetchSports();
   this.fetchEntertainment();
   console.log(this.state);

   this.fetchWorldPage();
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
        const RenderPolitics=({ match })=>{
          return(
          <RenderPoliticsComponent 
              info={this.state.homePage.filter(key =>
                key.id === 'homePolitics'
              )}
              match= {match}  
                />  
          );
          }  
          const RenderSports=({ match })=>{
            return(
            <RenderSportsComponent 
                info={this.state.homePage.filter(key =>
                  key.id === 'homeSports'
                )}
                match= {match}  
                  />  
            );
            }  

            const RenderEntertainment=({ match })=>{
              return(
              <RenderEntertainmentComponent 
                  info={this.state.homePage.filter(key =>
                    key.id === 'homeEntertainment'
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
                                            homePagePolitics={this.state.homePage.filter(headLine=> headLine.id === 'homePolitics')[0]}
                                            homePageSports={this.state.homePage.filter(headLine=> headLine.id === 'homeSports')[0]}
                                            homePageEntertainment={this.state.homePage.filter(headLine=> headLine.id === 'homeEntertainment')[0]}
                                                />}/>
           <Route path='/world/:title' component={RenderWorld}/>
           <Route exact path='/world' component={() => <World info={this.state.pageComponents.filter(page => page.id === 'WorldPage')[0]}/>}/>
           <Route path='/headlines/:title' component={RenderHeadLines}/>
           <Route exact path='/headlines' component={Headlines}/>
           <Route path='/politics/:title' component={RenderPolitics}/>
           <Route exact path='/politics' component={Politics}/>
           <Route path='/sports/:title' component={RenderSports}/>
           <Route exact path='/sports' component={Sports}/>
           <Route path='/entertainment/:title' component={RenderEntertainment}/>
           <Route exact path='/entertainment' component={Entertainment}/>
           <Redirect to='/home'/>
         </Switch>
         <Footer/> 
        
      </React.Fragment>
     
    );
  }
}
 
export default (App);

