import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { IconSlide, SlideItem } from "./index";
import { headerSlide } from "../constants";


const Slider = () => {

    return (
        <div className="relative">
            {/*Main Slide */}
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    "--swiper-navigation-size": "21px"
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                navigation={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Navigation, Autoplay]}
                className={`mySwiper h-[calc(100dvh_-_60px)] w-full`}
            >
                {headerSlide.map((slide: any) => {
                    return (
                        <SwiperSlide
                            key={slide.title}
                            className="w-full h-full">
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
            <IconSlide />
        </div>
    );
};

export default Slider;
