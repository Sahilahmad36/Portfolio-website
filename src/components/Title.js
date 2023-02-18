import React from "react";
import Sahil from "../assets/Sahil-sitaishi.jpg";
function Title(){
    return(
        <div className="container">
            
        <div className="row text-center align-item-center" style={{ backgroundColor:"lightyellow"}}>
            <div className="col-12 col-md-6 my-5">
            <img
                 className="img-fluid rounded-circle w-50"
                  src={Sahil}
                  alt="Sahil-sitaishi"
                  />
                
            </div>
            <div className="col-12 col-md-6 pt-5 my-5">

            
            <div className="font-weight-light text-info" style={{ fontSize : "60px" }}>
                {/* Hi I'm <span className="text-info">Sahil </span> */}
                Hi I'm Sahil
            </div>
            <h4 className="font-weight-light">I'm a Full Stack Developer</h4>
            
        </div>
        </div>
    </div>
    );
}
export default Title;