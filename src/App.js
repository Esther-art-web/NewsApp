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
import Business from './components/Business';
import Health from './components/Health';
import Tech from './components/Tech';
import Axios from 'axios';
import RenderBusinessComponent from './components/RenderHomePage/RenderBusinessComponent';


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
        },
        {
          id: 'BusinessPage',
          business:[],
          isLoading: true,
          error: null
        },
        {
          id: 'HealthPage',
          health:[],
          isLoading: true,
          error: null
        },
        {
          id: 'TechPage',
          tech:[],
          isLoading: true,
          error: null
        }
    ]
    }
    
  }
   fetchHeadlines=()=>{
    fetch("https://newsapi.org/v2/top-headlines?sources=cnn&sortBy=popularity&apiKey=25d513e86f054bd0b1c06fc615071ef5")
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
               homePage 
              });
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
              homePage }
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
            homePage }
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
                
              }
          );
        })
      
      .catch(error => {
        const errorHandler= this.state.pageComponents.map(
          key=> key.id === 'WorldPage'? {
            ...key,
            error ,
            isLoading: false
          }: {...key}
        );
        
        this.setState({
          pageComponents: errorHandler
      }) ;
    })   
  
      }  
fetchPoliticsPage= () =>{
  fetch("https://newsapi.org/v2/everything?q=politics&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
    
      const pageComponents= this.state.pageComponents.map(
        key => key.id === 'PoliticsPage' ? {
          ...key, 
          politics : data.articles,
          isLoading: false
        }: 
        {...key}
      );
        this.setState({
            pageComponents },
            () => {
              
            }
        );
      })
    
    .catch(error => {
      const errrorHandler= this.state.pageComponents.map(
        key=> key.id === 'PoliticsPage'? {
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
fetchSportsPage= () =>{
  fetch("https://newsapi.org/v2/everything?q=sports&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
    
      const pageComponents= this.state.pageComponents.map(
        key => key.id === 'SportsPage' ? {
          ...key, 
          sports : data.articles,
          isLoading: false
        }: 
        {...key}
      );
        this.setState({
            pageComponents },
            () => {
              
            }
        );
      })
    
    .catch(error => {
      const errorHandler= this.state.pageComponents.map(
        key=> key.id === 'SportsPage'? {
          ...key,
          error ,
          isLoading: false
        }: {...key}
      );
      
      this.setState({
        pageComponents: errorHandler
    }) ;
  })   

}       
fetchEntertainmentPage= () =>{
  fetch("https://newsapi.org/v2/everything?q=entertainment&apiKey=25d513e86f054bd0b1c06fc615071ef5")
    .then(response=> response.json())
    .then((data)=>{
    
      const pageComponents= this.state.pageComponents.map(
        key => key.id === 'EntertainmentPage' ? {
          ...key, 
          entertainment : data.articles,
          isLoading: false
        }: 
        {...key}
      );
        this.setState({
            pageComponents },
            () => {
              
            }
        );
      })
    
    .catch(error => {
      const errorHandler= this.state.pageComponents.map(
        key=> key.id === 'EntertainmentPage'? {
          ...key,
          error ,
          isLoading: false
        }: {...key}
      );
      
      this.setState({
        pageComponents: errorHandler
    }) ;
  })   

} 
getBusinessPage=()=>{
  Axios
  .get("https://newsapi.org/v2/everything?q=business&apiKey=25d513e86f054bd0b1c06fc615071ef5")
  .then(response => 
    response.data.articles.map(
      data => ({
        title: `${data.title}`,
        urlToImage : `${data.urlToImage}`,
        description: `${data.description}`
      })
    ))
    .then(business => {
      var pageComponents= this.state.pageComponents.map(
        key =>
        key.id === 'BusinessPage' ? {...key, business, isLoading: false } : {...key}
      )
      this.setState({
        pageComponents
      },
      console.log(this.state.pageComponents)
      )
    })
    .catch(error =>{
      var pageComponents= this.state.pageComponents.map(key =>
        key.id === 'BusinessPage' ? 
        ({...key, error, isLoading: false }) : ({...key})
      )
      this.setState({
        pageComponents
      })
    })
}      

  componentDidMount(){
  //  The sections in the home page
   this.fetchHeadlines();
   this.fetchWorld();
   this.fetchPolitics();
   this.fetchSports();
   this.fetchEntertainment();
  // Individual Page Components
   this.fetchWorldPage();
   this.fetchPoliticsPage();
   this.fetchSportsPage();
   this.fetchEntertainmentPage();
   this.getBusinessPage();
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
              key.id === 'homeWorld') && this.state.pageComponents.filter(key =>
                key.id === 'WorldPage')}
            match= {match}  
              />  
        );
    }
    const RenderPolitics=({ match })=>{
          return(
          <RenderPoliticsComponent 
              info={this.state.homePage.filter(key =>
                key.id === 'homePolitics') && this.state.pageComponents.filter(key =>
                  key.id === 'PoliticsPage')}
              match= {match}  
                />  
          );
    }  
    const RenderSports=({ match })=>{
            return(
            <RenderSportsComponent 
                info={this.state.homePage.filter(key =>
                  key.id === 'homeSports') && this.state.pageComponents.filter(key =>
                    key.id === 'SportsPage'
                  )
                }
                match= {match}  
                  />  
            );
    }  
    const RenderEntertainment=({ match })=>{
              return(
              <RenderEntertainmentComponent 
                  info={this.state.homePage.filter(key =>
                    key.id === 'homeEntertainment') && this.state.pageComponents.filter(key =>
                      key.id === 'EntertainmentPage'
                  )
                }
                  match= {match}  
                    />                 
              );
    }  
    const RenderBusiness=({ match })=>{
      return(
      <RenderBusinessComponent
          info={this.state.pageComponents.filter(key =>
            key.id === 'BusinessPage'
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
           <Route exact path='/politics' component={()=> <Politics info={this.state.pageComponents.filter(page => page.id === 'PoliticsPage')[0]}/>}/>
           <Route path='/sports/:title' component={RenderSports}/>
           <Route exact path='/sports' component={()=> <Sports info={this.state.pageComponents.filter(page => page.id === 'SportsPage')[0]}/>}/>
           <Route path='/entertainment/:title' component={RenderEntertainment}/>
           <Route exact path='/entertainment' component={()=> <Entertainment info={this.state.pageComponents.filter(page => page.id === 'EntertainmentPage')[0]}/>}/>
           <Route path='/business/:title' component={ RenderBusiness}/>
           <Route exact path ='/business' component ={()=> <Business info={this.state.pageComponents.filter(page => page.id === 'BusinessPage')[0]}/>}/>
           <Route exact path ='/health' component ={()=> <Health/>}/>
           <Route exact path ='/tech' component ={()=> <Tech/>}/>
           <Redirect to='/home'/>
         </Switch>
         <Footer/> 
        
      </React.Fragment>
     
    );
  }
}
 
export default (App);

