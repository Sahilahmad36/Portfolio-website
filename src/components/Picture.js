import React from "react"
import CodeA from "../assets/CodeA-3.jpg";
import CodeB from "../assets/CodeB-4.jpg";
import CodeC from "../assets/CodeC-5.jpg";
import CodeE from "../assets/CodeE-7.jpg";
import fotopoul from "../assets/fotopoul.jpg";
import CodePic from "../assets/CodePic-1.jpg";
function Picture() {
  return (
    <div className="container my-2 pt-4">
      <div className="row my-2 px-2" >
        <div className="col-12 col-md-5 py-1">
            <div className="card shadow">
                <div className="container">
          <img className="card-img-top" style={{height:"418px"}}
          src={CodeA}
          alt="CodeA-3"
          />
          <i className="fas fa-heart text-danger"></i>
          </div>
            </div>

        </div>
        <div className="col-12 col-md-7 py-1">
            <div className="card shadow">
          <img className="card-img-top"
          src={CodeB}
          alt="CodeB-4"
          />
            </div>

        </div>
        <div className="col-12 col-md-6">
            <div className="card shadow">
          <img className="card-img-top"
          src={CodeC}
          alt="CodeC-5"
          />
            </div>

        </div>
        <div className="col-12 col-md-6">
            <div className="card shadow">
          <img className="card-img-top"
          src={CodeE}
          alt="CodeE-7"
          />
            </div>

        </div>
        <div className="col-12 col-md-6">
            <div className="card shadow">
          <img className="card-img-top"
          src={fotopoul}
          alt="fotopoul"
          />
            </div>

        </div>
        <div className="col-12 col-md-6">
            <div className="card shadow">
          <img className="card-img-top"
          src={CodePic}
          alt="CodePic-1"
          />
            </div>

        </div>

      </div>
    </div>
  );
}
 export default Picture;


