import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { IconSlide, SlideItem } from "./index";
import { headerSlide } from "../constants";

interface Props {
    navHeight: number;
}

const Slider = (props: Props) => {
    const { navHeight } = props;

    return (
        <div className="relative border border-2 border-green-900">
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
                effect={""}
                modules={[EffectFade, Pagination, Navigation]}
                className={`mySwiper h-[calc(100dvh_-_60px)] w-full`}
            >
                {headerSlide.map((slide, index) => {
                    return (
                        <SwiperSlide className="w-full h-full">
                            <SlideItem
                                key={slide.title + index}
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
