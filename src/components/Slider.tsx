import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { headerSlide } from "../constants";

interface SlideItemProps {
    bgImage: string;
    title: string;
    body: string;
    btnText: string;
}

const SlideItem = (props: SlideItemProps) => {
    const { bgImage, title, body, btnText } = props;
    console.log(bgImage);
    return (
        <div
            className="h-full w-full flex items-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="space-y-5 px-3 pl-4 text-white">
                <h2 className="text-2xl font-black text-white capitalize">
                    {title}
                </h2>
                <p className="text-sm"> {body}</p>
                <button className="p-2 px-3.5 border border-2">
                    {btnText}
                </button>
            </div>
        </div>
    );
};

interface Props {
    navHeight: number;
}

const Slider = (props: Props) => {
    const { navHeight } = props;

    console.log(navHeight);

    return (
        <div className="">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className={`h-[calc(100dvh_-_60px)]`}
            >
                {headerSlide.map((slide, index) => {
                    return (
                        <SwiperSlide className="w-full h-full">
                            <SlideItem
                                bgImage={slide.bgImage}
                                title={slide.title}
                                body={slide.body}
                                btnText={slide.btnText}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
