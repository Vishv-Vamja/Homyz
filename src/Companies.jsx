import React from "react";
import "./Companies.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
function Companies() {
    return ( 
        <div className="page-container">
            <div className="section-wrapprer">
                <div className="paddings innerWidth flexCenter c-container">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Companies;
