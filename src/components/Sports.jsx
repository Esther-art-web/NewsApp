import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

class Sports extends Component {
    state = {  }
    cardStyle={
        height:'250px',fontSize:'12px', overflow: 'hidden',whiteSpace: 'wrap',textOverflow: 'ellipsis', marginTop: '10px'
    }
    render() { 
        const {sports, isLoading, error}= this.props.info;
        return ( 
            <div className='container'>
                <div className='row'>
                    <h1>Sports News</h1>
                </div>
                <Row>
                    {error? <div>{error.message}</div> : null}
                    {!isLoading? (
                        sports.map(info =>{
                        const {title, urlToImage, description }= info;
                        return(
                            <Col sm={6} md={4}>
                                <Card style={this.cardStyle}>
                                    <Link to={`/sports/${title}`}>
                                        <CardImg top width="100%" height='150px' src={urlToImage} alt=''/>
                                        <CardBody>
                                            <CardTitle style={{fontSize: '15px', fontWeight: 'bold', lineHeight:'15px'}}>{title}</CardTitle>
                                            <CardText>{description.length > 50 ?(description.slice(0,50)+ '...'):(description.slice(0,30)+ '...')}</CardText>
                                        </CardBody>
                                    </Link>
                                </Card>
                            </Col>
                        );
                        
                    }))
                    :
                    <div className='col-12'>
                        <div class='text-center'>
                            <img src='assets/images/ajax-loader.gif' alt=''/>
                        </div>
                    </div>
                }
                </Row>
            </div>
         );
    }
}
 
export default Sports;