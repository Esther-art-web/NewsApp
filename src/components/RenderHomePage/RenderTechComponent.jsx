import React, { Component } from 'react';

class RenderTechComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.info.map(info =>{

                return(
                info.tech.map(tech => tech.title=== this.props.match.params.title? (
                
                <div className='container'>
                    <div className= 'row row-content'>
                    <h1> { tech.title }</h1>
                        <img src={tech.urlToImage} width="100%" alt='' />
                        <div className='row mt-5'>
                            {tech.content} 
                        </div>
                        <cite>Source: {tech.author}</cite>
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
 
export default RenderTechComponent;