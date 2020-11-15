import React, { Component } from 'react';


class RenderHeadLinesComponent extends Component {
    
    
    render() { 
        console.log(this.props.info)
        console.log(this.props.match)
        
        return(
           
            <div>
                {this.props.info.map(info =>{

                return(
                info.headLines.map(headLine => headLine.title=== this.props.match.params.title? (
                   
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { headLine.title }</h1>
                        <img src={headLine.urlToImage} width="100%" alt='' />
                        <div className='row mt-5'>
                            {headLine.content} 
                        </div>
                        
                        <cite>Source: {headLine.author}</cite>
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
 
export default RenderHeadLinesComponent;