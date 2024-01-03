import React from "react";
import {
    ButtonBack,
    ButtonFirst,
    ButtonLast,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    Dot,
    ImageWithZoom,
    Slide,
    Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { headerSlide } from "../constants";

interface Props {
    // Define your props here
}
type slideItemProps = {
    index: number;
    bgImage: string;
    title: string;
};

const SlideItem = (props: slideItemProps) => {
    const { index, bgImage, title } = props;
    return (
        <Slide index={0}>
            <ImageWithZoom src={bgImage}>{title} </ImageWithZoom>
        </Slide>
    );
};

const Header = () => {
    return (
        <CarouselProvider
            visibleSlides={1}
            totalSlides={headerSlide.length}
            step={1}
            naturalSlideWidth={400}
            naturalSlideHeight={800}
            hasMasterSpinner
            lockOnWindowScroll
            infinite
        >
            <Slider>
                {headerSlide.map((slide, index) => {
                    return (
                        <SlideItem
                            index={index}
                            title={slide.title}
                            bgImage={slide.bgImage}
                        />
                    );
                })}
            </Slider>
            <ButtonFirst>First</ButtonFirst>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <ButtonLast>Last</ButtonLast>
            <Dot
                slide={0}
                className="bg-red-600 p-2 rounded-full  top-2 z-50"
            />
        </CarouselProvider>
    );
};

export default Header;
