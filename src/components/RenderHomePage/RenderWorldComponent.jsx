import React, { Component } from 'react';



class RenderWorldComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.info.map(info =>{

                return(
                info.headLines.map(headLine => headLine.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { headLine.title }</h1>
                        <img src={headLine.urlToImage} width="100%"/>
                        <div className='row'>
                            {headLine.content} 
                        </div>
                        <p>Source: {headLine.author}</p>
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
 
export default RenderWorldComponent;