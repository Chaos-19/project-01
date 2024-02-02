import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import { iconSlider } from "../constants";

interface slideIconProps {
    icon: string;
    title: string;
    key: string;
}

const SlidIconItem = (props: slideIconProps) => {
    const { icon, title } = props;

    return (
        <Link
            to="/"
            className="text-white capitalize"
        >
            <figure className="flex flex-col justify-center items-center">
                <img
                    src={icon}
                    alt={`${title} icon`}
                    className="w-14 h-14 bg-cover"
                />
                <figcaption>{title}</figcaption>
            </figure>
        </Link>
    );
};

const IconSlide = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 5
                },

                1024: {
                    slidesPerView: 5
                }
            }}
            className="absolute bottom-10 m-auto left-0 right-0 m-0 h-auto w-9/12"
        >
            {iconSlider.map((slide, index) => {
                return (
                    <SwiperSlide
                        key={slide.title}
                        className="w-full h-full">
                        <SlidIconItem
                            icon={slide.icon}
                            title={slide.title}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default IconSlide;
