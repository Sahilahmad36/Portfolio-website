import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-white">
        <div className="container my-1" style={{ backgroundColor:"black"}}>
            <a href="/" className="navbar-brand text-primary font-weight-bold">SRH</a>
            <Link to="/contact" className="ml-auto mx-3">
             <button className="btn btn-outline-info">Contact me</button>
             </Link>
        
        <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"
        >
          <span className="fas fa-bars text-primary"></span>
          </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
            <div className="navbar-nav">
                
                <a href="/" className="nav-item nav-link text-primary h5 mx-1 my-auto">
                 Blogs
                    </a>
                    <Link to="/addfile" className="nav-item nav-link text-primary h5 mx-1 my-auto">
                    projects
                    </Link>
                    
                    </div>
        </div>
           
        </div>
    
    </nav>
    );
}
export default Navbar;