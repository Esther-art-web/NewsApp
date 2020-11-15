import React, { Component } from 'react';

class RenderBusinessComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.info.map(info =>{

                return(
                info.business.map(business => business.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { business.title }</h1>
                        <img src={business.urlToImage} width="100%" alt=''/>
                        <div className='row mt-5'>
                            {business.content} 
                        </div>
                        <cite>Source: {business.author}</cite>
                    </div>
                    
                </div>)
            
                : 
                
            null)
            );
                })}
            
            
            
            </div>
         );
    }
}
 
export default RenderBusinessComponent;