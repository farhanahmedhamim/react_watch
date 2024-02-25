import React, { useEffect, useState, useRef } from "react";
import './header.css'
import a from '../images/two.webp'
import b from '../images/one.png'

function Header() {

    const [headerToggle, setHeaderToggle] = useState(false)
    const [scroll, setScroll] = useState(0)

    const refOne = useRef()
    const refTwo = useRef()
    const refThree = useRef()

    useEffect(() => {
        setScroll(window.scrollY)
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })
    }, [])

    const toggleRun = () => {
        setHeaderToggle(prev => !prev)
    }

    const dropdown = (ref) => {
        ref.current.style.height = ref.current.clientHeight + 'px'
    }

    return (
        <header className={scroll > 99 ? "active" : ""}>
            <div className="overlay" onClick={toggleRun} style={{ display: headerToggle ? "block" : "none" }}></div>
            <div className="opicter"></div>
            <div className="headerLeft">
                <img src={b} alt="" style={{ display: scroll ? "block" : "none" }} />
                <img src={a} alt="" style={{ display: scroll ? "none" : "block" }} />
            </div>
            <div className="headerCenter" style={{ left: headerToggle ? "0" : "-300px" }}>
                <i className="fa-solid fa-xmark" onClick={toggleRun} style={{ display: headerToggle ? "block" : "none", cursor: "pointer" }}></i>
                <div className="barman">
                    <i className="fa-solid fa-bars"></i>
                    <p>Menu</p>
                </div>
                <ul className="more">
                    <li className="order" onClick={() => dropdown(refOne)}>Home <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu" ref={refOne}>
                            <li>Home</li>
                            <li>Home 2</li>
                            <li>Home 3</li>
                            <li>Home 4</li>
                            <li>Home 5</li>
                        </ul>
                    </li>
                    <li className="order" onClick={() => dropdown(refTwo)}>Collection <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu" ref={refTwo}>
                            <li>Collection</li>
                            <li>Collection 1</li>
                            <li>Collection 2</li>
                            <li>Collection 3</li>
                            <li>Collection 4</li>
                        </ul>
                    </li>
                    <li className="order">Blog</li>
                    <li className="order" onClick={() => dropdown(refThree)}>Pages <i className="fa-solid fa-chevron-down"></i>
                        <ul className="menu" ref={refThree}>
                            <li>Pages</li>
                            <li>Pages 1</li>
                            <li>Pages 2</li>
                            <li>Pages 3</li>
                            <li>Pages 4</li>
                            <li>Pages 5</li>
                            <li>Pages 6</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="headerRight">
                <div className="icones">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-heart"></i>
                    <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="bbbrrr">
                    <i className="fa-solid fa-bars-staggered" onClick={toggleRun}></i>
                </div>
            </div>
        </header>
    )
}

export default Header
