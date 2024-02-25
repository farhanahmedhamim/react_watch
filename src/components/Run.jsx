import React, { useEffect, useState } from "react";
import './run.css'

function Run() {


    const [reu, setRun] = useState(false)
    const runing = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 200) {
                setRun(true)
            } else {
                setRun(false)
            }
        })
    })


    return(
        <div className="ran" onClick={runing} style={{opacity: reu ? "1" : "0"}}><i className="fa-solid fa-chevron-up"></i></div>
    )
}


export default Run