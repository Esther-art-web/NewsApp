import React, { Component } from 'react';

class RenderHomePolitics extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.info.map(info =>{

                return(
                info.politics.map(politics => politics.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { politics.title }</h1>
                        <img src={politics.urlToImage} width="100%"/>
                        <div className='row'>
                            {politics.content} 
                        </div>
                        <p>Source: {politics.author}</p>
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
 
export default RenderHomePolitics;