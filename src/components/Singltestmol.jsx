import React from "react";


function Singltestmol(props) {

    return (
        <div className="singlTestmol item">
            <p>{props.value.para}</p>
            <h2>{props.value.name}</h2>
            <span>{props.value.title}</span>
            <div className="sobis">
                <img src={props.value.img} alt="" />
            </div>
        </div>
    )
}

export default Singltestmol