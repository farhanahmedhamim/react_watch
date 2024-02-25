import React from "react";
import './watch.css'
import o from '../images/service.webp'


function Watch() {


    return (
        <section className="watch">
            <div className="watchLeft">
                <div className="singlWatch">
                    <div className="icoanim">
                        <div className="dynamic">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>
                    <h2>Support 24/7</h2>
                    <p>Lorem is simply dummy <br /> text of the printing.</p>
                </div>
                <div className="singlWatch">
                    <div className="icoanim">
                        <div className="dynamic">
                            <i className="fa-solid fa-file-circle-check"></i>
                            <i className="fa-solid fa-file-circle-check"></i>
                        </div>
                    </div>
                    <h2>7 Days Return</h2>
                    <p>Lorem is simply dummy <br /> text of the printing.</p>
                </div>
                <div className="singlWatch">
                    <div className="icoanim">
                        <div className="dynamic">
                            <i className="fa-solid fa-lock"></i>
                            <i className="fa-solid fa-lock"></i>
                        </div>
                    </div>
                    <h2>100% Payment Secure</h2>
                    <p>Lorem is simply dummy <br /> text of the printing.</p>
                </div>
            </div>
            <div className="watchCent">
                <img src={o} alt="" />
            </div>
            <div className="watchRight">
                <ul>
                    <li><i className="fa-solid fa-check"></i><p>A reflective coating.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>A case and strap made of solid metal.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>Made in Switzerland, Germany or Japan.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>A high water resistance rating.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>A'chronometer rating.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>A‘synthetic sapphire' crystal.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>Water Redistancer of a watch.</p></li>
                    <li><i className="fa-solid fa-check"></i><p>KindC of watch glass.</p></li>
                </ul>
            </div>
        </section>
    )
}

export default Watch