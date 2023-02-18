import React from "react";
import Website from "../assets/Website-3.jpg";
import Portfolio from "../assets/Portfolio-2.jpg";
import fotopoul from "../assets/fotopoul.jpg";


 function ProjectSection(){
    return(
        <div className="container text-center my-5">
       <h1 className="font-weight-light">
        <span className="text-info" style={{fontSize:"40px"}}>Developer</span>
       </h1>
       <div className="lead">I build the products, Just like this..</div>
       <div className="row my-5 pt-3">
        <div className="col-12 col-md-4 my-2 text-justify">
           
            <div className="card shadow">
                <img className="card-img-top" src={Website}
                alt="Website-3"
                />
              
              <div className="card-body">
           <h4 className="card-title">What is full stack developer.</h4>  
           <p className="text-primary">A full-stack developer is a developer or engineer who can build both the front-end 
           and the back-end of a website. The front end (the parts of a website a user sees and interacts with) and 
           the back end (the behind-the-scenes data storage and processing) require different skill sets.  </p>              
            </div>
            </div>
        </div>
        <div className="col-12 col-md-4 my-2 text-justify">
           
            <div className="card shadow">
                <img className="card-img-top" 
                src={Portfolio}
                alt="Portfolio-2"
                />
              
              <div className="card-body">
           <h4 className="card-title">full-stack developer do.</h4>  
           <p className="text-primary">The world of full-stack development is large, 
           and many new and evolving technologies continually push the limits of what a full-stack developer can create. 
           Staying on top of cutting-edge technology and techniques in the full-stack development 
           field.</p>
                       
            </div>
            </div>
        </div>
        <div className="col-12 col-md-4 my-2 text-justify">
        
            <div className="card shadow">
                <img className="card-img-top" 
                src={fotopoul}
                alt="fotopoul"
                />
              
              <div className="card-body">
           <h4 className="card-title">Front-end Development.</h4>  
           <p className="text-primary">Front-end development is the process of creating the interface of a website. 
           It entails coding details like drop-down menus, fonts, colors, and page layouts. 
           Full-stack developers should also know how to work with front-end 
           technologies like HTML, CSS, JavaScript and Bootstrap</p>   
                      
            </div>
            </div>
        </div>
        
       
        
        </div>
        
        </div>
    );
 }
 export default ProjectSection;