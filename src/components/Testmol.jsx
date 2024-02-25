import React, { useEffect, useState } from "react";
import './testmol.css'
import Singltestmol from "./Singltestmol";
import t from '../images/hamimone.webp'
import u from '../images/hamimtwo.webp'
import v from '../images/hamimthree.webp'
import w from '../images/hamimfour.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';


function Testmol() {

    const [wind, setWind] = useState(0)
    const daimond = () => {
        setWind(window.innerWidth)
    }

    const [star, setStar] = useState([])
    useEffect(() => {
        setStar([
            {
                img: t,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus magnam nostrum sit pariatur aliquid id deserunt nobis adipisci temporibus beatae.",
                name: "Glasgow Mickel",
                title: "IOS Developer"
            },
            {
                img: u,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus magnam nostrum sit pariatur aliquid id deserunt nobis adipisci temporibus beatae.",
                name: "Glasgow Mickel",
                title: "IOS Developer"
            },
            {
                img: v,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus magnam nostrum sit pariatur aliquid id deserunt nobis adipisci temporibus beatae.",
                name: "Glasgow Mickel",
                title: "IOS Developer"
            },
            {
                img: w,
                para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus magnam nostrum sit pariatur aliquid id deserunt nobis adipisci temporibus beatae.",
                name: "Glasgow Mickel",
                title: "IOS Developer"
            }
        ])
        daimond()
        window.addEventListener("resize", daimond)
    }, [])

    return (
        <section className="testmol">
            <div className="cusialTop">
                <h1>Testimonials</h1>
            </div>
            <div className="testmolBtm">
                <Swiper
                    slidesPerView={wind > 900 ? 3 : wind > 700 ? 2 : 1}
                    centeredSlides={true}
                    loop={true}
                    centeredSlidesBounds={true}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                >
                    {
                        star.map((val, ind) => {
                            return <SwiperSlide key={ind}><Singltestmol value={val} /></SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Testmol