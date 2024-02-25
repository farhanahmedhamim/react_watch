import React, { useEffect, useState } from "react";
import './banner.css'
import c from '../images/first.webp'
import d from '../images/second.webp'
import Singlbaner from "./Singlbaner";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Banner() {
    SwiperCore.use([Autoplay]);

    const [arry, setArry] = useState([])

    useEffect(() => {
        setArry([
            {
                title: "Watch ia a portable",
                desc: "Watch orign wrist watches quart watch",
                img: d
            },
            {
                title: "Watch ia a portable",
                desc: "Watch orign wrist watches quart watch",
                img: c
            }
        ])
    }, [])

    return (
        <section className="banner">
            <Swiper
                slidesPerView={1}
                modules={[Pagination]}
                // autoplay={true}
                pagination={{ clickable: true }}
            >
                {
                    arry.map((val, ind) => {
                        return <SwiperSlide key={ind}><Singlbaner value={val} /></SwiperSlide>
                    })
                }
            </Swiper>
        </section>
    )
}

export default Banner