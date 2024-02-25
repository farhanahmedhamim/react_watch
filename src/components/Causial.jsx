import React, { useEffect, useState } from "react";
import './causial.css'
import Singlcausisal from "./Singlcauisal";
import p from '../images/ppp.webp'
import d from '../images/pp.webp'
import f from '../images/mmm.webp'
import s from '../images/mm.webp'
import q from '../images/nnn.webp'
import r from '../images/nn.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Causial() {
    const [withe, setWidthe] = useState(0)

    const hamim = () => {
        setWidthe(window.innerWidth)
    }


    const [aarr, setAarr] = useState([])
    useEffect(() => {
        setAarr([
            {
                img1: p,
                img2: d,
                title: "Smartwatch Golden Black",
                price: "$115,00"
            },
            {
                img1: f,
                img2: s,
                title: "Smartwatch Golden",
                price: "$15,00"
            },
            {
                img1: q,
                img2: r,
                title: "Smartwatch Black",
                price: "$125,00"
            }
        ])
        hamim()
        window.addEventListener("resize", hamim)
    }, [])



    return (
        <section className="causial">
            <div className="cusialTop">
                <h1>Casual Watches</h1>
            </div>
            <div className="causialBtm">
                <Swiper
                    slidesPerView={withe > 900 ? 3 : withe > 600 ? 2 : 1}
                    spaceBetween={50}
                >
                    {
                        aarr.map((val, ind) => {
                            return <SwiperSlide key={ind}><Singlcausisal value={val} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Causial