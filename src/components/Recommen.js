import React from "react";
import Coding from "../assets/Coding-2.jpg";
import CodePic from "../assets/CodePic-1.jpg";
import CodePic1 from "../assets/CodePic1-2.jpg";
function Recommen() {
  return (

      <div className="container text-center">
        
        <div className="row my-5 pt-3">
        
                
            <div className="col-12 col-md-4 my-2">
            <div className="card shadow ">
            <img src={Coding}
                     alt="Coding-2"
                    />
                
                   <div className="card-body">
                    <div className="card-title">
                        <h1 style={{fontSize:"20px"}}>Command line OSX:</h1>
                    <h3 className="card-text text-center text-danger" style={{fontSize:"20px"}}>
                    type in command pellet (cmd+shift+P):  
                    </h3>
                   </div> 
                </div>
                </div> 
                </div>
                <div className="col-12 col-md-4 my-2">
            <div className="card shadow ">
            <img src={CodePic}
                     alt="CodePic-1"
                    />
                
                   <div className="card-body">
                    <div className="card-title">
                        <h1 style={{fontSize:"20px"}}>Internet Explorer:</h1>
                    <h3 className="card-text text-center text-danger" style={{fontSize:"20px"}}>
                    CTRL + U. Or right click and select “View Source code". 
                    </h3>
                   </div> 
                </div>
                </div>
                </div>
                <div className="col-12 col-md-4 my-2">
            <div className="card shadow ">
            <img src={CodePic1}
                     alt="CodePic1-2"
                    />
                
                   <div className="card-body">
                    <div className="card-title">
                        <h1 style={{fontSize:"20px"}}>Close all open editor tabs:</h1>
                    <h3 className="card-text text-center text-danger" style={{fontSize:"20px"}}>

                    Windows/ Linux : Ctrl + k  + w 
                    Mac : Cmd + k + w
                    </h3>
                    </div>
                </div>
                </div>
                </div>

        </div>  
        </div>

    
  );
}

export default Recommen;
