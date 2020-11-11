import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
           
            <div className= 'footer mt-5'>
                <div className= 'row' >
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>News Categories</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/world">World</Link></li>
                            <li><Link to="/politics">Politics</Link></li>
                            <li><Link to="/health">Health</Link></li>
                            <li><Link to="/entertainment">Entertainment</Link></li>
                            <li><Link to="/sports">Sports</Link></li>
                            <li><Link to="/tech">Tech</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            Nigeria<br />
                            <i className="fa fa-phone fa-lg"></i>: +234 5678 901<br />
                            <i className="fa fa-fax fa-lg"></i>: +234 0967 345<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:estheribeh68@gmail.com">
                                apex@news.co</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>  
            </div>
           
         
        );
    }
}
 
export default Footer;