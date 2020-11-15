import React, { Component } from 'react';

class RenderEntertainmentComponent extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div>
                {this.props.info.map(info =>{

                return(
                info.entertainment.map(entertainment => entertainment.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { entertainment.title }</h1>
                        <img src={entertainment.urlToImage} width="100%" alt='' />
                        <div className='row mt-5'>
                            {entertainment.content} 
                        </div>
                        <cite>Source: {entertainment.author}</cite>
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
 
export default RenderEntertainmentComponent;