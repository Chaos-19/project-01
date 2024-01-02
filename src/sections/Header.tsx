import React from "react";
import {
    ButtonBack,
    ButtonFirst,
    ButtonLast,
    ButtonNext,
    CarouselProvider,
    DotGroup,
    ImageWithZoom,
    Slide,
    Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { image1, image2, image3, image4 } from "../assets/index";

interface Props {
    // Define your props here
}

const Header = () => {
    return (
        <CarouselProvider
            visibleSlides={1}
            totalSlides={6}
            step={1}
            naturalSlideWidth={400}
            naturalSlideHeight={500}
            hasMasterSpinner
            lockOnWindowScroll
        >
            <Slider>
                <Slide index={0}>
                    <ImageWithZoom src={image1} />
                </Slide>
                <Slide index={1}>
                    <ImageWithZoom src={image2} />
                </Slide>
                <Slide index={2}>
                    <ImageWithZoom src={image3} />
                </Slide>
                <Slide index={3}>
                    <ImageWithZoom src={image4} />
                </Slide>
            </Slider>
            <ButtonFirst>First</ButtonFirst>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
            <ButtonLast>Last</ButtonLast>
            <DotGroup />
        </CarouselProvider>
    );
};

export default Header;
