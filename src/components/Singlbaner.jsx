import React from "react";

function Singlbaner(props) {
    return (
        <div className="singlbanner" style={{ backgroundImage: `url(${ props.value.img })` }}>
            <div className="bannertext">
                <p>{props.value.title}</p>
                <h1>{props.value.desc}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
}

export default Singlbaner