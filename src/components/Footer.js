import React from "react";
import {Link} from "react-router-dom";
function Footer(){
    return(
        <footer>
        <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
        <div className="row pt-5">
        <div className="col-12">
         <h2 className="text-light">Interested in working with me</h2>
         <button className="btn btn-outline-light btn-lg btn-info">Let's talk</button>  
        </div>
        </div>
        <div className="row">
        <div className="col-12 col-md-4 py-3">
            <h5 className="text-success">More links</h5>
            <a href="/" className="text-secondary d-block">
                Blogs</a> 
            <a href="/" className="text-info d-block">
                Home</a>
            <a href="/" className="text-primary d-block">
                Contents</a>
            <Link to="/contact" className="text-danger d-block">
                Contact me</Link>
            <Link to="/projects" className="text-warning d-block">
               Add projects
                <i className="fas fa-heart text-light"></i>
            </Link>
            
        <Link to="/codingpicture">
            <h5 className="text-danger">
        coding picture's
        </h5>
        
       </Link>
            </div>
            <div className="col-12 col-md-4 text-light text-justify py-3">
              <p>
                Originally created by a designer and a developer at Twitter, 
                Bootstrap has become one of the most popular front-end 
                frameworks and open source projects in the world.

                Bootstrap was created at Twitter in mid-2010 by @mdo and @fat.
                Prior to being an open-sourced framework, 
                Bootstrap was known as Twitter Blueprint. A few months into development, 
                Twitter held its first Hack Week and the project exploded as developers 
                of all skill levels jumped in without any external guidance.
                It served as the style guide for internal tools development at the 
                company for over a year before its public release, 
                and continues to do so today.
              </p>
            </div>
            <div className="col-12 col-md-4 py-3">
                <h4 className="text-info">Social</h4>
                <a href="/" className="text-info">
                    <i className="fab fa-youtube text-danger h1 d-block"></i>
                </a>
                <a href="/">
                    <i className="fab fa-whatsapp text-danger h1 d-block"></i>
                </a>
                <a href="/">
                    <i className="fab fa-instagram text-danger h1 d-block"></i>
                </a>
            </div>
            </div>
            
        </div>
    </footer>
    );
} 
export default Footer;