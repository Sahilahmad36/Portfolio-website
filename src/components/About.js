import React from "react";
import Card from "../assets/Card1.jpg";
  function About(){
    return(
        <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Us</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img 
                    src={Card} className= "img-fluid" 
                    alt=" " 
                    />
                </div>
    
                <div className="col-lg-8">
                    <p> A Full Stack Developer is someone who works with the Back End — or 
                        server side — of the application as well as the Front End, 
                        or client side. Full Stack Developers have to have some skills in 
                        a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well. 
                        They are something of a swing, ready to assist wherever needed in the process.
                        
                    </p>
                   
                    <div className="row mt-3">
                        <p> 
                        Some of the responsibilities of a Full Stack Developer include:

Helping with the design and development of software
Testing and debugging software to keep it optimized
Writing clean code for the front and back end of the software
Designing user interactions on the web application itself
Creating servers and databases for the back end of the software
Ensuring cross-platform compatibility and optimization
Testing and maintaining the responsive design of applications
Working with graphic designers to design new features
Developing APIs and RESTful services


                        </p>
                    </div>
                </div>
            </div>
            </div>
    </section>
    );
  }
  export default About;