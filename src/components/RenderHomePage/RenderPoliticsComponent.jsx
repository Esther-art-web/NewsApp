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
                        <div className='row mt-5'>
                            {politics.content} 
                        </div>
                        <cite>Source: {politics.author}</cite>
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