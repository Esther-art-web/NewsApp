import React, { Component } from 'react';
import { Card, CardImg,Button,CardTitle,CardBody,Col,CardText, CardSubtitle } from 'reactstrap';
import {Link} from 'react-router-dom';


class Main extends Component {
    
   
    

    
   
    render() { 
        
        const {isLoading1, headLines, error1} = this.props.homePageHeadLines;
        const {isLoading2, world, error2} = this.props.homePageWorld;
        return ( 
            <div className='container'>
                <div className='row row content'>
                    <h3>Top Headlines</h3>
                    <hr></hr>
                    <div className='row'>
                    {error1? <div className='col-12'>Error: {error1.message}</div> : <div></div>} 
                    {!isLoading1 ?(
                        headLines.map(headline=>{
                            const {title, description, urlToImage }= headline;
                            return(
                      
                        
                            <Card className="col-5 col-md-4 col-lg-3 m-1">
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
                    ) : 
                    <div className='col-12'>Loading...</div>
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
                                        Hello
                                        <CardTitle>{title}</CardTitle>
                                        <CardText>{description}</CardText>
                    
                                    </CardBody>
                                    
                                </Link>
                            </Card> 
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>Loading...</div>
                   }
                    
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Politics</h3>
                        <hr></hr>
                        <div className='row'>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg top width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                
                                </CardBody>
                                
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                
                                </CardBody>
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                    
                                </CardBody>
                            </Link>
                        </Card>
                        
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Sports</h3>
                        <hr></hr>
                        <div className='row'>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg top width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                
                                </CardBody>
                                
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                
                                </CardBody>
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                    
                                </CardBody>
                            </Link>
                        </Card>
                        
                    </div>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Entertainment</h3>
                        <hr></hr>
                        <div className='row'>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg top width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                
                                </CardBody>
                                
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                
                                </CardBody>
                            </Link>
                        </Card>
                        <Card className='col-md-5 col-lg-3 m-1'>
                            <Link to='/' >
                                <CardImg width="100%" src='assets/images/app-logo.jpg' />
                                <CardBody>
                                    <CardTitle>News Title</CardTitle>
                                    <CardSubtitle>News subtitle</CardSubtitle>
                                    <CardText>Summary Text</CardText>
                                    
                                </CardBody>
                            </Link>
                        </Card>
                        
                    </div>
                    
                </div>
            </div>
         );
    }
    
}
 
export default Main;

