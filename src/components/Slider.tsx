import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { staggerContainer, fadeIn } from "../utils/motion";
import { headerSlide } from "../constants";

interface SlideItemProps {
    bgImage: string;
    title: string;
    body: string;
    btn: Object;
}

const SlideItem = (props: SlideItemProps) => {
    const { bgImage, title, body, btn } = props;
    console.log(btn);
    return (
        <div
            className="h-full w-full flex items-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="space-y-5 px-3 pl-4 text-white"
            >
                <motion.h2
                    variants={fadeIn("down", "tween", 0.5, 1)}
                    className="text-2xl font-black text-white capitalize"
                >
                    {title}
                </motion.h2>
                <motion.p
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="text-sm"
                >
                    {body}
                </motion.p>
                <motion.button
                    variants={fadeIn("up", "spring", 0.85, 1.5)}
                    className={`${`bg-${btn?.color}-400`} p-2 px-4 border border-2`}
                >
                    {btn.text}
                </motion.button>
            </motion.div>
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
        <div className="relative border border-2 border-green-900">
            {/*Main Slide */}
            <Swiper
                style={{
                    "--swiper-navigation-color": "#ce1414",
                    "--swiper-pagination-color": "#ce1414"
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className={`mySwiper h-[calc(100dvh_-_60px)] w-full`}
            >
                {headerSlide.map((slide, index) => {
                    return (
                        <SwiperSlide className="w-full h-full">
                            <SlideItem
                                bgImage={slide.bgImage}
                                title={slide.title}
                                body={slide.body}
                                btn={slide.btn}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/*icons Slider */}
            <Swiper
                slidesPerView={2}
                className="absolute bottom-10 m-auto left-0 right-0 border border-2 border-yellow-600 m-0 h-14 w-9/12"
            >
                {headerSlide.map((slide, index) => {
                    return (
                        <SwiperSlide className="w-full h-full">
                            <SlideItem
                                bgImage={slide.bgImage}
                                title={slide.title}
                                body={slide.body}
                                btn={slide.btn}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            {/* icon slider  end*/}
        </div>
    );
};

export default Slider;
