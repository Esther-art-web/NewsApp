import React, { Component } from 'react';

class RenderHealthComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {this.props.info.map(info =>{

            return(
            info.health.map(health => health.title=== this.props.match.params.title? (
            
            <div className='container'>
                <div className= 'row row-content'>
                <h1> { health.title }</h1>
                    <img src={health.urlToImage} width="100%" alt='' />
                    <div className='row mt-5'>
                        {health.content} 
                    </div>
                    <cite>Source: {health.author}</cite>
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
 
export default RenderHealthComponent;