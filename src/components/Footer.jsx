import React from "react";
import './footer.css'
import c from '../images/two.webp'
import bb from '../images/back.webp'

import w from '../images/p1.png'
import x from '../images/p2.png'
import y from '../images/p3.png'
import z from '../images/p4.png'
import a from '../images/p5.png'


function Footer() {

    return (
        <footer>
            <div className="footerTop">
                <div className="footopLeft">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="txter">
                        <h2>SUBSCRIBE OUR NEWSLETTER</h2>
                        <p>To Get 20% Off On Your First Purchase</p>
                    </div>
                </div>
                <div className="footopLRigh">
                    <form>
                        <input type="text" placeholder="Enter your email..." />
                        <button>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className="footerBtm" style={{ backgroundImage: `url(${bb})` }}>
                <div className="footBtmTop">
                    <img src={c} alt="" />
                    <ul className="firstul">
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                        <li><i className="fa-brands fa-twitter"></i></li>
                        <li><i className="fa-brands fa-linkedin-in"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-pinterest-p"></i></li>
                    </ul>
                    <ul className="secondul">
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Blogs</li>
                        <li>Payment Policy</li>
                        <li>Return Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div className="footBtmBtm">
                    <p>Copyright  2022 spacingtech all rights reserved</p>
                    <div className="mannys">
                        <img src={w} alt="" />
                        <img src={x} alt="" />
                        <img src={y} alt="" />
                        <img src={z} alt="" />
                        <img src={a} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer