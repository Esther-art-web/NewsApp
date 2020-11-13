import React, { Component } from 'react';
import { Card, CardImg,CardTitle,CardBody,Row, Col,CardText} from 'reactstrap';
import {Link} from 'react-router-dom';


class Main extends Component {
    cardStyle={
        height:'250px',fontSize:'12px', overflow: 'hidden',whiteSpace: 'wrap',textOverflow: 'ellipsis',
        
    }
   
    

    
   
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
                    <Row>
                    {error1? <div className='col-12'>Error: {error1.message}</div> : <div></div>} 
                    {!isLoading1 ?(
                        headLines.map(headline=>{
                            const {title, description, urlToImage }= headline;
                            return(
                      
                                <Col xs='6' md='4'  >
                                    <Card className='mt-2' style={this.cardStyle}>
                                        <Link to={`/headlines/${title}`} >
                                            <CardImg top width="100%" height='120px' src={urlToImage} />
                                            <CardBody >
                                                <CardTitle style={{fontSize: '15px', fontWeight: 'bold'}}>{title}</CardTitle>
                                                <CardText>{description}</CardText>
                            
                                            </CardBody>
                                            
                                        </Link>
                                    </Card> 
                                </Col>
                        
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
                    
                    </Row>  
                </div>
                <div className='row row content mt-5'>
                    <h3>World</h3>
                        <hr></hr>
                        <Row>
                        {error2? <div className='col-12'>Error: {error2.message}</div> : <div></div>} 
                    {!isLoading2 ?(
                        world.map(world=>{
                            const {title, description, urlToImage }= world;
                            return(
                                <Col xs='6' md='4'>
                                    <Card className='mt-2' style={this.cardStyle}>
                                        <Link to={`/world/${title}`} >
                                            <CardImg top width="100%" height='120px' src={urlToImage} />
                                            <CardBody >
                                                <CardTitle style={{fontSize: '15px', fontWeight: 'bold'}}>{title}</CardTitle>
                                                <CardText>{description}</CardText>
                            
                                            </CardBody>
                                            
                                        </Link>
                                    </Card> 
                                </Col>
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </Row>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Politics</h3>
                        <hr></hr>
                        <Row>
                        {error3? <div className='col-12'>Error: {error3.message}</div> : <div></div>} 
                    {!isLoading3 ?(
                        politics.map(politics=>{
                            const {title, description, urlToImage }= politics;
                            return(
                                <Col xs='6' md='4'>
                                    <Card className='mt-2' style={this.cardStyle}>
                                        <Link to={`/politics/${title}`} >
                                            <CardImg top width="100%" height='120px' src={urlToImage} />
                                            <CardBody >
                                                
                                                <CardTitle style={{fontSize: '15px', fontWeight: 'bold'}}>{title}</CardTitle>
                                                <CardText>{description}</CardText>
                            
                                            </CardBody>
                                            
                                        </Link>
                                    </Card> 
                                </Col>
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </Row>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Sports</h3>
                        <hr></hr>
                        <Row>
                        {error4? <div className='col-12'>Error: {error4.message}</div> : <div></div>} 
                    {!isLoading4 ?(
                        sports.map(sports=>{
                            const {title, description, urlToImage }= sports;
                            return(
                                <Col xs='6' md='4'>
                                    <Card className='mt-2' style={this.cardStyle}>
                                        <Link to={`/sports/${title}`} >
                                            <CardImg top width="100%" height='120px' src={urlToImage} />
                                            <CardBody >
                                                
                                                <CardTitle style={{fontSize: '15px', fontWeight: 'bold'}}>{title}</CardTitle>
                                                <CardText>{description}</CardText>
                            
                                            </CardBody>
                                            
                                        </Link>
                                    </Card> 
                                </Col>
                        
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    
                    </Row>
                    
                </div>
                <div className='row row content mt-5'>
                    <h3>Entertainment</h3>
                        <hr></hr>
                        <Row>
                        {error5? <div className='col-12'>Error: {error5.message}</div> : <div></div>} 
                    {!isLoading5 ?(
                        entertainment.map(entertainment=>{
                            const {title, description, urlToImage }= entertainment;
                            return(
                                <Col xs='6' md='4'>
                                    <Card className='mt-2' style={this.cardStyle}>
                                        <Link to={`/entertainment/${title}`} >
                                            <CardImg top width="100%" height='120px' src={urlToImage} />
                                            <CardBody >
                                                
                                                <CardTitle style={{fontSize: '15px', fontWeight: 'bold'}}>{title}</CardTitle>
                                                <CardText>{description}</CardText>
                            
                                            </CardBody>
                                            
                                        </Link>
                                    </Card> 
                                </Col>
                        );
                
                        })
                    ) : 
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif'/>
                        </div>
                    </div>
                   }
                    </Row>
                    
                </div>
            </div>
         );
    }
    
}
 
export default Main;

