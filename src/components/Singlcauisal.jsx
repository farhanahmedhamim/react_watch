import React from "react";


function Singlcausisal(props) {

    return (
        <div className="singlcausial">
            <div className="singcusitop">
                <ul className="list">
                    <li><i className="fa-solid fa-cart-shopping"></i></li>
                    <li><i className="fa-solid fa-eye"></i></li>
                    <li><i className="fa-solid fa-heart"></i></li>
                </ul>
                <img className="opacone" src={props.value.img1} alt="" />
                <img className="opactow" src={props.value.img2} alt="" />
            </div>
            <div className="singcusibtm">
                <p>{props.value.title}</p>
                <span>{props.value.price}</span>
                <div className="iconnnis">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    )
}

export default Singlcausisal