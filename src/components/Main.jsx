import React, { Component } from 'react';
import { Card, CardImg,Button,CardTitle,CardBody,Col,CardText, CardSubtitle } from 'reactstrap';
import {Link} from 'react-router-dom';


class Main extends Component {
    
   
    

    
   
    render() { 
        
        const {isLoading1, headLines, error1} = this.props.homePageHeadLines;
        const {isLoading2, world, error2} = this.props.homePageWorld;
        const {isLoading3, politics, error3} = this.props.homePagePolitics;
        const {isLoading4, sports, error4} = this.props.homePageSports;
        const {isLoading5, entertainment, error5} = this.props.homePageEntertainment;
        return ( 
            <div className='container'>
                <div className='row row content'>
                    <h3>Top Headlines</h3>
                    <hr/>
                    <div className='row'>
                    {error1? <div className='col-12'>Error: {error1.message}</div> : <div></div>} 
                    {!isLoading1 ?(
                        headLines.map(headline=>{
                            const {title, description, urlToImage }= headline;
                            return(
                      
                        
                            <Card className="col-5 col-md-4 col-lg-3 m-1" >
                                <Link to={`/headlines/${title}`} >
                                    <CardImg top width="100%" src={urlToImage} />
                                    <CardBody>
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) 
                    :
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                </div>  
                </div>
                <div className='row row content mt-5'>
                    <h3>World</h3>
                        <hr></hr>
                        <div className='row'>
                        {error2? <div className='col-12'>Error: {error2.message}</div> : <div></div>} 
                    {!isLoading2 ?(
                        world.map(world=>{
                            const {title, description, urlToImage }= world;
                            console.log(world);
                            return(
                      
                            <Card className="col-5 col-md-4 col-lg-3 m-1">
                                <Link to={`/world/${title}`} >
                                    <CardImg top width="100%" src={urlToImage} />
                                    <CardBody>
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Politics</h3>
                        <hr></hr>
                        <div className='row'>
                        {error3? <div className='col-12'>Error: {error3.message}</div> : <div></div>} 
                    {!isLoading3 ?(
                        politics.map(politics=>{
                            const {title, description, urlToImage }= politics;
                            console.log(politics);
                            return(
                      
                            <Card className="col-5 col-md-4 col-lg-3 m-1">
                                <Link to={`/politics/${title}`} >
                                    <CardImg top width="100%" src={urlToImage} />
                                    <CardBody>
                                        
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Sports</h3>
                        <hr></hr>
                        <div className='row'>
                        {error4? <div className='col-12'>Error: {error4.message}</div> : <div></div>} 
                    {!isLoading4 ?(
                        sports.map(sports=>{
                            const {title, description, urlToImage }= sports;
                            console.log(sports);
                            return(
                      
                            <Card className="col-5 col-md-4 col-lg-3 m-1">
                                <Link to={`/sports/${title}`} >
                                    <CardImg top width="100%" src={urlToImage} />
                                    <CardBody>
                                        
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Entertainment</h3>
                        <hr></hr>
                        <div className='row'>
                        {error5? <div className='col-12'>Error: {error5.message}</div> : <div></div>} 
                    {!isLoading5 ?(
                        entertainment.map(entertainment=>{
                            const {title, description, urlToImage }= entertainment;
                            console.log(entertainment);
                            return(
                      
                            <Card className="col-5 col-md-4 col-lg-3 m-1">
                                <Link to={`/entertainment/${title}`} >
                                    <CardImg top width="100%" src={urlToImage} />
                                    <CardBody>
                                        
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    </div>
                    
                </div>
            </div>
         );
    }
    
}
 
export default Main;

